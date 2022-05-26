
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ball = Bodies.circle(210,10,10,ball_options)
	World.add(world, ball);

var ball_options={
isStatic : false ,
restitution : 0.3 ,
friction : 0 ,
density : 1.2 
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



