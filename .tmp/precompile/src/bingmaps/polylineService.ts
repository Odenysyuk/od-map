class PolylineService {
  private readonly _lineColorDefault: string;
  private readonly _strokeThicknessDefault: number;
  private readonly colorGeneration: ColoringGeneration;

  constructor(colorGeneration: ColoringGeneration) {
    this.colorGeneration = colorGeneration;
    this._lineColorDefault = "#0700FF";
    this._strokeThicknessDefault = 3
  }

  public draw(data: MapView[], format: LineFormat): PolylineModel[] {
    return data.filter(x => x.Linestring).map(item => this.createPolyline(item, format));
  }

  private createPolyline(dataView: MapView, format: LineFormat): PolylineModel {
    debugger;
    var polyline = Microsoft.Maps.WellKnownText.read(dataView.Linestring,
    {
      polylineOptions: {
        strokeColor: this.colorGeneration.getColor(dataView.LineColor || this._lineColorDefault, format.transparency),
        strokeThickness: this._strokeThicknessDefault
      }
    }) as Microsoft.Maps.Polyline;

    return {
      polyline: polyline,
      data: dataView
    };
  }
}