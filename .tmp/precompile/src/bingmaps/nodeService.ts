class NodeService {
    private readonly strokeWidthDefault: number;
    private readonly nodeSizeDefault: number;
    private readonly _lineColorDefault: string;
    private readonly colorGeneration: LineColoringGeneration;

    constructor(colorGeneration: LineColoringGeneration) {
        this.colorGeneration = colorGeneration;
        this._lineColorDefault = "#0700FF";
        this.strokeWidthDefault = 3;
        this.nodeSizeDefault = 20;
    }

    public drawCircleNode(nodes: LocationModel[], format: NodeFormat, sizeFormat: NodeSizeFormat): Microsoft.Maps.Pushpin[] {
        return nodes.map(node => {
            const gradientColor = this.getNodeColor(node, format);
            const gradientColorLine = this.getLineColor(format, node, gradientColor);
            const svgSize = this.getNodeSize(node.data.Size, sizeFormat)/2;
            return this.CreateCirclePushpin(node.location as Microsoft.Maps.Location, svgSize, gradientColor, gradientColorLine, 1);
        });
    }

    public drawArroweNode(nodes: LocationModel[], format: NodeFormat, sizeFormat: NodeSizeFormat): Microsoft.Maps.Pushpin[] {
        return nodes.map(node => {
            const locationLines = node.location as Microsoft.Maps.Location[];
            const heading = Microsoft.Maps.SpatialMath.getHeading(locationLines[0], locationLines[1]);
            const gradientColor = this.getNodeColor(node, format);
            const gradientColorLine = this.getLineColor(format, node, gradientColor);
            const svgSize = this.getNodeSize(node.data.Size, sizeFormat)/2;
            return this.CreateArrowPushpin(heading, locationLines[1], svgSize, gradientColor, gradientColorLine, 2);
        });
    }

    private CreateCirclePushpin(location: Microsoft.Maps.Location, radius: number, fillColor: string, strokeColor: string, strokeWidth: number) {

        strokeWidth = strokeWidth || this.strokeWidthDefault;
        //Create an SVG string of a circle with the specified radius and color.
        const svg = ['<svg xmlns="http://www.w3.org/2000/svg" width="', (radius * 2),
            '" height="', (radius * 2), '"><circle cx="', radius, '" cy="', radius, '" r="',
            (radius - strokeWidth), '" stroke="', strokeColor, '" stroke-width="', strokeWidth, '" fill="', fillColor, '"/></svg>'];
        //Create a pushpin from the SVG and anchor it to the center of the circle.
        return new Microsoft.Maps.Pushpin(location, {
            icon: svg.join(''),
            anchor: new Microsoft.Maps.Point(radius, radius)
        });
    }

    private CreateArrowPushpin(heading, location, radius, fillColor, strokeColor, strokeWidth) {
        strokeWidth = strokeWidth || this.strokeWidthDefault;
        //Create an SVG string of a circle with the specified radius and color.
        var svg = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="', (radius * 2),
            '" height="', (radius * 2), '" transform="rotate(', heading, ')"', '> <polygon points="50,0 88,83 50,60 12,83" ', ' stroke="', strokeColor, '" stroke-width="', strokeWidth, '" fill="', fillColor, '"/></svg>'];
        //Create a pushpin from the SVG and anchor it to the center of the circle.

        return new Microsoft.Maps.Pushpin(location, {
            icon: svg.join(''),
            anchor: new Microsoft.Maps.Point(radius, radius)
        });
    }

    private getNodeSize(nodeSize: number, sizeFormat: NodeSizeFormat): number {
        let svgSize = nodeSize || this.nodeSizeDefault;
        if (!sizeFormat.changedSize) {
            return svgSize;
        }

        let minValue = Math.max(svgSize, sizeFormat.minValue);
        return Math.min(minValue, sizeFormat.maxValue);
    }

    private getNodeColor(node: LocationModel, format: NodeFormat) {
        const nodeColor = node.data.LineColor || this._lineColorDefault;
        return this.colorGeneration.getColor(nodeColor, format.transparency);
    }

    private getLineColor(format: NodeFormat, node: LocationModel, gradientColor: string) {
        return format.showNodeLine ? this.colorGeneration.getColor(node.data.LineColor || this._lineColorDefault) : gradientColor;
    }
}