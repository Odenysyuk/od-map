declare var powerbi;
powerbi.visuals = powerbi.visuals || {};
powerbi.visuals.plugins = powerbi.visuals.plugins || {};
powerbi.visuals.plugins["oDmapD5AA58DF977C4921BDDC0050BFF97A2B_DEBUG"] = {
    name: 'oDmapD5AA58DF977C4921BDDC0050BFF97A2B_DEBUG',
    displayName: 'OD map',
    class: 'Visual',
    version: '1.0.1',
    apiVersion: '2.5.0',
    create: (options: extensibility.visual.VisualConstructorOptions) => new powerbi.extensibility.visual.Visual(options),
    custom: true
}
