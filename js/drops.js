class Drop{
    constructor(x,y,width,height){
        var options={
           
            friction: 0.001,
            restitution: 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
    fill("blue");
    ellipse(pos.x, pos.y,this.width, this.height);
    }
    update(){
        if(this.body.position.y<400){
       
       Matter.Body.setPosition(this.body,  (this.body,{x: random(0,1200),
        y: random(0,400)
        
         }))
        
        }
}
}