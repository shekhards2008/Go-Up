const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot, slingshotimg;
function preload() {
  backgroundimg = loadImage("background.jpg");
  slingshotimg = loadAnimation("sling1.png", "sling2.png");
}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  backimg = createSprite(400, 200, 50, 50);
  backimg.addImage(backgroundimg); 
  backimg.velocityY= 4;

  tom = new Tom(400, 680, 10, 10);
  

  sling1 = createSprite(400, 600, 10, 10);
  sling1.addAnimation("sling1", slingshotimg)
  sling1.scale = 0.7;
 

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
    if(backimg.y > 600){
      backimg.y = 400
    }
    tom.display();
  drawSprites();
}

function spawnSling() {
if(World.frameCount % 60 === 0) {
  slingshot = createSprite(400, 100, 10, 10);
  slingshot.addAnimation("sling", slingshotimg);
  slingshot.x = random(100, 700);
  slingshot.scale = 0.8;
  slingshot.velocityY = 4;
}
}