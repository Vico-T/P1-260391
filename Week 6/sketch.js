let  wellBeing = [];
let health = 100;
let raccoon = [];
let raccoonImage = 1;
let raccoonWalkX = 640;
let raccoonSpeed = 1;
let shopper = [];
let buttons = [];
let bGround = [];
let locaties = [{
  woonkamer: bGround[0],
  keuken: bGround[1],
  // badkamer: badkamer,
  // inventorie: inventorie,
}]
let press = 0;
let item = 0;

function preload() {
  wellBeing.push(loadImage('heart/heartFull.png'));
   wellBeing.push(loadImage('heart/heart-1.png'));
  bGround.push(loadImage('background/livingRoom.png'));
  bGround.push(loadImage('background/keuken.png'));
  shopper.push(loadImage('shop/berry.png'));
  shopper.push(loadImage('shop/dragonfly.png'));
  shopper.push(loadImage('shop/bandage.png'));
  raccoon.push(loadImage('raccoon/wasbeer/happyRaccoon.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/walkingRaccoonLeft.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/walkingRaccoonRight.gif'));


}


function setup() {
  createCanvas(800, 800);

  //shopbuttons
  shopButton = createButton("shop");
  shopButton.position(700, 15);
  shopButton.size(100, 30);
  shopButton.style("background-color", "brown");
  shopButton.style("border-color", "brown");
  shopButton.style("border-width", "3px");
  shopButton.mousePressed(shoppressed)
  buttons.push(shopButton);

  berrieButton = createButton("berries");
  berrieButton.position(695, 60);
  berrieButton.size(70, 20);
  berrieButton.mousePressed(item);
  buttons.push(berrieButton);

  dragonflyButton = createButton("dragonfly");
  dragonflyButton.position(695, 100);
  dragonflyButton.size(70, 20);
  dragonflyButton.mousePressed(item);
  buttons.push(dragonflyButton);

  bandageButton = createButton("bandage");
  bandageButton.position(695, 140);
  bandageButton.size(70, 20);
  bandageButton.mousePressed(item);
  buttons.push(bandageButton);

  //inventorybuttons
  invButton = createButton("inventorie");
  invButton.position(700, 60);
  invButton.size(100, 30);
  invButton.mousePressed(invPressed);
  buttons.push(invButton);


  //bowlen
  bowlButton = createButton("bowlen");
  bowlButton.position(700,105);
  bowlButton.size(100,30);
  bowlButton.mousePressed(bowlPressed);
  buttons.push(bowlButton);
}


function draw() {
  background(bGround[0]);
  //resize
  wellBeing[0].resize(60, 0);
  shopper[0].resize(30, 0);
  shopper[1].resize(30, 0);
  shopper[2].resize(40, 0);
  raccoon[0].resize(150, 0);
  raccoon[1].resize(150, 0);
  raccoon[2].resize(150,0);

  //bars
  heart();



  if (press == 0) {
    berrieButton.hide();
    dragonflyButton.hide();
    bandageButton.hide();
    invButton.show();
    shopButton.show();
    bowlButton.show()
  } else if (press == 1) {
    shop();
    berrieButton.show();
    dragonflyButton.show();
    bandageButton.show();
    invButton.hide();
    bowlButton.hide();
  } else if (press == 2) {
    inventory();
    shopButton.hide();
    bowlButton.hide();
  }else if (press == 3){
    bowl();
    shopButton.hide();
    invButton.hide();
  }

  //raccoon
  speed();
  racImage();
}

function speed(){
  if(raccoonWalkX >= 640 || raccoonWalkX <= 40){
    raccoonSpeed = raccoonSpeed * -1
  }
  raccoonWalkX = raccoonWalkX + raccoonSpeed
}


function racImage(){
  if(raccoonWalkX >= 640){
    raccoonImage = 1
  }
  if(raccoonWalkX <= 40){
    raccoonImage = 2
  }
  image(raccoon[raccoonImage], raccoonWalkX, 550);
}


function shoppressed() {
  press += 1
  if (press >= 2) {
    press = 0
  }
}

function shop() {
  fill("orange");
  rect(650, 40, 140, 130);
  fill("black");
  textSize(20);
  //berries
  image(shopper[0], 655, 45);
  text(": 2", 760, 70);
  //dragonfly
  image(shopper[1], 655, 90);
  text(": 5", 760, 110);
  //bandage
  image(shopper[2], 645, 125);
  text(": 4", 760, 150);
}

function berrie() {
  item += 1
}


function invPressed() {
  press += 2
  if (press >= 4) {
    press = 0
  }
}

function inventory() {
  fill("blue");
  rect(690, 90, 100, 130);
  fill("black");
  textSize(35);
  //berries
  image(shopper[0], 695, 95);
  text("0", 760, 120);
  //dragonfly
  image(shopper[1], 695, 140);
  text("0", 760, 160);
  //bandage
  image(shopper[2], 695, 170);
  text("0", 760, 200);
}

function bowlPressed(){
  press += 3
  if(press >= 6){
    press = 0
  }
}

function bowl(){
  fill("black");
  square(100,100,600);
}

function heart(){
  //console.log(health)
if (health <= 100 && health >= 87.5){
  image(wellBeing[0],1,1);
console.log("healt half")
}
else if(health <= 87.5 && health >= 75){
image(wellBeing[1],1,1);
console.log("healt half")
}
health = health - 10
}