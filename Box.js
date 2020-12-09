class Box{
    constructor(x,y,width,height,color) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);
    }

    display() {
        push();
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
        
        image(this.image,402,605,240,200 )
        pop()
    }
}