var bgimg;
var cat;
var catimg1, catimg2, catimg3, catimg4;
var mouseimg1, mouseimg2, mouseimg3, mouseimg4;
var mouse;
var canvas;

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catimg3 = loadImage("images/cat4.png");
    mouseimg1 = loadImage("images/mouse1.png");
    mouseimg2 = loadImage("images/mouse2.png", "images/mouse3.png");
    mouseimg3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870, 600);
    cat.addAnimation("gatoSentado", catimg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseAndando", mouseimg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width) /2 ) {
        cat.velocityX=0;
        cat.addAnimation("últimaImagemGato", catimg3);
        cat.x =300;
        cat.scale =0.2;
        cat.changeAnimation("últimaImagemGato");
        mouse.addAnimation("mouseAndando", mouseimg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouseAndando");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW) {
      mouse.addAnimation("ratoProvocando", mouseimg2);
      mouse.changeAnimation("ratoProvocando");
      mouse.frameDelay = 25;

      cat.velocityX = -5;
      cat.addAnimation("gatoProvocando", catimg2);
      cat.changeAnimation("gatoProvocando");
  }


}
