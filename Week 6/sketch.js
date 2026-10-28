let wellBeing = [];
let health = 100;
let energyImage = [];
let energy = 100;
let gelukImage = [];
let happines = 100;
let hongerImage = [];
let trek = 100;
let raccoon = [];
let raccoonImage = 1;
let raccoonWalkX = 640;
let raccoonSpeed = 1;
let shopper = [];
let buttons = [];
let bGround = [];
let berries = 0
let dragonflys = 0
let bandages = 0
let press = 0;
let item = 0;
let showRaccoon = true

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
  energyImage.push(loadImage('energy/bliksem-3.png'));
  energyImage.push(loadImage('energy/bliksem-5.png'));
  energyImage.push(loadImage('energy/bliksem-7.png'));
  energyImage.push(loadImage('energy/bliksem-9.png'));
  energyImage.push(loadImage('energy/bliksem-11.png'));
  energyImage.push(loadImage('energy/bliksem-13.png'));
  energyImage.push(loadImage('energy/bliksem-15.png'));
  energyImage.push(loadImage('energy/bliksem-17.png'));
  energyImage.push(loadImage('energy/bliksemEmpty.png'));
  //geluk
  gelukImage.push(loadImage('geluk/gelukFull.png'));
  gelukImage.push(loadImage('geluk/geluk-1.png'));
  gelukImage.push(loadImage('geluk/geluk-2.png'));
  gelukImage.push(loadImage('geluk/geluk-3.png'));
  gelukImage.push(loadImage('geluk/geluk-4.png'));
  gelukImage.push(loadImage('geluk/geluk-5.png'));
  gelukImage.push(loadImage('geluk/geluk-6.png'));
  gelukImage.push(loadImage('geluk/geluk-7.png'));
  gelukImage.push(loadImage('geluk/gelukEmpty.png'));
  //honger
  hongerImage.push(loadImage('hunger/hungerFull.png'));
  hongerImage.push(loadImage('hunger/hunger-1.png'));
  hongerImage.push(loadImage('hunger/hunger-2.png'));
  hongerImage.push(loadImage('hunger/hunger-3.png'));
  hongerImage.push(loadImage('hunger/hunger-4.png'));
  hongerImage.push(loadImage('hunger/hunger-5.png'));
  hongerImage.push(loadImage('hunger/hunger-6.png'));
  hongerImage.push(loadImage('hunger/hunger-7.png'));
  hongerImage.push(loadImage('hunger/hungerEmpty.png'));



  bg = loadImage('background/livingRoom.png');
  bGround.push(loadImage('background/livingRoom.png'));
  bGround.push(loadImage('background/keuken.png'));
  bGround.push(loadImage('background/bathroom.png'));
  bGround.push(loadImage('background/bed.png'));
  shopper.push(loadImage('shop/berry.png'));
  shopper.push(loadImage('shop/dragonfly.png'));
  shopper.push(loadImage('shop/bandage.png'));
  raccoon.push(loadImage('raccoon/wasbeer/happyRaccoon.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/walkingRaccoonLeft.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/walkingRaccoonRight.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/deadRaccoon.gif'));
  raccoon.push(loadImage('raccoon/wasbeerInBad.gif'));
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
  berrieButton.mousePressed(berrie);
  buttons.push(berrieButton);

  dragonflyButton = createButton("dragonfly");
  dragonflyButton.position(695, 100);
  dragonflyButton.size(70, 20);
  dragonflyButton.mousePressed(dragonfly);
  buttons.push(dragonflyButton);

  bandageButton = createButton("bandage");
  bandageButton.position(695, 140);
  bandageButton.size(70, 20);
  bandageButton.mousePressed(bandage);
  buttons.push(bandageButton);

  //inventorybuttons
  invButton = createButton("inventorie");
  invButton.position(700, 60);
  invButton.size(100, 30);
  invButton.mousePressed(invPressed);
  buttons.push(invButton);

  //inventory use
  berrieUse = createButton();
  berrieUse.position(735, 110);
  berrieUse.size(30, 20);
  berrieUse.html("use");
  berrieUse.mousePressed(berrieHunger);
  buttons.push(berrieUse);

  dragonflyUse = createButton();
  dragonflyUse.position(735, 140);
  dragonflyUse.size(30, 20);
  dragonflyUse.html("use");
  dragonflyUse.mousePressed(dragonflyHunger);
  buttons.push(dragonflyUse);

  bandageUse = createButton();
  bandageUse.position(735, 180);
  bandageUse.size(30, 20);
  bandageUse.html("use");
  bandageUse.mousePressed(bandageHealth);
  buttons.push(bandageUse);


  //background
  homeButton = createButton("home");
  homeButton.position(380, 730);
  homeButton.size(60, 60);
  homeButton.mousePressed(woonkamer);
  buttons.push(homeButton);

  keukenButton = createButton("k\ni\nt\nc\nh\ne\nn\n");
  keukenButton.position(20, 400);
  keukenButton.size(60, 60);
  keukenButton.mousePressed(keuken);
  buttons.push(keukenButton)

  toiletButton = createButton("b\na\nt\nh\nr\no\no\nm\n")
  toiletButton.position(730, 400);
  toiletButton.size(60, 60);
  toiletButton.mousePressed(toilet);
  buttons.push(toiletButton)

  badButton = createButton();
  badButton.position(480, 650);
  badButton.size(200, 100);
  badButton.mousePressed(inBad);
  badButton.style('opacity', '0');
  buttons.push(badButton);

  bedButton = createButton();
  bedButton.position(600, 480);
  bedButton.size(100, 100);
  bedButton.style('opacity', '0');
  bedButton.mousePressed(sleeping);
  buttons.push(bedButton);

  let raccoonLeft = createImg ('raccoon/wasbeer/walkingRaccoonLeft') 
  raccoon.push(raccoonLeft)
  // raccoon.push(createImg('raccoon/wasbeer/walkingRaccoonLeft.gif'));
  // raccoon.push(createImg('raccoon/wasbeer/walkingRaccoonRight.gif'));
  
}


function draw() {
  background(bg)
  //resize
  shopper[0].resize(30, 0);
  shopper[1].resize(30, 0);
  shopper[2].resize(40, 0);
  raccoon[0].resize(150, 0);
  raccoon[1].resize(150, 0);
  // raccoon[2].resize(150, 0);
  // raccoon[3].resize(120, 0);

  //bars
  heart();
  bliksem();
  geluk();
  hunger();




  if (press == 0) {
    berrieButton.hide();
    berrieUse.hide()
    dragonflyButton.hide();
    dragonflyUse.hide();
    bandageButton.hide();
    bandageUse.hide();
    invButton.show();
    shopButton.show();
  } else if (press == 1) {
    shop();
    berrieButton.show();
    dragonflyButton.show();
    bandageButton.show();
    invButton.hide();
  } else if (press == 2) {
    inventory();
    shopButton.hide();
    berrieUse.show();
    dragonflyUse.show();
    bandageUse.show();
  } else if (press == 3) {
    shopButton.hide();
    invButton.hide();
  }


  //raccoon
  speed();
  if(showRaccoon == true){
    console.log("hallo")
  racImage();
  } else{}
  console.log(showRaccoon)
}

function keuken() {
  bg = loadImage('background/keuken.png');
  keukenButton.hide();
  homeButton.show();
  toiletButton.hide();
  bedButton.hide();
  badButton.hide();
}

function woonkamer() {
  bg = loadImage('background/livingRoom.png');
  homeButton.hide();
  keukenButton.show();
  toiletButton.show();
  badButton.hide();
  bedButton.show();

}


function sleeping() {
  bg = loadImage('background/bed.png');
  toiletButton.hide();
  homeButton.show();
  keukenButton.hide();
  // shopButton.hide();
  // invButton.hide();
}

function toilet() {
  bg = loadImage('background/bathroom.png');
  toiletButton.hide();
  homeButton.show();
  keukenButton.hide();
  bedButton.hide();
  badButton.show();
  showRaccoon = true;
}

function inBad() {
  toiletButton.show();
  homeButton.hide();
  shopButton.hide();
  invButton.hide();
  bg = loadImage('raccoon/wasbeerInBad.gif');
  showRaccoon = false;
}


function speed() {
  if (raccoonWalkX >= 640 || raccoonWalkX <= 40) {
    raccoonSpeed = raccoonSpeed * -1
  }
  raccoonWalkX = raccoonWalkX + raccoonSpeed
}


function racImage() {
    if (health >= 1) {
      if (raccoonWalkX >= 640) {
        raccoonImage = 1
      }
      if (raccoonWalkX <= 40) {
        raccoonImage = 2
      }
      // image(raccoon[raccoonImage], raccoonWalkX, 590);
      raccoon[raccoonImage].position(raccoonWalkX, 590);
    } else if (health <= 0) {
      image(raccoon[3], raccoonWalkX, 610);
      raccoonSpeed = 0
    }
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
  berries += 1
}

function berrieHunger() {
  if (berries > 0 && health > 0) {
    berries -= 1
    energy += 10
    trek += 18
    happines += 5
  } else { berries == 0 };

}

function dragonfly() {
  dragonflys += 1
}

function dragonflyHunger() {
  if (dragonflys > 0 && health > 0) {
    dragonflys -= 1
    energy += 20
    trek += 26
    happines += 10
  } else {
    dragonflys == 0
  }
}

function bandage() {
  bandages += 1
}

function bandageHealth() {
  if (bandages > 0 && health > 0) {
    bandages -= 1
    health += 15
  }
  else {
    bandages += 0;
  }
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
  text(berries, 760, 120);
  //dragonfly
  image(shopper[1], 695, 140);
  text(dragonflys, 760, 160);
  //bandage
  image(shopper[2], 685, 170);
  text(bandages, 760, 200);
}


function heart() {
  console.log(health)
  //resize
  wellBeing[0].resize(60, 0);
  wellBeing[1].resize(60, 0);
  wellBeing[2].resize(60, 0);
  wellBeing[3].resize(60, 0);
  wellBeing[4].resize(60, 0);
  wellBeing[5].resize(60, 0);
  wellBeing[6].resize(60, 0);
  wellBeing[7].resize(60, 0);

  if (health >= 86) {
    image(wellBeing[0], 1, 1);
  } else if (health <= 86 && health >= 72) {
    image(wellBeing[1], 1, 1);
  } else if (health <= 72 && health >= 58) {
    image(wellBeing[2], 1, 1);
  } else if (health <= 58 && health >= 44) {
    image(wellBeing[3], 1, 1);
  } else if (health <= 44 && health >= 30) {
    image(wellBeing[4], 1, 1);
  } else if (health <= 30 && health >= 16) {
    image(wellBeing[5], 1, 1);
  } else if (health <= 16 && health >= 1) {
    image(wellBeing[6], 1, 1);
  } else if (health <= 0) {
    image(wellBeing[7], 1, 1);
  }
  if (health > 0 && trek > 0) {
    health = health - 0.01
  } else if (health > 0 && trek <= 0) {
    health = health - 0.05
  }
  else if (health == 0) {
    health = 0
  }
}


function bliksem() {
  //resize
  energyImage[0].resize(60, 0);
  energyImage[1].resize(60, 0);
  energyImage[2].resize(60, 0);
  energyImage[3].resize(60, 0);
  energyImage[4].resize(60, 0);
  energyImage[5].resize(60, 0);
  energyImage[6].resize(60, 0);
  energyImage[7].resize(60, 0);
  energyImage[8].resize(60, 0);
  energyImage[9].resize(60, 0);
  energyImage[10].resize(60, 0);


  if (energy >= 90) {
    image(energyImage[0], 1, 70);
  }
  else if (energy <= 90 && energy >= 80) {
    image(energyImage[1], 1, 70);
  } else if (energy <= 80 && energy >= 70) {
    image(energyImage[2], 1, 70);
  } else if (energy <= 70 && energy >= 60) {
    image(energyImage[3], 1, 70);
  } else if (energy <= 60 && energy >= 50) {
    image(energyImage[4], 1, 70);
  } else if (energy <= 50 && energy >= 40) {
    image(energyImage[5], 1, 70);
  } else if (energy <= 40 && energy >= 30) {
    image(energyImage[6], 1, 70);
  } else if (energy <= 30 && energy >= 20) {
    image(energyImage[7], 1, 70);
  } else if (energy <= 20 && energy >= 10) {
    image(energyImage[8], 1, 70);
  } else if (energy <= 10 && energy >= 1) {
    image(energyImage[9], 1, 70);
  } else if (energy <= 1) {
    image(energyImage[10], 1, 70);
  }
  if (energy > 0) {
    energy = energy - 0.04
  } else {
    energy = 0
  }
}

function geluk() {
  //resize
  gelukImage[0].resize(70, 0);
  gelukImage[1].resize(70, 0);
  gelukImage[2].resize(70, 0);
  gelukImage[3].resize(70, 0);
  gelukImage[4].resize(70, 0);
  gelukImage[5].resize(70, 0);
  gelukImage[6].resize(70, 0);
  gelukImage[7].resize(70, 0);
  gelukImage[8].resize(70, 0);




  if (happines >= 89) {
    image(gelukImage[0], 1, 150);
  } else if (happines <= 89 && happines >= 78) {
    image(gelukImage[1], 1, 150);
  } else if (happines <= 78 && happines >= 57) {
    image(gelukImage[2], 1, 150);
  } else if (happines <= 57 && happines >= 46) {
    image(gelukImage[3], 1, 150);
  } else if (happines <= 46 && happines >= 35) {
    image(gelukImage[4], 1, 150);
  } else if (happines <= 35 && happines >= 14) {
    image(gelukImage[5], 1, 150);
  } else if (happines <= 14 && happines >= 3) {
    image(gelukImage[6], 1, 150);
  } else if (happines <= 3 && happines >= 1) {
    image(gelukImage[7], 1, 150);
  } else if (happines <= 0) {
    image(gelukImage[8], 1, 150);
  }
  if (happines > 0) {
    happines = happines - 0.06
  } else if (happines == 0) {
    happines = 0
  }
}

function hunger() {
  //resize
  hongerImage[0].resize(70, 0);
  hongerImage[1].resize(70, 0);
  hongerImage[2].resize(70, 0);
  hongerImage[3].resize(70, 0);
  hongerImage[4].resize(70, 0);
  hongerImage[5].resize(70, 0);
  hongerImage[6].resize(70, 0);
  hongerImage[7].resize(70, 0);
  hongerImage[8].resize(70, 0);


  if (trek >= 90) {
    image(hongerImage[0], 1, 220);
  } else if (trek <= 90 && trek >= 80) {
    image(hongerImage[1], 1, 220);
  } else if (trek <= 80 && trek >= 70) {
    image(hongerImage[2], 1, 220);
  } else if (trek <= 70 && trek >= 60) {
    image(hongerImage[3], 1, 220);
  } else if (trek <= 60 && trek >= 50) {
    image(hongerImage[4], 1, 220);
  } else if (trek <= 50 && trek >= 40) {
    image(hongerImage[5], 1, 220);
  } else if (trek <= 40 && trek >= 30) {
    image(hongerImage[5], 1, 220);
  } else if (trek <= 30 && trek >= 20) {
    image(hongerImage[6], 1, 220);
  } else if (trek <= 20 && trek >= 1) {
    image(hongerImage[7], 1, 220);
  } else if (trek <= 0) {
    image(hongerImage[8], 1, 220);
  }

  if (trek > 0) {
    trek = trek - 0.03
  } else if (trek == 0) {
    trek = 0
  }
}