import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var ODmap5AA58DF977C4921BDDC0050BFF97A2B_DEBUG: IVisualPlugin = {
    name: 'ODmap5AA58DF977C4921BDDC0050BFF97A2B_DEBUG',
    displayName: 'OD map',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["ODmap5AA58DF977C4921BDDC0050BFF97A2B_DEBUG"] = ODmap5AA58DF977C4921BDDC0050BFF97A2B_DEBUG;
}

export default ODmap5AA58DF977C4921BDDC0050BFF97A2B_DEBUG;