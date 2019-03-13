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

    export class PolylineSettings{        
        public shirtDirection: boolean = false;
        public shirtDegree: number = 0;
        public minColor: string = "00FF46";
        public centerColor: string = "FFCA00";
        public maxColor: string = "FF1912";
        public colorMinValue: number = 0;
        public colorMaxValue: number = 100;
        public transparency: number = 0;
    }

    export class CategorySettings{
        public show: boolean = false;
        public fontType: string = "helvetica, arial, sans-serif";
        public fontSize: number = 15;
        public fontColor: string = "FF1912";
        public textAlignment: string = "center";
    }

    export class MapLayerSettings{
        public type: string = "Light";

    }
    export class PolygonSettings{
        public show: boolean = false;
        public transparency: number = 0;
        public showline: boolean = false;
        public colorMax: string = "red";
    }

    export class NodeSettings{
        public show: boolean = false;
        public minColor: string = "00FF46";
        public centerColor: string = "FFCA00";
        public maxColor: string = "FF1912";
        public transparency: number = 0;
        public showNodeLine: boolean = false;
    }

    export class NodeSizeSettings{
        public show: boolean = false;
        public minValue: number = 0;
        public maxValue: number = 20;
    }

    export class VisualSettings extends DataViewObjectsParser {
       public category: CategorySettings = new CategorySettings();
       public mapLayers: MapLayerSettings = new MapLayerSettings();s
    //    public polygon: PolygonSettings = new PolygonSettings();
       public polyline: PolylineSettings = new PolylineSettings();
       public node: NodeSettings = new NodeSettings();
       public oridinNode: NodeSizeSettings = new NodeSizeSettings();
       public destinationNode: NodeSizeSettings = new NodeSizeSettings();
    }
}