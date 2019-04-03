interface LineColoringFormat {
    // shirtDirection: boolean;
    // shirtDegree: number; 
    minColor: string;
    centerColor: string;
    maxColor: string;
    colorMinValue: number;
    colorMaxValue: number;
    gradient: boolean;
    transparency: number;
}

interface TextLabelFormat {
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
    color: string;
}

interface NodeFormat {    
    transparency: number;
    showNodeLine: boolean;
}

interface NodeSizeFormat {
    show: boolean;
    changedSize: boolean; 
    minValue: number;
    maxValue: number;
}

interface VisualFormat {
    lineColoring: LineColoringFormat;
    category: TextLabelFormat;
    mapLayers: MapLayerFormat;
    node: NodeFormat;
    oridinNode: NodeSizeFormat;
    destinationNode: NodeSizeFormat;
    polygon: PolygonFormat;
    polygonLabel: TextLabelFormat;
    dataLabel: TextLabelFormat;
} 

interface DrawVisualFormat {
    reDrawPolyline?: boolean;
    reDrawCategory?: boolean;
    reDrawMapLayers: boolean;
    reDrawOridinNode?: boolean;
    reDrawDestinationNode?: boolean;
}