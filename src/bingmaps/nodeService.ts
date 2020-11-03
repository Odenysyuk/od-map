"use strict";

import { NodeFormat, NodeSizeFormat, ColoringFormat } from "../formatModel";
import { LocationModel } from "../models";
import { ColorGeneration } from "./colorGeneration";
import powerbi from "powerbi-visuals-api";
import ISelectionManager = powerbi.extensibility.ISelectionManager;

export class NodeService {
    private readonly strokeWidthDefault: number;
    private readonly nodeSizeDefault: number;
    private readonly lineColorDefault: string;
    private readonly selectionManager: ISelectionManager;

    constructor(selectionManager: ISelectionManager) {
        this.lineColorDefault = "#0700FF";
        this.strokeWidthDefault = 3;
        this.nodeSizeDefault = 20;
        this.selectionManager = selectionManager;
    }

    public drawCircleNode(nodes: LocationModel[], format: NodeFormat, sizeFormat: NodeSizeFormat, lineColoring: ColoringFormat): Microsoft.Maps.Pushpin[] {
        var colorGenerator = this.getColorGenerator(nodes, lineColoring);

        return nodes.map(node => {
            const gradientColor = this.getNodeColor(colorGenerator, node, format);
            const gradientColorLine = this.getLineColor(colorGenerator, format, node, gradientColor);
            const svgSize = this.getNodeSize(node.data.Size, sizeFormat) / 2;
            return this.createCirclePushpin(node, svgSize, gradientColor, gradientColorLine, 1);
        });
    }

    public drawArroweNode(nodes: LocationModel[], format: NodeFormat, sizeFormat: NodeSizeFormat, lineColoring: ColoringFormat): Microsoft.Maps.Pushpin[] {
        var colorGenerator = this.getColorGenerator(nodes, lineColoring);

        return nodes.map(node => {
            const locationLines = node.location as Microsoft.Maps.Location[];
            const heading = Microsoft.Maps.SpatialMath.getHeading(locationLines[0], locationLines[1]);
            const gradientColor = this.getNodeColor(colorGenerator, node, format);
            const gradientColorLine = this.getLineColor(colorGenerator, format, node, gradientColor);
            const svgSize = this.getNodeSize(node.data.Size, sizeFormat) / 2;
            return this.createArrowPushpin(node, heading, locationLines[1], svgSize, gradientColor, gradientColorLine, 2);
        });
    }

    private getColorGenerator(nodes: LocationModel[], lineColoring: ColoringFormat): ColorGeneration {
        let colorValues = nodes.map(x => Number(x.data.LineColor)).filter(x => !isNaN(x));
        return new ColorGeneration(lineColoring, colorValues);
    }

    private createCirclePushpin(model: LocationModel, radius: number, fillColor: string, strokeColor: string, strokeWidth: number) {

        strokeWidth = strokeWidth || this.strokeWidthDefault;
        //Create an SVG string of a circle with the specified radius and color.
        const svg = ['<svg xmlns="http://www.w3.org/2000/svg" width="', (radius * 2),
            '" height="', (radius * 2), '"><circle cx="', radius, '" cy="', radius, '" r="',
            (radius - strokeWidth), '" stroke="', strokeColor, '" stroke-width="', strokeWidth, '" fill="', fillColor, '"/></svg>'];
        //Create a pushpin from the SVG and anchor it to the center of the circle.
        var pushin = new Microsoft.Maps.Pushpin(model.location as Microsoft.Maps.Location, {
            icon: svg.join(''),
            anchor: new Microsoft.Maps.Point(radius, radius)
        });
        
        Microsoft.Maps.Events.addHandler(pushin, 'click', () => 
        {
            this.selectionManager.select(model.data.SelectionId)
        });
        return pushin;
    }

    private createArrowPushpin(node: LocationModel, heading, location, radius, fillColor, strokeColor, strokeWidth) {
        strokeWidth = strokeWidth || this.strokeWidthDefault;
        //Create an SVG string of a circle with the specified radius and color.
        var svg = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="', (radius * 2),
            '" height="', (radius * 2), '" transform="rotate(', heading, ')"', '> <polygon points="50,0 88,83 50,60 12,83" ', ' stroke="', strokeColor, '" stroke-width="', strokeWidth, '" fill="', fillColor, '"/></svg>'];
        //Create a pushpin from the SVG and anchor it to the center of the circle.

        var pushin = new Microsoft.Maps.Pushpin(location, {
            icon: svg.join(''),
            anchor: new Microsoft.Maps.Point(radius, radius),
        });
        debugger;
        Microsoft.Maps.Events.addHandler(pushin, 'click', () => 
        {
            this.selectionManager.select(node.data.SelectionId)
        });
        return pushin;
    }

    private getNodeSize(nodeSize: number, sizeFormat: NodeSizeFormat): number {
        let svgSize = nodeSize || this.nodeSizeDefault;
        if (!sizeFormat.changedSize) {
            return svgSize;
        }

        let minValue = Math.max(svgSize, sizeFormat.minValue);
        return Math.min(minValue, sizeFormat.maxValue);
    }

    private getNodeColor(colorGeneration: ColorGeneration, node: LocationModel, format: NodeFormat) {
        const nodeColor = node.data.LineColor || this.lineColorDefault;
        return colorGeneration.getColor(nodeColor, format.transparency);
    }

    private getLineColor(colorGeneration: ColorGeneration, format: NodeFormat, node: LocationModel, gradientColor: string) {
        return format.showNodeLine ? colorGeneration.getColor(node.data.LineColor || this.lineColorDefault) : gradientColor;
    }
}