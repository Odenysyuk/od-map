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

 type Map = Microsoft.Maps.Map;
 type Action<T> = (i: T) => void;
 type Func<I, O> = (i: I) => O;
 declare var loadMap;
 let mapctl: Controller;

function init(div: HTMLDivElement, setting: PolylineView[], format: VisualFormat, done: Func<Microsoft.Maps.Map, void>) {
  debugger;
  if (!mapctl) {
    mapctl = new Controller(div, setting, format);
  }
  else {
    mapctl.resetMap();
    mapctl.drawMap(setting, format);
  }
  // done(mapctl.map);
}

module powerbi.extensibility.visual.oDmapD5AA58DF977C4921BDDC0050BFF97A2B  {
  "use strict";
  
  let PolylineColumns = [
    "Category",
    "LineSize",
    "LineColor",
    "Linestring"
  ]

  export class Visual implements IVisual {
    private host: IVisualHost;
    private _div: HTMLDivElement;
    private _loading = false;
    private _options = null as powerbi.extensibility.visual.VisualUpdateOptions;
    private target: HTMLElement;
    private divMap: d3.Selection<HTMLElement>;
    private viewModel: PolylineView[];
    private visualSettings: VisualSettings;

    constructor(options: VisualConstructorOptions) {
      this.host = options.host;
      this.divMap = d3.select(options.element)
        .append('div')
        .classed('map', true)
        .attr({ id: "map_id" });
    }

    public update(options: VisualUpdateOptions) { 
      let dataView = options.dataViews[0] || {} as powerbi.DataView;
      this.visualSettings = VisualSettings.parse<VisualSettings>(dataView);
      this.viewModel = this.getViewModel(options);


       init(this.divMap.node() as HTMLDivElement, this.viewModel, this.visualSettings,
       map => {
        console.log("Init in ctr");
      });
     }

    // private InitMap(dataView: DataView): void {  
    //     console.log('InitMap');  
    //     //Microsoft.Maps.Events.addHandler(window, 'load', this.InitMap);  

    //     this._map = new Microsoft.Maps.Map(document.getElementById('map_id'),{ 
    //          credentials: settings.BingKey,
    //          center: new Microsoft.Maps.Location(33.75, -84.39),
    //          showDashboard: false,
    //          showTermsLink: false,
    //          zoom:20
    //   });
    // }

    // public loadMap(){
    //     console.log("Microsoft.Maps.Map");
    //     try{       
    //         if(typeof Microsoft !== 'undefined' && typeof Microsoft.Maps !== 'undefined' && typeof Microsoft.Maps.Map !== 'undefined'){
    //             this.map = new Microsoft.Maps.Map(document.getElementById('powerMap'), {
    //                 credentials: 'AidYBxBA7LCx2Uo3v-4QJE2zRVgvqg4KquhupR_dRRIGbmKd1A1CpWnjEJulgAUe'
    //             });
    //         }                     
    //     }
    //     catch(e){
    //         console.error(e);
    //     }
    //     return this.map;
    // }

    //  private static parseSettings(dataView: DataView): VisualSettings {
    //      return VisualSettings.parse(dataView) as VisualSettings;
    //  }  

    private getViewModel(options: VisualUpdateOptions): PolylineView[] {
      let dv = options.dataViews;
      let viewModel: PolylineView[] = [];

      if (!dv
        || !dv[0]
        || !dv[0].table
        || !dv[0].table.columns
        || !dv[0].table.rows)
        return viewModel;

      let columns = dv[0].table.columns;
      let rows = dv[0].table.rows;

      let columnIndexes: any = columns.map(c => { return { ...c.roles, index: c.index }; });

      for (let i = 0, len = rows.length; i < len; i++) {
        let polyline = new PolylineView();
        PolylineColumns.forEach(columnName => {
          var col = columnIndexes.find(x => x[columnName]);
          if (col) {
            polyline[columnName] = rows[i][col.index];
          }
        });
        viewModel.push(polyline);
      }
      return viewModel;
    }


    
    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
        const settings: VisualSettings = this.visualSettings || 
                                         VisualSettings.getDefault() as VisualSettings;
        var visualObjects: VisualObjectInstanceEnumerationObject = <VisualObjectInstanceEnumerationObject> VisualSettings.enumerateObjectInstances(settings, options);
        switch(options.objectName){
          case 'polyline':
          visualObjects.instances[0].validValues = {
            colorMinValue: { numberRange: { min: 0, max: 100 } },
            colorMaxValue: { numberRange: { min: 0, max: 100 } }
          };    
          break;
        }
        return visualObjects;
     }
  }
}

//   var settings = {
//     // Maximum Bing requests at once. The Bing have limit how many request at once you can do per socket.
//     MaxBingRequest: 6,
//     // Maximum cache size of cached geocode data.
//     MaxCacheSize: 3000,
//     // Maximum cache overflow of cached geocode data to kick the cache reducing.
//     MaxCacheSizeOverflow: 1000,
//     // Bing Keys and URL
//     BingKey: "AidYBxBA7LCx2Uo3v-4QJE2zRVgvqg4KquhupR_dRRIGbmKd1A1CpWnjEJulgAUe",
//     BingURL: "https://dev.virtualearth.net/REST/v1/Locations?",
//     BingUrlGeodata: "https://platform.bing.com/geo/spatial/v1/public/Geodata?",
//   };
// }



class Controller {
  private _div: HTMLDivElement;
  private _map: Map;
  private _then: Action<Map>;

  public get map() {
    return this._map;
  }

  constructor(div: HTMLDivElement, optins: PolylineView[], format: VisualFormat) {
    this._div = div;

    loadMap = () => {
      this._remap();
      this._then && this._then(this._map);
      this._then = null;
      this.drawMap(optins, format)
    }
  }

  private _remap(): Map {
    var setting = GetMapParameter(this._map, this._div);
    this._map = new Microsoft.Maps.Map(this._div, setting);
    Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath');
    Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText');
    return this._map;
  }

  public resetMap(){
    this._map.layers.clear();
  }

  public drawMap(setting: PolylineView[],format: VisualFormat){
    if (Microsoft.Maps.WellKnownText) {
      this.DrawLineString(setting);
    }
    else {
      Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText', () => {
        this.DrawLineString(setting);
      });
    }
  }

  private drawPolyline(setting: PolylineView[],format: VisualFormat) {
    let map = this._map.entities;
    // let polylines = setting.map(function (item: PolyView) {
    //   return new Microsoft.Maps.Polyline([
    //     new Microsoft.Maps.Location(item.OLatitude, item.OLongitude),
    //     new Microsoft.Maps.Location(item.DLatitude, item.DLongitude)],
    //     {
    //       strokeColor: item.Color,
    //       strokeThickness: 4
    //     });
    // });
    // this._map.entities.push(polylines);
    // let locations = [].concat.apply([], polylines.map(x => x.getLocations()));


    if (Microsoft.Maps.SpatialMath) {
      this.DrawCircle(setting);
    }
    else {
      Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath', () => {
        this.DrawCircle(setting);
      });
    }

    if (Microsoft.Maps.WellKnownText) {
      this.DrawLineString(setting);
    }
    else {
      Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText', () => {
        this.DrawLineString(setting);
      });
    }



    // var bestView = Microsoft.Maps.LocationRect.fromLocations(locations);
    // this._map.setView({ bounds: bestView, padding: 5 });



    //   Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText', function () {
    //     Parse well known text string.
    //     var pin = Microsoft.Maps.WellKnownText.read('POINT(-122.34009 47.60995)');

    //     Add parsed shape to the map.
    //     map.entities.push(pin);
    // });
  }

  private DrawCircle(setting: PolylineView[]) {
    // debugger;
    // let cicles = setting.map(function (item: PolyView) {
    //   let cicle: Circle =
    //   {
    //     Color: item.Color,
    //     Size: item.Size,
    //     Locations: [new Microsoft.Maps.Location(item.OLatitude, item.OLongitude), new Microsoft.Maps.Location(item.DLatitude, item.DLongitude)]
    //   };
    //   return cicle;
    // });

    // var pins = [], radius, color;
    // cicles.forEach(x => {
    //   pins.push(this.CreateCirclePushpin(x.Locations[0], x.Size*150, x.Color,'grey', 1));
    //   pins.push(this.CreateCirclePushpin(x.Locations[1], x.Size*150, x.Color,'grey', 1));
    //   //this._map.entities.push(this.CreateCircle(x.Locations[0], x.Size, 'rgb(7,0,255)'));
    //   //this._map.entities.push(this.CreateCircle(x.Locations[1], x.Size, x.Color));
    // });
    // this._map.entities.push(pins);
  }

  private CreateCircle(center, radius, color): Microsoft.Maps.Polygon {
    //Calculate the locations for a regular polygon that has 36 locations which will rssult in an approximate circle.
    var locs = Microsoft.Maps.SpatialMath.getRegularPolygon(center, radius, 50, Microsoft.Maps.SpatialMath.DistanceUnits.Kilometers);
    return new Microsoft.Maps.Polygon(locs, { fillColor: color, strokeThickness: 0 });
  }

  private DrawLineString(setting: PolylineView[]) {
    let polylines = setting.forEach(x => {
      var pin = Microsoft.Maps.WellKnownText.read(x.Linestring,{
        polylineOptions:{
          strokeColor: x.LineColor,
          strokeThickness:4
        }
      });
  
      this._map.entities.push(pin);  
    });
  }

  private CreateCirclePushpin(location, radius, fillColor, strokeColor, strokeWidth) {
    strokeWidth = strokeWidth || 0;
    //Create an SVG string of a circle with the specified radius and color.
    var svg = ['<svg xmlns="http://www.w3.org/2000/svg" width="', (radius * 2),
        '" height="', (radius * 2), '"><circle cx="', radius, '" cy="', radius, '" r="',
        (radius - strokeWidth), '" stroke="', strokeColor, '" stroke-width="', strokeWidth, '" fill="', fillColor, '"/></svg>'];
    //Create a pushpin from the SVG and anchor it to the center of the circle.
    return new Microsoft.Maps.Pushpin(location, {
        icon: svg.join(''),
        anchor: new Microsoft.Maps.Point(radius, radius)
    });
}

  
}


function GetMapParameter(map: Map, div: HTMLDivElement): Microsoft.Maps.IMapLoadOptions {
  var para = {
    credentials: 'AidYBxBA7LCx2Uo3v-4QJE2zRVgvqg4KquhupR_dRRIGbmKd1A1CpWnjEJulgAUe',
    showDashboard: false,
    showTermsLink: false,
    // showScalebar: fmt.scale,
    showLogo: false,
     customMapStyle: customStyle(null),
    //      disablePanning: !fmt.pan,
    //     disableZooming: !fmt.zoom,
    //    mapTypeId: mapType(fmt),
    liteMode: false
  } as Microsoft.Maps.IMapLoadOptions;

  if (map) {
    para.center = map.getCenter();
    para.zoom = map.getZoom()
  }
  else {
    para.center = new Microsoft.Maps.Location(0, 0);
    para.zoom = defaultZoom(div.offsetWidth, div.offsetHeight);
  }
  return para;
}

function customStyle(v2: any): Microsoft.Maps.ICustomMapStyle {

  let v:any = {label: "Label", building: true}
  var nothing = { labelVisible: false, visible: false };
  var visible = { visible: true, labelVisible: v.label };
  var result = {
    version: "1.0",
    elements: {
      highSpeedRamp: nothing,
      ramp: nothing,
      unpavedStreet: nothing,
      tollRoad: nothing,
      trail: nothing
    }
  } as Microsoft.Maps.ICustomMapStyle;
  if (!v.building) {
    result.elements.structure = { visible: false };
    result.elements.building = { visible: false };
  }
  result.elements.mapElement = { labelVisible: v.label };
  result.elements.political = { labelVisible: v.label, visible: true };
  result.elements.district = { labelVisible: v.label, visible: true };
  if (v.road === 'gray' || v.road === 'gray_label') {
    result.elements.transportation = {
      visible: true,
      labelVisible: v.road === 'gray_label',
      fillColor: '#DDDDDD',
      strokeColor: '#AAAAAA',
      labelOutlineColor: '#EEEEEE'
    } as Microsoft.Maps.IMapElementStyle;
    result.elements.street = {
      visible: true,
      labelVisible: v.road === 'gray_label',
      fillColor: "#EEEEEE",
      strokeColor: "#DDDDDD",
      labelOutlineColor: '#DDDDDD'
    } as Microsoft.Maps.IMapElementStyle;
  }
  else if (v.road === 'hidden') {
    result.elements.transportation = nothing;
  }
  result.elements.point = v.icon ? visible : nothing;
  result.elements.vegetation = v.forest ? visible : nothing;
  result.elements.populatedPlace = { labelVisible: v.city, visible: v.icon };
  result.elements.area = v.area ? visible : nothing;
  return result;
}

function defaultZoom(width: number, height: number): number {
  var min = Math.min(width, height);
  for (var level = 1; level < 20; level++) {
    if (256 * Math.pow(2, level) > min) {
      break;
    }
  }
  return level;
}


interface IPoint {
  Latitude: number;
  Longitude: number;
}

class Circle {
  public Size: number;
  public Color: string;
  public Locations: Microsoft.Maps.Location[]
}
