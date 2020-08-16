var ball,img,paddle;
function preload() {
ball1=loadImage("ball.png");  
paddle1=loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
 ball=createSprite(200,200,10,10);
 paddle=createSprite(350,200,10,50); 
  
  paddle.addImage(paddle1);
  
  ball.addImage(ball1);
  
ball.velocityX=10;
  

}

function draw() {
  background(205,153,0);
edges=createEdgeSprites();

ball.bounceOff(edges[2]);
 ball.bounceOff(edges[3]); 
  ball.bounceOff(edges[0]);  
  
ball.bounceOff(paddle);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);

 
  
  if(keyDown(UP_ARROW))
  {
  paddle.velocityY = -8;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = 8;
  }
  
  if(ball.bounceOff(paddle)){
     randomVelocity();
     
     }
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
var rand=random(7,11);
 ball.velocityX=rand;
}

