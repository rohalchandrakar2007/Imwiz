(function(){
    function init(){
        console.log("init...");
        
        
        var c = new IMWIZ.Image("sfkdk");
        console.log(c.getsrc());
    }
    
    window.addEventListener("load", init, false);
}());