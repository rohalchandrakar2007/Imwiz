IMWIZ.Image = function (__data) {
    this.imageData = new Array();
    this.width = 0;
    this.height = 0;

    Object.assign(this.imageData, __data.data);
    this.width = __data.width;
    this.height = __data.height;
};



IMWIZ.Image.prototype = Object.create(IMWIZ.Image.prototype);
IMWIZ.Image.prototype.constructor = IMWIZ.Image;



IMWIZ.Image.prototype.getPixel = function (__x, __y) {
    var pix = new Array();
    var origin = (__y * this.width + __x) * 4;
    pix.push(this.imageData[origin]);
    pix.push(this.imageData[origin + 1]);
    pix.push(this.imageData[origin + 2]);
    pix.push(this.imageData[origin + 3]);

    return pix;
};



IMWIZ.Image.prototype.setPixel = function (__x, __y, __r, __g, __b, __a) {
    var origin = (__y * this.width + __x) * 4;
    this.imageData[origin] = __r;
    this.imageData[origin + 1] = __g;
    this.imageData[origin + 2] = __b;
    this.imageData[origin + 3] = __a;
};



IMWIZ.Image.prototype.getImage = function () {
    var canvas = document.createElement('canvas');
    this.img = canvas.getContext('2d').createImageData(this.width, this.height);
    this.img.data.set(this.imageData);

    return this.img;
};




IMWIZ.Image.prototype.getImageData = function () {
    return this.imagedata;
};


IMWIZ.Image.prototype.clone = function () {
    return new this.constructor().copy(this);
};