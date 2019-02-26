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

module powerbi.extensibility.visual.oDmapD5AA58DF977C4921BDDC0050BFF97A2B  {
    "use strict";
    export class Visual implements IVisual {
        private target: HTMLElement;
        private map: Microsoft.Maps.Map;
        // private updateCount: number;
        //private settings: VisualSettings;
        // private textNode: Text;

        constructor(options: VisualConstructorOptions) {
            console.log('Visual constructor', options);
            this.target = options.element;
         
            debugger;
             if (typeof document !== "undefined") {
                const mapElement: HTMLElement = document.createElement("div");
                mapElement.setAttribute("id","powerMap")   
                this.loadMap();
            }
        }

        public update(options: VisualUpdateOptions) {
            // this.settings = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);
            console.log('Visual update', options);
            // if (typeof this.textNode !== "undefined") {
            //     this.textNode.textContent = (this.updateCount++).toString();
            // }
        }

        private loadMap(){
            this.map = new Microsoft.Maps.Map(document.getElementById('powerMap'), {
                credentials: 'AidYBxBA7LCx2Uo3v-4QJE2zRVgvqg4KquhupR_dRRIGbmKd1A1CpWnjEJulgAUe'
            });

        }

        // private static parseSettings(dataView: DataView): VisualSettings {
        //     // return VisualSettings.parse(dataView) as VisualSettings;
        // }

        // /** 
        //  * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the 
        //  * objects and properties you want to expose to the users in the property pane.
        //  * 
        //  */
        // public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        //     // return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
        // }
    }
}