interface PolylineFormat {
    shirtDirection: boolean;
    shirtDegree: number;
    minColor: string;
    centerColor: string;
    maxColor: string;
    colorMinValue: number;
    colorMaxValue: number;
    transparency: number;
}

interface CategoryFormat {
    show: boolean;
    fontType: string;
    fontSize: number;
    fontColor: string;
    textAlignment: string;
}

interface MapLayerFormat {
    type: string;

}
interface PolygonFormat {
    show: boolean;
    transparency: number;
    showline: boolean;
    colorMax: string;
}

interface NodeFormat {
    show: boolean;
    minColor: string;
    centerColor: string;
    maxColor: string;
    transparency: number;
    showNodeLine: boolean;
}

interface NodeSizeFormat {
    show: boolean;
    minValue: number;
    maxValue: number;
}

interface VisualFormat {
    polyline: PolylineFormat;
    category: CategoryFormat;
    mapLayers: MapLayerFormat;
    node: NodeFormat;
    oridinNode: NodeSizeFormat;
    destinationNode: NodeSizeFormat;
    //polygon: PolygonFormat;
}  