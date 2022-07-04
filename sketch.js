var sea, seaImage;
var ship, shipImage;




function preload(){
  seaImage = loadImage("sea.png");

shipImage=  loadAnimation("ship-1.png","ship-2.png");




}

function setup(){
  createCanvas(400,400);

  

  sea= createSprite(400,90);
  sea.addImage(seaImage);

  sea.velocityX = -2;

  ship = createSprite(130,300,40,40);
  ship.addAnimation("movingShip",shipImage);
ship.scale = 0.2;

}

function draw() {
 background(0);


    drawSprites();

 
}
