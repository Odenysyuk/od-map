class ColumnView{
    static Category: string = "Category"
    static Size: string = "Size"
    static LineColor: string = "LineColor"
    static Linestring: string = "Linestring"
    static IsLineOverlapsPolygon: string = "IsLineOverlapsPolygon"
    static PolygonCategory: string = "PolygonCategory"
    static Polygon: string = "Polygon"
    static PolygonColor: string = "PolygonColor"    
    static Tooltip: string = "Tooltip"  
    static toArray() {
        return [
            this.Category, 
            this.LineColor,
            this.Linestring,
            this.IsLineOverlapsPolygon,
            this.Polygon, 
            this.PolygonCategory, 
            this.PolygonColor,
            this.Size, 
            this.Tooltip]
    }
}