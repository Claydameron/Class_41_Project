class Raindrop{
    constructor(x,y) {
        var options = {
            isStatic:false,
            friction:0.5,
            density:1.15,
        }
        this.body = Bodies.circle(x, y,5,options);
        
        World.add(world, this.body);
    }
    display() {
    var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          stroke("blue");
          fill("lightBlue");
          ellipse(0,0,5,5);
          pop();
    }
    }