
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var drops =[];
var maxDrops = 150;
function preload(){
  
    thunder1 = loadImage('images.jpg')
    thunder2 = loadImage('lightning-icon-lightning.jpg')
    thunder3 = loadImage('lightning-strike-electric-blue-thunder-lightning.jpg')
}

function setup(){
 createCanvas(1200,400);
 engine = Engine.create();
 world  = engine.world;
Umbrella1 = new Umbrella()
if(frameCount%10===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,1100),random(0,1100),10,10));
     }
    }
  
   
  
}


function draw(){
    background(0);
  Engine.update(engine);
  Umbrella1.display()
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
  var rand = Math.round(random(1,2));
  if(frameCount%60===0){
    var thunderCreatedFrame = frameCount;
    
   
    var thunder = createSprite(random(300,370),random(100,30),5,5);
    console.log(thunder)
    switch(rand){
      case 1 : thunder.addImage(thunder1);
      break;
      case 2 : thunder.addImage(thunder2);
      break;
      case 3 : thunder.addImage(thunder3);
      break;
      default : break;
    }
    thunder.scale = random(0.5,1);
    if(thunderCreatedFrame + 10 ===frameCount && thunder) {
      thunder.destroy()
    }
    
}
drawSprites()   
}
