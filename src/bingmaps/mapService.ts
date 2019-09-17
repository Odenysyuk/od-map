type Action<T> = (i: T) => void;
type Func<I, O> = (i: I) => O;
declare var loadMap;

class MapController {
    private _div: HTMLDivElement;
    private _map: Microsoft.Maps.Map;
    private _then: Action<Microsoft.Maps.Map>;
    private _format: VisualFormat;
    private _data: MapView[];
    private _polylineColorGeneration: ColoringGeneration;
    private _polygonColorGeneration: ColoringGeneration;
    private _polylineService: PolylineService;
    private _nodeService: NodeService;
    private _titleService: TitleSevice;
    private _polygonService: PolygonService;
    private _tooltipService: TooltipService;
    private _polylines: Microsoft.Maps.Polyline[];
    private _polygons: Microsoft.Maps.Polygon[];
    private layerFront: Microsoft.Maps.Layer;
    private layerBehind: Microsoft.Maps.Layer;

    constructor(div: HTMLDivElement, data: MapView[], format: VisualFormat) {
        this._div = div;
        this._format = format;
        this._data = data;
        this._polylineColorGeneration = new ColoringGeneration(format.lineColoring);
        this._polygonColorGeneration = new ColoringGeneration(format.polygonColoring);
        this._polylineService = new PolylineService(this._polylineColorGeneration);
        this._nodeService = new NodeService(this._polylineColorGeneration);
        this._titleService = new TitleSevice();
        this._polygonService = new PolygonService(this._polygonColorGeneration);
        this.layerFront = new Microsoft.Maps.Layer();
        this.layerBehind = new Microsoft.Maps.Layer();

        loadMap = () => {
            this._remap();
            this._then && this._then(this._map);
            this._then = null;
            this._tooltipService = new TooltipService(this._map);
            this.drawMap(data, format)
        }
    }

    public drawMap(data: MapView[], format: VisualFormat) {
        if (Microsoft.Maps.WellKnownText) {
            return this.reDrawMap(data, format);
        }
        else {
            Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText', () => {
                return this.reDrawMap(data, format);
            });
        }
    }

    private _remap(): Microsoft.Maps.Map {
        var setting = this.getMapParameter(this._map, this._div, this._format);
        this._map = new Microsoft.Maps.Map(this._div, setting);
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath');
        Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText');
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath');
        return this._map;
    }

    private getMapParameter(map: Microsoft.Maps.Map, div: HTMLDivElement, fm: VisualFormat): Microsoft.Maps.IMapLoadOptions {
        var para = {
            credentials: 'AidYBxBA7LCx2Uo3v-4QJE2zRVgvqg4KquhupR_dRRIGbmKd1A1CpWnjEJulgAUe',
            showDashboard: false,
            showTermsLink: false,
            showLogo: false,
            customMapStyle: this.customStyle(),
            mapTypeId: this.mapType(fm.mapLayers),
            liteMode: false
        } as Microsoft.Maps.IMapLoadOptions;

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
        }
    }

    private customStyle(): Microsoft.Maps.ICustomMapStyle {

        let v: any = { label: "Label", building: false }
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

    async reDrawMap(data: MapView[], format: VisualFormat) {
        this.resetMap();
        this.setDefaultData(data, format);
        
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

        await this.setBestView();
    }

    private setDefaultData(data: MapView[], format: VisualFormat) {
        this._polylineColorGeneration.setColorColumn(data, ColumnView.LineColor);
        this._polylineColorGeneration.setColoringFormat(format.lineColoring);
        this._polygonColorGeneration.setColorColumn(data, ColumnView.PolygonColor);
        this._polygonColorGeneration.setColoringFormat(format.polygonColoring);
        this._format = format;
        this._data = data;
    }

    async drawPolygonData(layer: Microsoft.Maps.Layer, format: VisualFormat, data: MapView[]) {
        if (format.polygon.show) {            
            const polygonModels = this._polygonService.draw(data, format.polygon);           
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
        let polylineModels = this._polylineService.draw(data, this._format.lineColoring);  
        if (polylineModels) {  
            await Promise.all([ this.drawDataLabel(layer, format, polylineModels),
                                this.drawPolyline(layer,polylineModels),
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
            let destMapNodes = this._nodeService.drawArroweNode(destNode, format.node, format.destinationNode);
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
            let originMapNodes = this._nodeService.drawCircleNode(originNotes, format.node, format.oridinNode);
            layer.add(originMapNodes);
        }     
    }

    async setBestView() {
        debugger;
        let primitive: Microsoft.Maps.IPrimitive[] = [];
        primitive = primitive.concat(this._polylines);
        primitive = primitive.concat(this._polygons);
        var vbounds = Microsoft.Maps.LocationRect.fromShapes(primitive);
        this._map.setView({ bounds: vbounds, padding: 5 });
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
        Promise.all([
            this._map.entities.clear(),
            this.layerBehind.clear(),
            this.layerFront.clear(),
        ]);         
    }
} 