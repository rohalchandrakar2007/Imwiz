(function () {
    var imwiObj;

    function init() {
        console.log("init...");

        this.image = new Image();
        this.image.src = 'temptextures/small_building.png';
        this.image.onload = _imageLoaded;
    }






    function _imageLoaded(ev) {
        element = document.createElement("canvas");
        c = element.getContext("2d");
        im = ev.target;
        width = im.width;
        height = im.height;
        c.drawImage(im, 0, 0);
        imData = c.getImageData(0, 0, width, height);
        
        //code for changing pixepls
        imwiObj = new IMWIZ.Image(imData);
        
        console.log(imwiObj);
        
        var tObj = goclone(imwiObj);
        tObj.setPixel(0,0,200,0,0,0);
        
        console.log(tObj);
        
        _drawImage(imData);
        
        
    }
    
    
    
    function goclone(source) {
    if (Object.prototype.toString.call(source) === '[object Array]') {
        var clone = [];
        for (var i=0; i<source.length; i++) {
            clone[i] = goclone(source[i]);
        }
        return clone;
    } else if (typeof(source)=="object") {
        var clone = {};
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                clone[prop] = goclone(source[prop]);
            }
        }
        return clone;
    } else {
        return source;
    }
}


    
    
    
    
    
    
    
    function _drawImage(__imageData)
    {
        element = document.getElementById("myCanvas");
        c = element.getContext("2d");
        c.putImageData(__imageData, 0, 0);
    }


    window.addEventListener("load", init, false);
}());