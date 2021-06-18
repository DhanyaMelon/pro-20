var bgImg,sleepImg






function preload(){
  //bgImg=loadAnimation("images/iss.png");
  //sleepImg = loadAnimaton("images/sleep.png");
  //brushImg=loadAnimation("images/brush.png");
  //gymImg = loadAnimaton("images/gym1.png","images/gym2.png");
  //eatImg=loadAnimation("images/eat1.png","images/eat2.png");
  //drinkImg = loadAnimaton("images/drink1.png","images/drink2.png");
  //moveImg =loadAnimation("images/move.png","images/move1.png");
}


function setup() {
  createCanvas(800,400);

  bg=createSprite(800,400);
  //bg.addAnimation(bgImg);

  astronaut=createSprite(300,230);
  //astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale=0.1;
}

function draw() {
  background(255,255,255);  

  text("Instruction:",200,50);
  text("up arrow:Brushing",200,60);
  text("down arrow:Gymming",200,70);
  text("left arrow:Eating:",200,80);
  text("right arrow:Bathing",200,90);
  text("m key:Moving",200,100);

  createEdgeSprites();

 astronaut.bounceOff(edge);

 if(keyDown("UP_ARROW")){
   addAnimation.addAnimation("brushing",brushImg);
   astronaut.changeAnimation("brushing");
   astronaut.y=350;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
 }

 if(keyDown("DOWN_ARROW")){
  addAnimation.addAnimation("gymming",gymImg);
  astronaut.changeAnimation("gymming");
  astronaut.y=250;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("LEFT_ARROW")){
  addAnimation.addAnimation("bathing",bathImg);
  astronaut.changeAnimation("bathing");
  astronaut.y=100;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("Right_ARROW")){
  addAnimation.addAnimation("eating",eatImg);
  astronaut.changeAnimation("eating");
  astronaut.y=200;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("m")){
  addAnimation.addAnimation("moving",moveImg);
  astronaut.changeAnimation("moving");
  astronaut.y=300;
  astronaut.velocityX=3;
  astronaut.velocityY=-3;
}

  drawSprites();
}