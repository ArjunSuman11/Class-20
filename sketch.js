var moving, fixed;

function setup() {
  createCanvas(1200,600);
  moving = createSprite(400, 300, 50, 80);
  fixed = createSprite(600, 300, 80, 50);

  moving.debug = true;
  fixed.debug = true;
  moving.velocityX = 5;
  fixed.velocityX = -5;
}

function draw() {
  background(0); 
  
  //moving.x = mouseX;
  //moving.y = mouseY;

  //DETECTING COLLISION
  if(fixed.x - moving.x  <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && fixed.y - moving.y  <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2){
      moving.shapeColor = "red";
      fixed.shapeColor = "red";
  }
  else{
      moving.shapeColor = "green";
      fixed.shapeColor = "green";
  }

  //BOUNCEOFF ALGORITHM
  if(fixed.x - moving.x  <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2){
      moving.velocityX *= (-1);
      fixed.velocityX *= (-1);
  }
  if(fixed.y - moving.y  <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2){
      moving.velocityY *= (-1);
      fixed.velocityY *= (-1);
  }
  
  drawSprites();
}

/*
ALGORITHM
 ==> Logic to solve a problem
Computer algo ==> Giving instructions to the computer to solve a problem

pre-defined Algorithms:
  1. isTouching() --> Detects collision between two objects
  2. bounce() --> bounces off two objects upon collision
*/