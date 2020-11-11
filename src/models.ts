"use strict";
import powerbi from "powerbi-visuals-api";
import { ColumnView } from "./columnView";
import ISelectionIdBuilder = powerbi.visuals.ISelectionIdBuilder;

export class MapView {
    public Category: DataLabel;
    public Linestring: string = "";
    public Size: number = 0;
    public LineColor: string = "";
    public IconUrl: string = "";
    public PolygonCategory: DataLabel;
    public Polygon: string = "";
    public PolygonColor: string = "";
    public Tooltip: DataLabel;
    public DataLabel: DataLabel;
    public IsLineOverlapsPolygon: boolean;
    public SelectionId: ISelectionIdBuilder
}

export class LocationModel {
    public location: Microsoft.Maps.Location | Microsoft.Maps.Location[];
    public data: MapView;
}

export class PolylineModel {
    public polyline: Microsoft.Maps.Polyline;
    public data: MapView
}

export class PolygonModel {
    public polygon: Microsoft.Maps.Polygon;
    public data: MapView
}

export class DataLabel{
    public fieldName: string;
    public value: any;

    constructor(fieldName: string, value: any) {
       this.fieldName = fieldName;
       this.value = value;        
    }

    static getFields(): string [] {
        return [ColumnView.Category, ColumnView.PolygonCategory, ColumnView.Tooltip]
    }
    public toString = (): string => {
        return this.fieldName + " : " + this.value
    }
}