class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,50,options);
      
      this.image = loadImage("images/Walking_Frame/walking_1.png");
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      /*rectMode(CENTER);
      fill(192,192,192);
      rect(pos.x, pos.y, this.width, this.height);
      */
     imageMode(CENTER);
    image(this.image,pos.x,pos.y + 80,300,300);
    }
  };

  //"Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png"