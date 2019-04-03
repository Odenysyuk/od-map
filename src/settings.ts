/*
 *  Power BI Visualizations
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

module powerbi.extensibility.visual {
    "use strict";
    import DataViewObjectsParser = powerbi.extensibility.utils.dataview.DataViewObjectsParser;

    export class LineColoringSettings{        
       // public shirtDirection: boolean = false;
        //public shirtDegree: number = 0;
        public minColor: string = "#00FF46";
        public centerColor: string = "#FFCA00";
        public maxColor: string = "#FF1912";
        public gradient: boolean = false;
        public colorMinValue: number = 0;
        public colorMaxValue: number = 80;
        public transparency: number = 100;
    }

    export class TextSettings{
        public show: boolean = false;
        public fontType: string = "helvetica, arial, sans-serif";
        public fontSize: number = 10;
        public fontColor: string = "#7F898A";
        public textAlignment: string = "center";
    }
    
    export class PolygonLabelSettings{
        public show: boolean = false;
        public fontType: string = "helvetica, arial, sans-serif";
        public fontSize: number = 10;
        public fontColor: string = "#293537";
        public textAlignment: string = "center";
    }

    export class DataLabelSettings{
        public show: boolean = false;
        public fontType: string = "helvetica, arial, sans-serif";
        public fontSize: number = 10;
        public fontColor: string = "#293537";
        public textAlignment: string = "center";
    }

    export class MapLayerSettings{
        public type: string = "road";
    }

    export class NodeSettings{
        public transparency: number = 0;
        public showNodeLine: boolean = true;
    }

    export class NodeSizeSettings{
        public show: boolean = true;
        public changedSize: boolean = false;
        public minValue: number = 0;
        public maxValue: number = 20;
    }

    export class PolygonSettings{
        public show: boolean = false;
        public transparency: number = 50;
        public showline: boolean = true;
        public color: string = "0052FF";
    }

    export class VisualSettings extends DataViewObjectsParser {
       public category: TextSettings = new TextSettings();
       public mapLayers: MapLayerSettings = new MapLayerSettings();
       public lineColoring: LineColoringSettings = new LineColoringSettings();
       public node: NodeSettings = new NodeSettings();
       public oridinNode: NodeSizeSettings = new NodeSizeSettings();
       public destinationNode: NodeSizeSettings = new NodeSizeSettings();
       public polygon: PolygonSettings = new PolygonSettings();
       public polygonLabel: PolygonLabelSettings = new PolygonLabelSettings();
       public dataLabel: DataLabelSettings = new DataLabelSettings();       
    }
}
