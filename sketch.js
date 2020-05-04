var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="blue";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="blue";

 
 // fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.y= World.mouseY;
  movingRect.x = World.mouseX;
  if(isTouching(gameObject2,movingRect)){
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red";
  }
else{
  movingRect.shapeColor="blue";
  gameObject2.shapeColor="blue";
}
  drawSprites();
}









