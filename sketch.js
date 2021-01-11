const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = []
var divisions = []
var plinkos =[]


function setup() {
  createCanvas(505,600);

  engine = Engine.create()
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(300,590,600,20)

  for(var i=0; i<=500; i=i+100){
     divisions.push(new Division(i,480,10,200))
  }

  for(var i=20; i<=440; i=i+60){
    plinkos.push(new Plinko(i,75))
  }

  for(var i=50; i<=410; i=i+60){
    plinkos.push(new Plinko(i,125))
  }

  for(var i=20; i<=440; i=i+60){
    plinkos.push(new Plinko(i,175))
  }

  for(var i=50; i<=410; i=i+60){
    plinkos.push(new Plinko(i,225))
  }


  
}

function draw() {
  Engine.update(engine);
  background("black");


  ground.display();

  for(var i=0; i<=divisions.length-1; i=i+1){
    divisions[i].display();
 }

 for(var i=0; i<=plinkos.length-1; i=i+1){
  plinkos[i].display();
 }

 createParticle();
 for(var i=0; i<=particles.length-1; i=i+1){
  particles[i].display();
 }
 
}

function createParticle(){
  if(frameCount%90 === 0){
    particles.push(new Particle(random(10,500),0))
    
  }
}