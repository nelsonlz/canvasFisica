var material = (function(){
      var Material = function(density,restituition)
      {
         this.density = density;
         this.restituition = restituition;
      };
      return function()
      {
         return new Material;
      };
   
})();

var MassData = (function(){
   var MassData = function(mass, inv_mass){
      this.mass = mass;
      this.inv_mass = inv_mass;
      //para rotacoes
      this.inertia = inertia;
      this.inverse_inertia = inverse_inertia;
   };
   return function()
   {
      return new MassData;
   };
})();

var body = (function(){
   var body = function(shape, transform, material,MassData, velocity,force,gravityScale)
   {
      this.shape = shape;
      this.transform = transform;
      this.material = material;
      this.MassData = mass_data;
      this.velocity = velocity;
      this.force    = force;
      this.gravityScale = gravityScale;
              
   };
   return function()
   {
      return new body();
   };
   
})();

