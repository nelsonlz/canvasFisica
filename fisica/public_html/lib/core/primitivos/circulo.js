var circulo = (function(){
      var circulo = function(x, y, rad, speed, mass)
      {
         this.pos = ({x:x, y:y});
         this.speed = ({sx:speed, sy:speed});
         this.mass  = mass;
         this.rad   = rad;
         
         this.draw = function(context)
         {
            context.clearRect(this.pos.x, this.pos.y,this.pos.x+this.rad, this.pos.y+this.rad );
            context.beginPath();
            context.fillStroke = "rgb(0,0,0)";
            context.arc(this.pos.x, this.pos.y, this.rad,0,2*Math.PI);
            context.stroke();
         }
         
         this.testColision = function(obj)
         {
            rTotal = obj.rad + this.rad;
            rTotal *= rTotal;
            if(rTotal > ( Math.pow((this.pos.x - obj.pos.x),2) +  Math.pow((this.pos.y - obj.pos.y),2) ) )
            {
                  this.speed.sx *= -1;
                  this.speed.sy *= -1;
               }
            return rTotal > ( Math.pow((this.pos.x - obj.pos.x),2) +  Math.pow((this.pos.y - obj.pos.y),2) )
         }
         
         this.anime = function()
         {
            this.pos.x += this.speed.sx;
            this.pos.y += this.speed.sy;
         }
         
      };
      
      return function(x,y,rad,speed, mass)
      {
         return new circulo(x,y,rad,speed, mass);
      }
   
})();