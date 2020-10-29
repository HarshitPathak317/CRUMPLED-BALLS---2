
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var leftdustbin,centerdustbin,rightdustbin,imgbin;
var dimg,paperimg;

function preload()
{
  dimg = loadImage("IMG/dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,300,10)
    ground = new Ground(400,400,800,10);
    centerdustbin = new Dustbin(550,380,100,15);
    leftdustbin = new Dustbin(500,320,15,110);
    rightdustbin = new Dustbin(600,320,15,110);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  paper.display();
  ground.display();
  //centerdustbin.display();
  //leftdustbin.display();
  //rightdustbin.display();
  dimg.height = 150;
  dimg.width = 100;
  image(dimg,500,250);
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:23,y:-12});
    console.log("You Win!!!");
  }
}
