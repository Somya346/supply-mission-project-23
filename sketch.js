var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var option;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(300,600,20,100);
	box1.shapeColor=color(255,0,0);

	box2=createSprite(410,650,200,20);
	box2.shapeColor=color(255,0,0);

	box3=createSprite(520,600,20,100);
	box3.shapeColor=color(255,0,0);

	engine = Engine.create()
	world = engine.world;

	var packageBody_options={
		isStatic: true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	
	var ground_option={
		isStatic: true
	}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 
    console.log(ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 rect(ground.position.x,ground.position.y,400,20)
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);
	
	
  }
}



