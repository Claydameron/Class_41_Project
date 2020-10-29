class Raindrop{
    constructor(x,y) {
        var options = {
            isStatic:false,
            friction:0.5,
            density:1.15,
        }
        this.body = Bodies.rectangle(x, y,2,5,options);
        
        World.add(world, this.body);
    }
    display() {
    var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          stroke("black");
          fill("white");
          rect(0,0,this.width,this.height);
          pop();
    }
    }