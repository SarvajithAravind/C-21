var fixedRect, movingRect;
var rect1, rect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(430,200, 35, 35);
  rect1.shapeColor = "brown"
  rect2 = createSprite(600, 150, 75, 75);
  rect2.shapeColor = "violet"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, rect2)){
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
  else {
    rect2.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  } 

  
  drawSprites();
}



function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
      return true;
  }
  else {
      return false;
  } 
}



































