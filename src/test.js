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

            var tObj = new IMWIZ.Image(imData);
            tObj.setPixel(0,0,200,0,0,255);
            tObj.setPixel(1,0,200,0,0,255);
            tObj.setPixel(2,0,200,0,0,255);
            tObj.setPixel(3,0,200,0,0,255);
            tObj.setPixel(4,0,200,0,0,255);
            tObj.setPixel(5,0,200,0,0,255);
            tObj.setPixel(6,0,200,0,0,255);
            tObj.setPixel(7,0,200,0,0,255);
            tObj.setPixel(8,0,200,0,0,255);
            tObj.setPixel(9,0,200,0,0,255);

            console.log(tObj);

            _drawImage(tObj.getImage());

        }



        
    


    var clone = (function () {
            return function (obj) {
                Clone.prototype = obj;
                return new Clone()
            };

            function Clone() {}
        }());







    function _drawImage(__imageData) {
        element = document.getElementById("myCanvas");
        c = element.getContext("2d");
        c.putImageData(__imageData, 0, 0);
    }


    window.addEventListener("load", init, false);
}());