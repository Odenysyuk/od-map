(function InitBingMapScript(w, d){
    console.log('InitBingMapScript');
    let script = d.createElement('script');
    script.type = "text/javascript"
    script.src = "https://www.bing.com/api/maps/mapcontrol?callback=loadMap";
    script.async = false;
    script.defer = false;
    d.body.appendChild(script);  })(window, document);