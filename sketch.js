

var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
function preload()
{
	

}

function setup() {
	createCanvas(1800, 1700);
	
	



	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	


	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	box2 = new Box(500,650,20,100,"red");
	box3 = new Box(300,650,20,100,"red");
	box1 = new Box(400,690,200,20,"red");
	ground = new Ground(400,710,2500,20,"Brown")
	ball= new Paper(100,690,20,"green");

	
	Engine.run(engine);
}


function draw() {
  
  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
	

	ball.display();
	ground.display();
	box1.display();
	box2.display();
	box3.display();
	
  
}
function keyPressed() {
	console.log("click")
	 if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-85});
 } }
