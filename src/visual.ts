import { KeyboardHandler } from './bingmaps/keyboardHandler';
/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// powerbi.visuals

"use strict";
import * as d3 from "d3";
import powerbi from "powerbi-visuals-api";
import { MapController } from "./bingmaps/mapController";
import { ColumnView } from "./columnView";
import { DataLabel, MapView } from "./models";
import { VisualSettings } from "./settings";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import {loadBingApi} from "./initLibrary"
import { AppSetting } from "./appSetting";

export class Visual implements IVisual {
  private host: IVisualHost;
  private divMap: d3.Selection<HTMLElement>;
  private viewModel: MapView[];
  private visualSettings: VisualSettings;
  private mapController: MapController;
  private selectionManager: ISelectionManager;

  constructor(options: VisualConstructorOptions) {
    this.host = options.host;
    this.divMap = d3.select(options.element)
                  .append('div')
                  .classed('map', true)
                  .attr({ id: "map_id" });

    debugger;
    this.selectionManager = this.host.createSelectionManager();
    KeyboardHandler.INIT();

    loadBingApi(AppSetting.BING_MAP_KEY).then(() => {
      this.mapController = new MapController(this.divMap.node() as HTMLDivElement, this.selectionManager);
      if(this.viewModel && this.visualSettings){
        this.mapController.drawMap(this.viewModel, this.visualSettings); 
      }
    });
  }

  public update(options: VisualUpdateOptions) {
    let dataView = VisualSettings.parse<VisualSettings>(options.dataViews[0] || {} as powerbi.DataView);      
    this.visualSettings = dataView;

    try {
      this.viewModel = this.getViewModel(options);

      if(this.mapController){
        this.mapController.drawMap(this.viewModel, this.visualSettings); 
      } 
    } catch (exception) {
      console.error("Couldn't parse models", exception)
    }  
  }

  private getViewModel(options: VisualUpdateOptions): MapView[] {
    let dv = options.dataViews;
    let viewModel: MapView[] = [];
    let datalabels = DataLabel.getFields();

    if (!dv || !dv[0] || !dv[0].table || !dv[0].table.columns || !dv[0].table.rows) { 
      return viewModel; 
    }

    let columns = dv[0].table.columns;
    let rows = dv[0].table.rows;
    let columnIndexes: any = columns.map(c => { return { ...c.roles, index: c.index, fieldName: c.displayName }; });
    for (let i = 0, len = rows.length; i < len; i++) {
      let polyline = new MapView();
      ColumnView.toArray().forEach(columnName => {
        var col = columnIndexes.find(x => x[columnName]);
        if (col) {
          //Note: parse filed for data label
          if (datalabels.indexOf(columnName) > -1) {
            polyline[columnName] = new DataLabel(col.fieldName, rows[i][col.index]);
          } else if (columnName === ColumnView.Size) { // NOTE: If Size value isn't empty, write it in DataLabel 
            polyline.DataLabel = new DataLabel(col.fieldName, rows[i][col.index]);
            polyline[columnName] = rows[i][col.index];
          } else {
            polyline[columnName] = rows[i][col.index];
          }
        }
      });

      polyline.SelectionId = this.host.createSelectionIdBuilder().withTable(dv[0].table, i);         
      viewModel.push(polyline);
    }
    return viewModel;
  }

  public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
    const settings: VisualSettings = this.visualSettings || VisualSettings.getDefault() as VisualSettings;
    var visualObjects: VisualObjectInstanceEnumerationObject = <VisualObjectInstanceEnumerationObject>VisualSettings.enumerateObjectInstances(settings, options);
    let propeties = visualObjects.instances[0].properties;
    switch (options.objectName) {
      case 'lineColoring': {
        if (propeties.gradient) {
          delete visualObjects.instances[0].properties.colorMaxValue;
          delete visualObjects.instances[0].properties.colorMinValue;
        }
        break;
      }
      case 'oridinNode': {
        if (!propeties.changedSize) {
          delete visualObjects.instances[0].properties.minValue;
          delete visualObjects.instances[0].properties.maxValue;
        }
        break;
      }
      case 'destinationNode': {
        if (!propeties.changedSize) {
          delete visualObjects.instances[0].properties.minValue;
          delete visualObjects.instances[0].properties.maxValue;
        }
        break;
      }
    }
    return visualObjects;
  }
}