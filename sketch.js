const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1,ground1;
var dustbin2,dustbin3;
var paperImg, dustbinImg;
var sup_object;



function setup() {
var canavas =createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

  

  dustbin2 = new Ground(750,250,15,80);

  dustbin3 = new Ground(830,250,15,80);

  paper1 = new Paper(10,0,30,30);

  ground1 = new Ground(500,295,1000,15);

  sup_object = new Dustbin(790,235,5,5)

  
 
  
  

  Engine.run(engine);
  
  
}


function draw() {
  ellipseMode(CENTER);
  rectMode(CENTER);
  background(255);
  

  

  ground1.display();
  
 

  dustbin2.display();

  dustbin3.display();

  paper1.display();

  sup_object.display();
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:180,y:-180});
  
	}
}