//1st step: Name Aliasing-Used to indicate a name (nickname)
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

//2nd step: Declaring your own world and engine
var myEngine,myWorld;
//3rd step: Declaring whatever objects you wish to make
var box1;
var ground1;



function setup() {
  createCanvas(400,400);

  //4th step: Creating your own engine and adding world to it

  //Acquiring all of the Physics Engine properties into myEngine
  myEngine=Engine.create();
  //Adding engine.world to myWorld
  myWorld = myEngine.world;


  //5th step: Creating your own objects
  //Giving what shape the object should be 
  
  //Creating box object as box1 
  box1= new Box(200, 100, 50, 50);
  ground1 = new Ground(200, 390, 400, 20);
  box2= new Box(220, 50, 50, 100);

}

function draw() {
  background("black");  
  //VERY IMPORTANT 6th Step: Updating engine
  Engine.update(myEngine);
  //Displaying box 
  box1.display();
  ground1.display();
  box2.display();
 //Drawsprites is not required because we only created a rectangle using physics engine body and no sprites
}