var background,boy,obstacle;

var backgroundImg,boyImg,obstacleImg;

var invisibleGround;

var coin,coinImg;
var coin1,coin1Img;

var score=0;
function preload(){
backgroundImg = loadImage("pngtree-rock-background-of-cartoon-mountains-on-mars-image_904716.png");
boyImg = loadImage("giphy.gif");
obstacleImg = loadImage("vab615_1_volcano_isometric_cartoon_nature_sun_lava_eruption-512.webp");
coinImg = loadImage("372102230_BITCOIN_400px.gif");
coin1Img = loadImage("imageedit_7_7018629412.gif");

}

function setup() {
createCanvas(windowWidth,windowHeight);


background=createSprite(width/2,height-500);
background.addImage(backgroundImg);

//background.scale=4;
background.scale=3.99;
background.velocityX=-14 ;

console.log(windowWidth);
boy=createSprite(400,840);
boy.addImage(boyImg);
boy.scale=0.5;

invisibleGround = createSprite(width/2,height-25,width,2);
invisibleGround.visible = false;

coin_Group=new Group();
coin1_Group=new Group();
obstacle_Group=new Group();
}


function draw() {
textSize(100);
  if (background.x < 0){
    background.x=background.width/0.5;
  }
  if(keyDown("space")&&boy.y>=400){
    boy.velocityY=-10;
  }

      boy.velocityY = boy.velocityY + 0.8



        createCoin();
        createCoin1();
        createObstacle();
      if (coin_Group.isTouching(boy)) {
          coin_Group.destroyEach();
          score=score+1;
        }
       else if (coin1_Group.isTouching(boy)) {
            coin1_Group.destroyEach();
            score=score+3;
          }
        else if(obstacle_Group.isTouching(boy)){
            background.velocityX=0;

            coin_Group.setvelocityXEach(0);
            coin1_Group.setvelocityXEach(0);
            obstacle_Group.setvelocityXEach(0);
          }
        console.log(score);
          

    boy.collide(invisibleGround);
boy.setCollider("rectangle",0,0,boy.width-280,boy.height-200);
boy.debug=true;

  drawSprites();
  textSize(20);
  fill(255);
  text("Bitcoin: "+ score,width-150,30);
}
function createCoin() {
  //if(frameCount%Math.round(random(10,100))==0){
    if(frameCount%130==0){
    coin=createSprite(Math.round(random(400,800)),Math.round(random(650,800)));
    //coin=createSprite(800,800);
    coin.addImage(coinImg);
    coin.scale=0.4;
    coin.velocityX=-14;
    coin_Group.add(coin);
    coin.debug=true; 
    coin.setCollider("rectangle",0,0,coin.width-110,coin.height-50);
    }
  }

  function createCoin1() {
    //if(frameCount%Math.round(random(10,100))==0){
      if(frameCount%70==0){
      coin1=createSprite(Math.round(random(400,800)),Math.round(random(650,800)));
      //coin=createSprite(800,800);
      coin1.addImage(coin1Img);
      coin1.scale=0.4;
      coin1.velocityX=-14;
      coin1_Group.add(coin1);
      coin1.debug=true; 
      coin1.setCollider("rectangle",0,0,coin1.width-110,coin1.height-50);
      }
    }

    function createObstacle() {
      if(frameCount%150==0){
        obstacle=createSprite(800,890);
        obstacle.addImage(obstacleImg);
        //obstacle.scale=0.07;
        obstacle.scale=0.5;
        obstacle.velocityX=-14;
        obstacle_Group.add(obstacle);
      }
      }


