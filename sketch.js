
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(300, 100, 50, 50);
  gameObject1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "red";
    movingRect.width = 150;
  }
  
  else {
    movingRect.shapeColor = "green";
    movingRect.width = 80;
    gameObject1.shapeColor = "green"
  }
 

//bounceOff(object1,fixedRect)
  drawSprites();
}




