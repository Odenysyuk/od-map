class MapView {
    public Category: DataLabel;
    public Linestring: string = "";
    public Size: number = 0;
    public LineColor: string = "";
    public PolygonCategory: DataLabel;
    public Polygon: string = "";
    public Tooltip: DataLabel;
    public DataLabel: DataLabel;
}

class LocationModel {
    public location: Microsoft.Maps.Location | Microsoft.Maps.Location[];
    public data: MapView;
}

class PolylineModel {
    public polyline: Microsoft.Maps.Polyline;
    public data: MapView
}

class PolygonModel {
    public polygon: Microsoft.Maps.Polygon;
    public data: MapView
}

class DataLabel{
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