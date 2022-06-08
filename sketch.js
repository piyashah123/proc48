var player;
var playerImg;
var score = 0;
var road ;
var garbage;
var grabageGroup;
var score;
//game states      
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsTop1 = loadImage("assets/obsTop1.png")
playerImg = loadImage("assets/player.png")

roadImg = loadImage("assets/road.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

gameOverImg= loadImage("assets/gameOver.png")
restartImg = loadImage("assets/restart.png")

}

function setup(){

  createCanvas(1000,800);
  road=createSprite(300,400,30,30);
road.addImage("road",roadImg);
road.scale=2;
road.velocityY=5

player=createSprite(400,200,20,20);
player.addImage("player",playerImg);
player.scale=0.5;

grabageGroup=createGroup()

}
 

function draw() {
  
  background("black");
  //resettheground
if (road.y>1000)
{road.y=400;}

//keycontrolsfunctioncall
keycontrols();

spownObstacle();

if (grabageGroup.isTouching(player)){
  score=score+1;
  console.log(score);
}
drawSprites();

} 
function keycontrols(){
if (keyDown(UP_ARROW)){
  player.y=player.y-5;
}
if (keyDown(DOWN_ARROW)){
  player.y=player.y+5;
}
if (keyDown(LEFT_ARROW)){
  player.x=player.x-5;
}
if (keyDown(RIGHT_ARROW)){
  player.y=player.y+5;
}

}

function spownObstacle(){
  if(frameCount%100==0){
      garbage=createSprite(random(30,800),random(20,500),20,20);
      garbage.velocityY=5;
grabageGroup.add(garbage);

  }
  
  
}

function isTouching(object1, object2) {


  if (object1.x - object2.x < object2.width / 2 + object1.width / 2
    && object2.x - object1.x < object2.width / 2 + object1.width / 2
    && object1.y - object2.y < object2.height / 2 + object1.height / 2
    && object2.y - object1.y < object2.height / 2 + object1.height / 2) {


    return true;

  }
  else {
    return false;
  }
}
 