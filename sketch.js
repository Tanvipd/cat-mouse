var garden,gardenImg;
var tom, tomImg, tomA;
var mouse, mouseImg, mouseA;


function preload() {
    //load the images here
gardenImg = loadImage("garden.png");
tomImg = loadImage("cat1.png");
mouseImg = loadImage("mouse2.png");
tomA = loadImage("cat2","cat3");
mouseA = loadImage("mouse3");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    garden = createSprite(400,400);
    garden.addImage("garden",gardenImg);
    garden.scale = 1;
    tom = createSprite(700,650);
    tom.addImage("tom",tomImg);
    tom.scale = 0.1;
    mouse = createSprite(200,650);
    mouse.addImage("mouse",mouseImg);
    mouse.addImage("mouse",mouseA);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(keyPressed(left_arrow)){
        mouse.changeImage("mouse",mouseA);
    }








    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
