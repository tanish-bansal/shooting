var dustbin;
var ground;
var redbody1,redbody2,redbody3,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(0)
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	redbody1=Bodies.rectangle(650,650,200,20,{isStatic:true});
	redbody2=Bodies.rectangle(550,613,20,100,{isStatic:true});
	redbody3=Bodies.rectangle(750,613,20,100,{isStatic:true});
	World.add(world,redbody1);
	World.add(world,redbody2);
	World.add(world,redbody3);
   
	
	Engine.run(engine);
	ground = new Ground(300,680,1100,20);
	ball= new Ball(30,613,15);
	

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  text(mouseX+":"+mouseY,mouseX,mouseY);
 fill("red");
 rect(redbody1.position.x,redbody1.position.y,200,20);
 rect(redbody2.position.x,redbody2.position.y,20,100);
 rect(redbody3.position.x,redbody3.position.y,20,100);

 ground.display();
 ball.display();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:660,y:-660});
	
}
}