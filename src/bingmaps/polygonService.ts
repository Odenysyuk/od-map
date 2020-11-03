import { ColoringFormat } from './../formatModel';
import { PolygonFormat } from "../formatModel";
import { MapView, PolygonModel } from "../models";
import { ColorGeneration } from "./colorGeneration";
import powerbi from "powerbi-visuals-api";
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import { ColumnView } from "../columnView";

export class PolygonService {
    
    private readonly _strokeThicknessDefault: number;
    private readonly selectionManager: ISelectionManager;

    constructor(selectionManager: ISelectionManager) {
        this._strokeThicknessDefault = 2
        this.selectionManager = selectionManager;
    }

    public draw(data: MapView[], format: PolygonFormat, polygonColoring: ColoringFormat): PolygonModel[] {   
        let colorGeneration = this.getColorGenerator(data, polygonColoring);
        let strokeThickness = format.showline ? this._strokeThicknessDefault : 0;
        return data.filter(x => x.Polygon).map(item => this.createPolygon(item, format, strokeThickness, colorGeneration));
    }

    private getColorGenerator(data: MapView[], polygonColoring: ColoringFormat): ColorGeneration {
        let colorValues = data.map(x => Number(x[ColumnView.PolygonColor])).filter(x => !isNaN(x));
        return new ColorGeneration(polygonColoring, colorValues);
    }

    private createPolygon(item: MapView, format: PolygonFormat, strokeThickness: number, colorGeneration: ColorGeneration): PolygonModel {
        const polygonColor = item.PolygonColor || format.color;
        const polygon = Microsoft.Maps.WellKnownText.read(item.Polygon, {
            polygonOptions: {
                strokeColor: colorGeneration.getColor(polygonColor),
                strokeThickness: strokeThickness,
                fillColor: colorGeneration.getColor(polygonColor, format.transparency)
            }
        }) as Microsoft.Maps.Polygon;
        return { data: item, polygon: polygon };
    }

    public drawLabel(data: PolygonModel[]): Microsoft.Maps.Pushpin[]{
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