class Raindrop{
    constructor(x,y) {
        var options = {
            isStatic:false,
            friction:0.5,
            density:1.15
        }
        this.body = Bodies.rectangle(x, y,10,10,options);

        this.image = loadImage("Raindrop image.png")
        
    }
    display() {
    var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          //stroke("black");
          //fill("white");
          //rect(0,0,this.width,this.height);
          image(this.image,pos.x,pos.y);
          pop();
    }
    }