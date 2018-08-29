var Engine = Matter.Engine , World = Matter.World, Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = Bodies.rectangle(300, height, width, 10, {isStatic: true});
  World.add(world, ground);
}

function draw() {
  background(51);
  for(var i = 0; i < boxes.length; i++)
    boxes[i].show();
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}
