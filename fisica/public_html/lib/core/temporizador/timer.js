var timer =  (function(){
   var timer = function(context)
   {
      this.context = context;
      
      this.maxFps = 32;
      
      this.frameCount = 0;
      this.currentFps = 0;
      this.drawInterval = 1 / this.maxFps * 1000;
      this.lastFps = new Date().getTime();
      
      
      
   };
   return function(context)
   {
      return new timer(context);
   };
   
})();