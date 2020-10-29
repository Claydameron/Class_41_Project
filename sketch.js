const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Bruce;
var raindrops = [];

function preload(){
    
}

function setup() {
createCanvas(400,400);

Bruce = new Umbrella(200,300,10,10);

engine = Engine.create();
world = engine.world;

Engine.run();  
}

function draw(){
background(0);

    if(frameCount % 10 === 0) {
        raindrops.push(new Raindrop(random(0,400),2,5))
      }

      for (var i = 0; i < raindrops.length; i++) { 
        raindrops[i].display(); 
      }

      Bruce.display();
    
    drawSprites();
}   

