"use strict";

import { ColumnView } from './../columnView';
import { MapView, PolylineModel } from './../models';
import { LineFormat } from "../formatModel";
import { ColorGeneration } from "./colorGeneration";
import powerbi from "powerbi-visuals-api";
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import { KeyboardHandler } from './keyboardHandler';

export class PolylineService {
  private readonly lineColorDefault: string;
  private readonly strokeThicknessDefault: number;
  private readonly selectionManager: ISelectionManager;

  constructor(selectionManager: ISelectionManager) {
    this.lineColorDefault = "#0700FF";
    this.strokeThicknessDefault = 3;
    this.selectionManager = selectionManager;
  }

  public draw(data: MapView[], format: LineFormat): PolylineModel[] {
    var colorGeneration =  this.getColorGenerator(data, format);
    return data.filter(x => x.Linestring).map(item => this.createPolyline(item, format, colorGeneration));
  }

  private getColorGenerator(data: MapView[], lineColoring: LineFormat): ColorGeneration {
    let colorValues = data.map(x => Number(x[ColumnView.LineColor])).filter(x => !isNaN(x));
    return new ColorGeneration(lineColoring, colorValues);
  }

  private createPolyline(dataView: MapView, format: LineFormat, colorGeneration: ColorGeneration): PolylineModel {

    var polyline = Microsoft.Maps.WellKnownText.read(dataView.Linestring,
    {
      polylineOptions: {
        strokeColor: colorGeneration.getColor(dataView.LineColor || this.lineColorDefault, format.transparency),
        strokeThickness: this.strokeThicknessDefault
      }
    }) as Microsoft.Maps.Polyline;

    Microsoft.Maps.Events.addHandler(polyline, 'click', () => 
    {
        this.selectionManager.select(dataView.SelectionId, KeyboardHandler.CTRL_IS_PRESSED);
    });

    return {
      polyline: polyline,
      data: dataView
    };
  }
}