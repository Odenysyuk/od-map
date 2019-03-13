(function InitBingMapScript(w, d){
    let script = d.createElement('script');
    script.type = "text/javascript"
    script.src = "https://www.bing.com/api/maps/mapcontrol?callback=loadMap";
    script.async = true;
    script.defer = true;
    d.body.appendChild(script);  
})(window, document);