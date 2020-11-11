import { Visual } from './../visual';
'use strict';

import { AppSetting } from './../appSetting';
import { ColumnView } from "../columnView";
import { MapLayerFormat, ZoomFormat, VisualFormat } from "../formatModel";
import { LocationModel, MapView, PolylineModel } from "../models";
import { ColorGeneration } from "./colorGeneration";
import { NodeService } from "./nodeService";
import { PolygonService } from "./polygonService";
import { PolylineService } from "./polylineService";
import { TitleService } from "./titleService";
import { TooltipService } from "./tooltipService";
import powerbi from "powerbi-visuals-api";
import ISelectionManager = powerbi.extensibility.ISelectionManager;

export class MapController {
    private _div: HTMLDivElement;
    private _map: Microsoft.Maps.Map;
    private _polylineService: PolylineService;
    private _nodeService: NodeService;
    private _titleService: TitleService;
    private _polygonService: PolygonService;
    private _tooltipService: TooltipService;
    private _polylines: Microsoft.Maps.Polyline[];
    private _polygons: Microsoft.Maps.Polygon[];
    private layerFront: Microsoft.Maps.Layer;
    private layerBehind: Microsoft.Maps.Layer;

    constructor(div: HTMLDivElement, selectionManager: ISelectionManager) {
        this._div = div;
        this._titleService = new TitleService();
        this.layerFront = new Microsoft.Maps.Layer();
        this.layerBehind = new Microsoft.Maps.Layer();
        this.loadMap();
        this._tooltipService = new TooltipService(this._map);         
        this._polylineService = new PolylineService(selectionManager);
        this._nodeService = new NodeService(selectionManager);
        this._polygonService = new PolygonService(selectionManager);
    }

    public drawMap(data: MapView[], format: VisualFormat) { 
        if (Microsoft.Maps.WellKnownText) {
            try {
                this.reDrawMap(data, format);
            } catch (e) {
                console.error(e);
            }
        }
        else {
            Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText', () => {
                try {
                    this.reDrawMap(data, format);
                } catch (e) {
                    console.error(e);
                }
            });
        }
    }

    private loadMap(): Microsoft.Maps.Map {
        var setting = this.getMapParameter(this._map, this._div);
        this._map = new Microsoft.Maps.Map(this._div, setting);
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath');
        Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText');
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath');
        return this._map;
    }

    private getMapParameter(map: Microsoft.Maps.Map, div: HTMLDivElement): Microsoft.Maps.IMapLoadOptions {
        var para = {
            credentials: AppSetting.BING_MAP_KEY,
            showDashboard: false,
            showTermsLink: false,
            showLogo: false,
            liteMode: false
        } as  Microsoft.Maps.IMapLoadOptions;

        if (map) {
            para.center = map.getCenter();
            para.zoom = map.getZoom()
        }
        else {
            para.center = new Microsoft.Maps.Location(0, 0);
            para.zoom = this.defaultZoom(div.offsetWidth, div.offsetHeight);
        }
        return para;
    }

    private mapType(v: MapLayerFormat) {
        switch (v.type) {
            case 'aerial': return Microsoft.Maps.MapTypeId.aerial;
            case 'road': return Microsoft.Maps.MapTypeId.road;
            case 'canvasDark': return Microsoft.Maps.MapTypeId.canvasDark;
            case 'canvasLight': return Microsoft.Maps.MapTypeId.canvasLight;
            case 'grayscale': return Microsoft.Maps.MapTypeId.grayscale;
            default: return Microsoft.Maps.MapTypeId.road;
        }
    }

    private defaultZoom(width: number, height: number): number {
        var min = Math.min(width, height);
        for (var level = 1; level < 20; level++) {
            if (256 * Math.pow(2, level) > min) {
                break;
            }
        }
        return level;
    }

    async restyleMap(fm: MapLayerFormat) {
        let mapTypeId = this.mapType(fm);
        if (this._map.getMapTypeId() !== mapTypeId) {
            this._map.setMapType(mapTypeId);
        }
    }

    async reDrawMap(data: MapView[], format: VisualFormat): Promise<void> {
        this.resetMap();

        const dataFrontLine = data.filter(d => d.IsLineOverlapsPolygon); // Front line, behind polygon
        const dataBehindLine = data.filter(d => !d.IsLineOverlapsPolygon);// Behind line, front polygon

        await Promise.all([
            this.restyleMap(format.mapLayers),
            this.drawPolygonData(this.layerFront, format, dataFrontLine),
            this.drawPolygonData(this.layerBehind, format, dataBehindLine)
        ]);

        await Promise.all([
            this.drawPolylineData(this.layerFront, format, dataBehindLine),
            this.drawPolylineData(this.layerBehind, format, dataFrontLine),
        ]);

        this._map.layers.insert(this.layerBehind);
        this._map.layers.insert(this.layerFront);

        await this.setBestView(format.mapZoom);
    }

    async drawPolygonData(layer: Microsoft.Maps.Layer, format: VisualFormat, data: MapView[]) {
        if (format.polygon.show) {
            const polygonModels = this._polygonService.draw(data, format.polygon, format.polygonColoring);
            const polygons = polygonModels.map(x => x.polygon);
            layer.add(polygons);

            if (format.polygonLabel.show && polygons.length) {
                const labels = this._titleService.drawPolygonLabel(polygonModels, format.polygonLabel);
                layer.add(labels);
            }

            this._polygons = this._polygons.concat(polygons);
        } else {
            this._polygons = [];
        }
    }

    async drawPolylineData(layer: Microsoft.Maps.Layer, format: VisualFormat, data: MapView[]) {
        let polylineModels = this._polylineService.draw(data, format.lineColoring);
        if (polylineModels) {
            await Promise.all([this.drawDataLabel(layer, format, polylineModels),
            this.drawPolyline(layer, polylineModels),
            this.drawOriginandCategoryNode(layer, polylineModels, format),
            this.drawDestinationNode(layer, format, polylineModels)]);
        }

        polylineModels.filter(model => model.data.Tooltip).forEach(model => {
            this._tooltipService.add(model.polyline, model.data.Tooltip.toString());
        });
    }

    async drawPolyline(layer: Microsoft.Maps.Layer, polylineModels: PolylineModel[]) {
        const polylines = polylineModels.map(x => x.polyline);
        layer.add(polylines);
        this._polylines = this._polylines.concat(polylines);
    }

    private drawDataLabel(layer: Microsoft.Maps.Layer, format: VisualFormat, polylineModels: PolylineModel[]) {
        if (format.dataLabel.show) {
            let dataLabels = this._titleService.drawDataLabel(polylineModels, format.dataLabel);
            layer.add(dataLabels);
        }
    }

    private drawDestinationNode(layer: Microsoft.Maps.Layer, format: VisualFormat, polylineModels: PolylineModel[]) {
        if (format.destinationNode.show) {
            let destNode = this.getDestinationNote(polylineModels);
            let destMapNodes = this._nodeService.drawArroweNode(destNode, format.node, format.destinationNode, format.lineColoring);
            layer.add(destMapNodes);
        }
    }

    async drawOriginandCategoryNode(layer: Microsoft.Maps.Layer, polylineModels: PolylineModel[], format: VisualFormat) {
        const originNotes = this.getOriginNotes(polylineModels);

        if (format.category.show && originNotes) {
            let titles = this._titleService.draw(originNotes, format.category, format.oridinNode);
            layer.add(titles);
        }

        if (format.oridinNode.show) {
            let originMapNodes = this._nodeService.drawCircleNode(originNotes, format.node, format.oridinNode, format.lineColoring);
            layer.add(originMapNodes);
        }
    }

    async setBestView(mapZoom: ZoomFormat) {
        let primitive: Microsoft.Maps.IPrimitive[] = [];
        primitive = primitive.concat(this._polylines);
        primitive = primitive.concat(this._polygons);
        var vbounds = Microsoft.Maps.LocationRect.fromShapes(primitive);

        if(mapZoom && mapZoom.show) {
            this._map.setView({ center: vbounds.center, zoom: mapZoom.value, padding: 5 });
        }
        else {
            this._map.setView({ bounds: vbounds, padding: 5 });
        }
    }

    private getOriginNotes(polylines: PolylineModel[]): LocationModel[] {
        return polylines.map(line => {
            let locations = line.polyline.getLocations();
            return { location: locations[0], data: line.data };
        });
    }

    private getDestinationNote(polylines: PolylineModel[]): LocationModel[] {
        return polylines.map(line => {
            let locations = line.polyline.getLocations();
            let size = locations.length;

            if (size == 1) {
                return {
                    data: line.data,
                    location: [locations[0], locations[0]]
                }
            }
            else if (size == 0) {
                return {
                    data: line.data,
                    location: []
                }
            }

            return {
                data: line.data,
                location: [locations[size - 2], locations[size - 1]]
            }
        });
    }

    async resetMap() {
        this._polylines = [];
        this._polygons = [];
        await Promise.all([
            this._map.entities.clear(),
            this.layerBehind.clear(),
            this.layerFront.clear(),
        ]);
    }
} 