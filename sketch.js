const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var hasfired = false;

var particles = [];
var plinkos = [];
//var divisons = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);
  division1 = new Division(80,650,5,400);
  division2 = new Division(160,650,5,400);
  division3 = new Division(240,650,5,400);
  division4 = new Division(320,650,5,400);
  division5 = new Division(400,650,5,400);
  division6 = new Division(480,650,10,400);
  division7 = new Division(0,650,10,400);

  particle = new Particle(200,500);
  
  for (x=2; x<6; x++){
    for (i=40; i<480; i=i+40){
      plinkos.push(new Plinko(i,x*70))
    }
  }
}

function draw() {
  background(0);  

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  particle.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(20,460),10));
  }

  for (i=0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  for (i=0; i < particles.length; i++){
    particles[i].display();
  }
  ground.display();

  Engine.update(engine);
  drawSprites();
}







/*
function mouseDragged(){
  if(hasfired === false){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  hasfired = true;
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone.body);
      hasfired = false;
  }
}*/