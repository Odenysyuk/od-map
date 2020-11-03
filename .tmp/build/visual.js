

var powerbi = window.powerbi;

/// <reference path="types/MicrosoftMaps/Microsoft.Maps.All.d.ts"/>
powerbi.visuals = powerbi.visuals || {};
powerbi.visuals.plugins = powerbi.visuals.plugins || {};
powerbi.visuals.plugins["ODmap5AA58DF977C4921BDDC0050BFF97A2B_DEBUG"] = {
    name: 'ODmap5AA58DF977C4921BDDC0050BFF97A2B_DEBUG',
    displayName: 'OD map',
    class: 'Visual',
    version: '1.0.2',
    apiVersion: '2.6.2',
    create: (options) => new powerbi.extensibility.visual.Visual(options),
    custom: true
};
//# sourceMappingURL=visual.js.map
var Globalize = Globalize || window["Globalize"] || require("Globalize");
