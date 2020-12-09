class Paper{
    
    constructor(x,y,radius,color) {
        var options = { isStatic:false, 
            restitution:0.3, 
            friction:0.5,
             density:1.2 }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius;
        this.color = color;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        
        
        ellipse(0,0,this.radius,this.radius);
        
        pop()
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,  2*this.radius,2*this.radius);
        
    }
}