
var fixedRect, movingRect;
var gameObject1, gameObject2;
var rect;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 5;
  
  rect = createSprite(200,500,50,30);
  rect.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else if(isTouching(movingRect,rect)) {
    movingRect.shapeColor = "red";
  
    rect.shapeColor = "red"
  }
 else{
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
   rect.shapeColor = "green";
 }

bounceOff(movingRect,fixedRect)
  drawSprites();
}

