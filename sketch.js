
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var leftdustbin,centerdustbin,rightdustbin,imgbin;
var dimg,paperimg;

function preload()
{

}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,300,70);
    ground = new Ground(400,400,800,10);
    centerdustbin = new Dustbin(600,380,200,15);
    leftdustbin = new Dustbin(500,340,15,70);
    rightdustbin = new Dustbin(700,340,15,70);
    imgbin = new Dustbin(300,200,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  centerdustbin.display();
  leftdustbin.display();
  rightdustbin.display();
  imgbin.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:25,y:-10});
    console.log("You Win!!!");
  }
}
