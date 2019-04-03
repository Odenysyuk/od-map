
interface LineFormat  extends ColoringFormat { 
    transparency: number;
}

interface ColoringFormat { 
    minColor: string;
    centerColor: string;
    maxColor: string;
    gradient: boolean;
    colorMinValue: number;
    colorMaxValue: number;
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
    showline: boolean;
    color: string;
    transparency: number;
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
    category: TextLabelFormat;
    mapLayers: MapLayerFormat;
    lineColoring: LineFormat;
    node: NodeFormat;
    oridinNode: NodeSizeFormat;
    destinationNode: NodeSizeFormat;
    polygon: PolygonFormat;
    polygonLabel: TextLabelFormat;
    polygonColoring: ColoringFormat;
    dataLabel: TextLabelFormat;
} 

interface DrawVisualFormat {
    reDrawPolyline?: boolean;
    reDrawCategory?: boolean;
    reDrawMapLayers: boolean;
    reDrawOridinNode?: boolean;
    reDrawDestinationNode?: boolean;
}