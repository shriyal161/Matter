


//Create namespace for Engine
const Engine = Matter.Engine
//Create namespace for World
const World = Matter.World
//Create namespace for Bodies
const Bodies = Matter.Bodies
//Create namespace for Body
const Body = Matter.Body

function setup() {
  createCanvas(400,400);
//create the engine
 engine = Engine.create()
  //Add world to the engine
  world = engine.world
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ball_options = {
    restitution: 0.93,
    frictionAir:0.02
  }
   var ground_options ={
     isStatic: true
   };
  
  
//create a groun
ground= Bodies.rectangle(100,400,400,20,ground_options)
//add to world
World.add(world,ground)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(95,20,10,ball_options);
  World.add(world,bal1l);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  //write a rectangle function to display ground.
  rect(ground.position.x,ground.position.y,500,20);
  console.log (ground.position.y)

 


  
  
}

