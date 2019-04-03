class PolygonService {
    private readonly _lineColorDefault: string;
    private readonly _strokeThicknessDefault: number;

    constructor() {
        this._lineColorDefault = "#0700FF";
        this._strokeThicknessDefault = 2
    }

    public draw(data: MapView[], format: PolygonFormat): PolygonModel[] {
        let colorPolygon = format.color || this._lineColorDefault;
        let colorPolygonRgb = RgbColor.hexToRgb(colorPolygon, format.transparency / 100).toString();
        let strokeColor = RgbColor.hexToRgb(colorPolygon, 1).toString();
        let strokeThickness = format.showline ? this._strokeThicknessDefault : 0;

        return data.filter(x => x.Polygon.length !== 0).map(item => {
            var polygon = Microsoft.Maps.WellKnownText.read(item.Polygon, {
                polygonOptions: {
                    strokeColor: strokeColor,
                    strokeThickness: strokeThickness,
                    fillColor: colorPolygonRgb
                }
            }) as Microsoft.Maps.Polygon;
            
            return { data: item, polygon: polygon };
        });
    }

    public darwLabel(data: PolygonModel[]): Microsoft.Maps.Pushpin[]{
        return data.map(item => {
            return this.addLabelToPolygon(item.polygon, item.data.PolygonCategory.toString())
        });
    }

    private addLabelToPolygon(polygon: Microsoft.Maps.Polygon, label: string): Microsoft.Maps.Pushpin {
        var centroid = Microsoft.Maps.SpatialMath.Geometry.centroid(polygon);
        //Create a pushpin that has a transparent icon and a title property set to the label value.
        var labelPin = new Microsoft.Maps.Pushpin(centroid, {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>',
            title: label
        });

        //Store a reference to the label pushpin in the polygon metadata.
        polygon.metadata = { 
            label: labelPin, 
            textColor: 'red',
            fontSize: 18,
            fontFamily: 'Arial'
        };
        return labelPin;
    }
}