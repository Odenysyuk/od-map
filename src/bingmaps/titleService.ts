"use strict";

import { NodeSizeFormat, TextLabelFormat } from "../formatModel";
import { LocationModel, PolygonModel, PolylineModel } from "../models";

export class TitleService {         
    private readonly _textColorDefault: string;;
    private readonly _fontSizeDefault: number;
    private readonly _fontFamilyDefault: string;
    private readonly nodeSizeDefault: number;

    constructor() {
        this._textColorDefault = '#7F898A';
        this._fontSizeDefault = 10;
        this._fontFamilyDefault = 'Arial';
        this.nodeSizeDefault = 20;
    }

    private offScreenCanvas: any;

    private measureTextWidth(text: string, fontSize: number, fontFamily: string): number {
        if (!this.offScreenCanvas) {
            this.offScreenCanvas = document.createElement('canvas').getContext("2d");
        }
        this.offScreenCanvas.font = fontSize + 'px ' + fontFamily;
        return this.offScreenCanvas.measureText(text).width;
    }

    private createLabelIcon(text: string, textColor: string, fontSize: number, fontFamily: string) {
        let labelPushpinTemplate = '<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}"><text x="{x}" y="{y}" style="font-size:{fontSize}px;fill:{textColor};font-family:{fontFamily}" text-anchor="middle">{text}</text></svg>';
        textColor = textColor || 'black';
        fontSize = fontSize || 16;
        fontFamily = fontFamily || 'arial';
        let width = this.measureTextWidth(text, fontSize, fontFamily);
        return labelPushpinTemplate.replace('{width}', width.toString())
            .replace('{height}', (fontSize * 1.2).toString())
            .replace('{x}', (width / 2).toString())
            .replace('{y}', fontSize.toString())
            .replace('{textColor}', textColor)
            .replace('{fontSize}', fontSize.toString())
            .replace('{fontFamily}', fontFamily);
    }

    public draw(nodes: LocationModel[], format: TextLabelFormat, sizeFormat: NodeSizeFormat): Microsoft.Maps.Pushpin[] {
        return nodes.filter(node => node.data.Category)
        .map(node => {
            const nodeSize = this.getNodeSize(node.data.Size, sizeFormat);     
            return this.createLabelPushpin(node.location as Microsoft.Maps.Location,
                node.data.Category.toString(),
                nodeSize,
                format)
        });
    }

    public drawPolygonLabel(polygons: PolygonModel[], format: TextLabelFormat): Microsoft.Maps.Pushpin[] {
        return polygons.filter(node => node.data.PolygonCategory)
                    .map(polygon => {
            return this.createLabelPushpin(Microsoft.Maps.SpatialMath.Geometry.centroid(polygon.polygon),
                polygon.data.PolygonCategory.toString(),
                polygon.data.Size || 20,
                format)
        });
    }

    public drawDataLabel(polylines: PolylineModel[], format: TextLabelFormat): Microsoft.Maps.Pushpin[] {
        return polylines.filter(x => x.data.DataLabel).map(item => {
            return this.createLabelPushpin(Microsoft.Maps.SpatialMath.Geometry.centroid(item.polyline),
                item.data.DataLabel.toString(),
                20,
                format)
        });


    }

    private createLabelPushpin(location: Microsoft.Maps.Location, text: string, size: number, format: TextLabelFormat): Microsoft.Maps.Pushpin {
        let textColor = format.fontColor || this._textColorDefault;
        let fontSize = format.fontSize || this._fontSizeDefault;
        let fontFamily = format.fontType || this._fontFamilyDefault;
        var width = this.measureTextWidth(text, fontSize, fontFamily);

        var pin = new Microsoft.Maps.Pushpin(location, {
            icon: this.createLabelIcon(text, textColor, fontSize, fontFamily),
            text: text,
            anchor: new Microsoft.Maps.Point(this.getAligmantOfTitle(format.textAlignment, width), size / 2 + fontSize * 1)
        
        });
        
        //Store font info in metadata so we can update icons if needed.
        pin.metadata = {
            textColor: textColor,
            fontSize: fontSize,
            fontFamily: fontFamily
        };
        return pin;
    }

    private getAligmantOfTitle(textAlignment: string, width: number): number {
        switch (textAlignment) {
            case 'left': return width;
            case 'center': return width / 2;
            default: return 0;
        }
    }

    private getNodeSize(nodeSize: number, sizeFormat: NodeSizeFormat): number {
        if (!sizeFormat.show) {
            return 0;
        }

        let svgSize = nodeSize || this.nodeSizeDefault;
        if (!sizeFormat.changedSize) {
            return svgSize;
        }

        let minValue = Math.max(svgSize, sizeFormat.minValue);
        return Math.min(minValue, sizeFormat.maxValue);
    }
}