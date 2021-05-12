var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,150,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,150,30);
    block2.shapeColor = "pink";

    block3 = createSprite(500,580,150,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,580,150,30);
    block4.shapeColor = "orange";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = -6;
    ball.velocityY = 6;
}

function draw() {
    background(rgb(0,0,0));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

     if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        }



    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "pink";
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }


   if(block4.isTouching(ball)&& ball.bounceOff(block4)){
       ball.shapeColor = "orange";
   }

    drawSprites();
}
