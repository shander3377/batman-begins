class Umbrella {
      
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         this.image = loadImage('download (1).png')
         var radius = 25;
         this.body = Matter.Bodies.circle(600,150, radius, options);
      
         World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
     imageMode(CENTER);
     image(this.image, pos.x, pos.y,);
    }
}


