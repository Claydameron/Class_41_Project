const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Bruce;
var raindrops = [];
var thunderbolt1, thunderbolt2, thunderbolt3, thunderbolt4;

function preload(){
    
}

function setup() {
createCanvas(400,700);

engine = Engine.create();
world = engine.world;

Bruce = new Umbrella(200,500);

thunderbolt1 = loadImage("images/thunderbolt/1.png");
thunderbolt2 = loadImage("images/thunderbolt/2.png");
thunderbolt3 = loadImage("images/thunderbolt/3.png");
thunderbolt4 = loadImage("images/thunderbolt/4.png");

}

function draw(){
background(0);

Engine.update(engine);

    if(frameCount % 10 === 0) {
        raindrops.push(new Raindrop(random(0,400),random(0,400)))
      }

      for (var i = 0; i < raindrops.length; i++) { 
        raindrops[i].display(); 
      }

      Bruce.display();

      if(frameCount % 85 === 0) {
        random1 = random(0,400);
        var thunder = createSprite(random1,165,10,40);
        thunder.scale = 0.5;
        thunder.lifetime = 10;
        
        var random2 = Math.round(random(1,4));
        switch(random2) {
          case 1: thunder.addImage(thunderbolt1);
                  break;
          case 2: thunder.addImage(thunderbolt2);
                  break;
          case 3: thunder.addImage(thunderbolt3);
                  break;
          case 4: thunder.addImage(thunderbolt4);
                  break;
          default: break;
        }
      }
    
    drawSprites();
}   

