class Umbrella {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      this.animation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
      World.add(world, this.body);
    }
    display(){
      /*var pos =this.body.position;
      rectMode(CENTER);
      fill(192,192,192);
      rect(pos.x, pos.y, this.width, this.height);
      */
    animation(this.animation);
    }
  };