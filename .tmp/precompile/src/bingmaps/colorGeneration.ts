class ColoringGeneration {

    protected coloringFormat: ColoringFormat;
    protected colorValues: number[] = [];    
    private minColorValues: number = 0; 
    private maxColorValues: number = 0;    

    constructor(colorGenerator: ColoringFormat) {
        this.coloringFormat = colorGenerator;
    }

    public setColoringFormat(format: ColoringFormat) {
        this.coloringFormat = format;
    }
 
    public setColorColumn(modelView: MapView[], propertyName: string) {
       this.colorValues = modelView.map(x => Number(x[propertyName])).filter(x => !isNaN(x)); 
       this.minColorValues = Math.min(...this.colorValues);
       this.maxColorValues = Math.max(...this.colorValues);    
    }

    public getColor(colorValue: string, transparency: number = 100): string {
        let colorNumber = Number(colorValue);
        if (isNaN(colorNumber)) {
            let colorHex = RgbColor.hexToRgb(colorValue, transparency / 100);
            return colorHex.toString();
        }

        if (this.coloringFormat.gradient) {
            return this.getGradientColor(colorNumber, transparency / 100);
        }

        return this.getNearestColor(colorNumber, transparency / 100);
    }

    private getGradientColor(colorNumber: number, transparency: number) : string {
        var colorMin = RgbColor.hexToRgb(this.coloringFormat.minColor, transparency);

        if(this.minColorValues >= this.maxColorValues){
            return colorMin.toString();
        }

        let center = (this.minColorValues + this.maxColorValues) / 2;
        var colorMin = RgbColor.hexToRgb(this.coloringFormat.minColor, 1);
        var colorMiddle = RgbColor.hexToRgb(this.coloringFormat.centerColor, 1);
        var colorMax = RgbColor.hexToRgb(this.coloringFormat.maxColor, 1);

        if (colorNumber <= center) {
            let colorW = this.pickHex(colorMin, colorMiddle, 1 - colorNumber / center, transparency);
            return colorW.toString();
        } else {
            let colorW = this.pickHex(colorMiddle, colorMax, 2 - colorNumber / center, transparency);
            return colorW.toString();
        }
    }

    private getNearestColor(colorNumber: number, transparency: number):string {
        
        if (colorNumber < this.coloringFormat.colorMinValue) {
            return RgbColor.hexToRgb(this.coloringFormat.minColor, transparency).toString();;
        }
        else if (colorNumber < this.coloringFormat.colorMaxValue) {
            return RgbColor.hexToRgb(this.coloringFormat.centerColor, transparency).toString();;
        }

        return RgbColor.hexToRgb(this.coloringFormat.maxColor, transparency).toString();;
    }

    private pickHex(color1: RgbColor, color2: RgbColor, weight: number, opacity: number): RgbColor {
        var p = weight;
        var w = p * 2 - 1;
        var w1 = (w / 1 + 1) / 2;
        var w2 = 1 - w1;
        return new RgbColor(
            Math.round(color1.Red * w1 + color2.Red * w2),
            Math.round(color1.Green * w1 + color2.Green * w2),
            Math.round(color1.Blue * w1 + color2.Blue * w2),
            opacity
        );
    }
}