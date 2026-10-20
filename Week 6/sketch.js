let wellBeing = [];
let health = 100;
let energyImage = [];
let energy = 100;
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
  //heart
  wellBeing.push(loadImage('heart/heartFull.png'));
  wellBeing.push(loadImage('heart/heart-1.png'));
  wellBeing.push(loadImage('heart/heart-2.png'));
  wellBeing.push(loadImage('heart/heart-3.png'));
  wellBeing.push(loadImage('heart/heart-5.png'));
  wellBeing.push(loadImage('heart/heart-6.png'));
  wellBeing.push(loadImage('heart/heart-7.png'));
  wellBeing.push(loadImage('heart/heartEmpty.png'));
  //bliksem
  energyImage.push(loadImage('energy/bliksemFull.png'));
  energyImage.push(loadImage('energy/bliksem-1.png'));
  // energyImage.push(loadImage('energy/bliksem-2.png'));
  energyImage.push(loadImage('energy/bliksem-3.png'));
  // energyImage.push(loadImage('energy/bliksem-4.png'));
  energyImage.push(loadImage('energy/bliksem-5.png'));
  // energyImage.push(loadImage('energy/bliksem-6.png'));
  energyImage.push(loadImage('energy/bliksem-7.png'));
  // energyImage.push(loadImage('energy/bliksem-8.png'));
  energyImage.push(loadImage('energy/bliksem-9.png'));
  // energyImage.push(loadImage('energy/bliksem-10.png'));
  energyImage.push(loadImage('energy/bliksem-11.png'));
  // energyImage.push(loadImage('energy/bliksem-12.png'));
  energyImage.push(loadImage('energy/bliksem-13.png'));
  // energyImage.push(loadImage('energy/bliksem-14.png'));
  energyImage.push(loadImage('energy/bliksem-15.png'));
  // energyImage.push(loadImage('energy/bliksem-16.png'));
  energyImage.push(loadImage('energy/bliksem-17.png'));
  // energyImage.push(loadImage('energy/bliksem-18.png'));
  energyImage.push(loadImage('energy/bliksemEmpty.png'));
  
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
  bowlButton.position(700, 105);
  bowlButton.size(100, 30);
  bowlButton.mousePressed(bowlPressed);
  buttons.push(bowlButton);
}


function draw() {
  background(bGround[0]);
  //resize
  shopper[0].resize(30, 0);
  shopper[1].resize(30, 0);
  shopper[2].resize(40, 0);
  raccoon[0].resize(150, 0);
  raccoon[1].resize(150, 0);
  raccoon[2].resize(150, 0);

  //bars
  heart();
  bliksem();



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
  } else if (press == 3) {
    bowl();
    shopButton.hide();
    invButton.hide();
  }

  //raccoon
  speed();
  racImage();
}

function speed() {
  if (raccoonWalkX >= 640 || raccoonWalkX <= 40) {
    raccoonSpeed = raccoonSpeed * -1
  }
  raccoonWalkX = raccoonWalkX + raccoonSpeed
}


function racImage() {
  if (raccoonWalkX >= 640) {
    raccoonImage = 1
  }
  if (raccoonWalkX <= 40) {
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

function bowlPressed() {
  press += 3
  if (press >= 6) {
    press = 0
  }
}

function bowl() {
  fill("black");
  square(100, 100, 600);
}

function heart() {
  //resize
  wellBeing[0].resize(60, 0);
  wellBeing[1].resize(60, 0);
  wellBeing[2].resize(60, 0);
  wellBeing[3].resize(60, 0);
  wellBeing[4].resize(60, 0);
  wellBeing[5].resize(60, 0);
  wellBeing[6].resize(60, 0);
  wellBeing[7].resize(60, 0);
  // wellBeing[8].resize(60, 0);

  if (health <= 100 && health >= 87.5) {
    image(wellBeing[0], 1, 1);
  } 
  else if (health <= 87.5 && health >= 75) {
    image(wellBeing[1], 1, 1);
  } else if (health <= 75 && health >= 62.5) {
    image(wellBeing[2], 1, 1);
  } else if (health <= 62.5 && health >= 50) {
    image(wellBeing[3], 1, 1);
  } else if (health <= 50 && health >= 37.5) {
    image(wellBeing[4], 1, 1);
  } else if (health <= 37.5 && health >= 25) {
    image(wellBeing[5], 1, 1);
  } else if (health <= 25 && health >= 12.5) {
    image(wellBeing[6], 1, 1);
  } else if (health <= 12.5 && health >= -1) {
    image(wellBeing[7], 1, 1);
  } else if (health = 0) {
    image(wellBeing[8], 1, 1);
  }
  if(health >= 0){
  health = health - 0.01
  }else if(health = 0){
    health = 0
  }
}


function bliksem(){
  //resize
  energyImage[0].resize(60,0);
  //   energyImage[1].resize(60,0);
  // energyImage[2].resize(60,0);
  // energyImage[3].resize(60,0);
  // energyImage[4].resize(60,0);
  // energyImage[5].resize(60,0);
  // energyImage[6].resize(60,0);
  // energyImage[7].resize(60,0);
  // energyImage[8].resize(60,0);
  // energyImage[9].resize(60,0);
  // energyImage[10].resize(60,0);
  // energyImage[11].resize(60,0);
  // energyImage[12].resize(60,0);
  // energyImage[13].resize(60,0);
  // energyImage[14].resize(60,0);
  // energyImage[15].resize(60,0);
  // energyImage[16].resize(60,0);
  // energyImage[17].resize(60,0);
  // energyImage[18].resize(60,0);

if(energy <= 100 && energy >= 90.909090909090909090909090909091){
  image(energyImage[0],1,70);
}
// else if(energy <= 90.909090909090909090909090909091 && energy >= 81.818181818181818181818181818182){
//   image(energyImage[1],1,70);
// }else if(energy <= 81.818181818181818181818181818182 && energy >= 72.727272727272727272727272727273){
//   image(energyImage[2],1,70);
// }else if(energy <= 72.727272727272727272727272727273 && energy >= 63.636363636363636363636363636364){
//   image(energyImage[3],1,70);
// }else if(energy <= 63.636363636363636363636363636364 && energy >= 54.545454545454545454545454545455){
//   image(energyImage[4],1,70);
// }else if(energy <= 54.545454545454545454545454545455 && energy >= 45.454545454545454545454545454545){
//   image(energyImage[3],1,70);
// }else if(energy <= 45.454545454545454545454545454545 && energy >= 36.363636363636363636363636363636){
//   image(energyImage[4],1,70);
// }else if(energy <= 36.363636363636363636363636363636 && energy >= 27.272727272727272727272727272727){
//   image(energyImage[5],1,70);
// }else if(energy <= 27.272727272727272727272727272727 && energy >= 18.181818181818181818181818181818){
//   image(energyImage[6],1,70);
// }else if(energy <= 18.181818181818181818181818181818 && energy >= 9.090909090909090909090909090909){
//   image(energyImage[7],1,70);
// }else if(energy <= 9.090909090909090909090909090909 && energy >= 9.090909090909090909090909090909){
//   image(energyImage[8],1,70);
// }else if(energy <= 39.5 && energy >= 34){
//   image(energyImage[9],1,70);
// }else if(energy <= 34 && energy >= 28.5){
//   image(energyImage[10],1,70);
// }else if(energy <= 28.5 && energy >= 23){
//   image(energyImage[11],1,70);
// }
// else if(energy <= 23 && energy >= 17.5){
//   image(energyImage[12],1,70);
// }else if(energy <= 17.5 && energy >= 12){
//   image(energyImage[13],1,70);
// }else if(energy <= 12 && energy >= 6.5){
//   image(energyImage[14],1,70);
// }else if(energy <= 6.5 && energy >= 0){
//   image(energyImage[15],1,70);
//}
}