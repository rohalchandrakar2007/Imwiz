


IMWIZ.Image = function(__data)
{
    this.imageData = __data.data;
    this.width = __data.width;
    this.height = __data.height;
    //console.log(__data);
};






IMWIZ.Image.prototype.getPixel = function (__x, __y)
{
    var pix = new Array();
    var origin = (__y*this.width + __x) * 4;
    pix.push(this.imageData[origin]);
    pix.push(this.imageData[origin+1]);
    pix.push(this.imageData[origin+2]);
    pix.push(this.imageData[origin+3]);
    
    return pix;
}



IMWIZ.Image.prototype.setPixel = function (__x, __y, __r, __g, __b, __a)
{
    var origin = (__y*this.width + __x) * 4;
    this.imageData[origin] = __r;
    this.imageData[origin+1] = __g;
    this.imageData[origin+2] = __b;
    this.imageData[origin+3] = __a;
}







IMWIZ.Image.prototype.getImageData = function()
{
    return this.imagedata;
};

