var IMWIZ = new Object();

IMWIZ.Image = function(__src)
{
    this.src = __src;
};



IMWIZ.Image.prototype.getsrc = function()
{
    console.log(this.src);
};