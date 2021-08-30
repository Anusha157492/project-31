const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];
var engine, world, ground;
function preload(){

}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
   ground = new Ground (400, 800, 800, 10);
    for (var k= 0; k<800; k=k+80){
      var div = new Divisions (k, 800-divisionsHeight/2, 10, divisionsHeight)
      divisions.push(div)
    }
    
    for (var j=75; j<800; j= j+50){
      var plink = new Plinko(j, 75);
      plinkos.push (plink);
    }
    for (var j=50; j<800; j= j+50){
      var plink = new Plinko(j, 175);
      plinkos.push (plink);
    }
    for (var j=75; j<800; j= j+50){
      var plink = new Plinko(j, 275);
      plinkos.push (plink);
    }
    for (var j=50; j<800; j= j+50){
      var plink = new Plinko(j, 375);
      plinkos.push (plink);
    }

    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
    }
    
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display();
  for(var k=0; k< divisions.length; k++){
    divisions[k].display ();
  }
  for (var j=0;j< plinkos.length; j++){
    plinkos[j].display();
  }
  for (var j=0;j< particles.length; j++){
    particles[j].display();
  }
}