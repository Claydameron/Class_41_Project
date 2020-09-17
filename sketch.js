const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var raindrops = [];

function preload(){
    
}

function setup() {
createCanvas(400,400);

engine = Engine.create();
world = engine.world;

Engine.run(engine);  
}

function draw(){
background(0);

    if(frameCount % 60 === 0) {
        raindrops.push(new Raindrop(random(width/2-10,width/2+10),10,10))
      }

      for (var i = 0; i < raindrops.length; i++) { 
        raindrops[i].display(); 
      }
    
    
}   

