class RgbColor {
    public Red: number = 0;
    public Green: number = 0;
    public Blue: number = 0;
    public Alpha?: number = 0;

    constructor(r: number, g: number, b: number, a?: number) {
        this.Red = r;
        this.Blue = b;
        this.Green = g;
        this.Alpha = a;
    }

    public toString = (): string => {
        return "rgba(" + this.Red + ", " + this.Green + ", " + this.Blue + "," + (this.Alpha || 0) + ")";
    }

    static hexToRgb(hex: string, alpha: number): RgbColor {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new RgbColor(
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
            alpha
        ) : null;
    }
}