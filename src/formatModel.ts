"use strict";

export interface LineFormat  extends ColoringFormat { 
    transparency: number;
}

export interface ColoringFormat { 
    minColor: string;
    centerColor: string;
    maxColor: string;
    gradient: boolean;
    colorMinValue: number;
    colorMaxValue: number;
}

export interface TextLabelFormat {
    show: boolean;
    fontType: string;
    fontSize: number;
    fontColor: string;
    textAlignment: string;
}

export interface MapLayerFormat {
    type: string;
}

export interface PolygonFormat {
    show: boolean;
    showline: boolean;
    color: string;
    transparency: number;
}

export interface NodeFormat {    
    transparency: number;
    showNodeLine: boolean;
}

export interface NodeSizeFormat {
    show: boolean;
    changedSize: boolean; 
    minValue: number;
    maxValue: number;
}

export interface VisualFormat {
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

export interface DrawVisualFormat {
    reDrawPolyline?: boolean;
    reDrawCategory?: boolean;
    reDrawMapLayers: boolean;
    reDrawOridinNode?: boolean;
    reDrawDestinationNode?: boolean;
}