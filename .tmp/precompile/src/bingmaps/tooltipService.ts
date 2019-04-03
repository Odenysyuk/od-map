class TooltipService {

    private tooltip: Microsoft.Maps.Infobox;
    private tooltipTemplate: string;

    constructor(map: Microsoft.Maps.Map) {
        this.tooltip = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false,
            showPointer: false,
            showCloseButton: false,
            offset: new Microsoft.Maps.Point(-75, 10)
        });
        this.tooltip.setMap(map);
        this.tooltipTemplate = this.getTooltipTemplate();
    }

    public add(item: Microsoft.Maps.Polyline, text: string) {
        if(text && text !== ''){      
            Microsoft.Maps.Events.addHandler(item, 'mouseover', e => {  
                this.tooltip.setOptions({ visible: false });             
                //Set the infobox options with the metadata of the pushpin.
                this.tooltip.setOptions({
                   location: (e as Microsoft.Maps.IMouseEventArgs).location,
                   //Microsoft.Maps.SpatialMath.Geometry.centroid(item),// item.getLocations(),//.target.getLocation(),
                   htmlContent:  this.tooltipTemplate.replace('{title}', text),
                   visible: true
                });    

            });
            Microsoft.Maps.Events.addHandler(item, 'mouseout', x => { this.tooltip.setOptions({ visible: false })});
        }   
    }

    private getTooltipTemplate(): string {
        return '<div class="tooltiptext"><b>{title}</b></div>';
    }
}