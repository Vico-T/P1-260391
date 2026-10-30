let wellBeing = [];
let raccoonData = {
  health: 100,
  energy: 100,
  happines: 100,
  trek: 100,
  berries: 0,
  dragonflys: 0,
  bandages: 0,
  points: 0
}
let energyImage = [];
let gelukImage = [];
let hongerImage = [];
let raccoon = [];
let raccoonImage = 1;
let raccoonWalkX = 640;
let raccoonSpeed = 1;
let shopper = [];
let buttons = [];
let bGround = [];
let press = 0;
let showRaccoon = true;
let begining = 0;
//locatie
let locatie = 0;
let sleepingRaccoon = 0;
//minigame
let y = -40;
let screen = 0;
let x = 400;
let gameSpeed = 200;
let score = 0;

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
  shopper.push(loadImage('shop/berry.png'));
  shopper.push(loadImage('shop/dragonfly.png'));
  shopper.push(loadImage('shop/bandage.png'));
  //raccoon
  raccoon.push(loadImage('raccoon/wasbeer/happyRaccoon.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/walkingRaccoonLeft.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/walkingRaccoonRight.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/walkingRaccoonStinkyLeft.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/walkingRaccoonStinkyRight.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/deadRaccoon.gif'));
  raccoon.push(loadImage('raccoon/wasbeerInBad.gif'));
  raccoon.push(loadImage('raccoon/wasbeer/basketRaccoon.png'));
}

function setup() {

  raccoonData = getItem("raccoonData")
  if (raccoonData == null || raccoonData == "undefined") {
    raccoonData = {
      health: 100,
      energy: 100,
      happines: 100,
      trek: 100,
      berries: 0,
      dragonflys: 0,
      bandages: 0,
      points: 0
    }
  }
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

  //inventorybuttons
  invButton = createButton();
  invButton.position(400, 480);
  invButton.size(140, 140);
  invButton.style('opacity', '0')
  invButton.mousePressed(invPressed);
  buttons.push(invButton);

  //inventory use
  berrieUse = createButton();
  berrieUse.position(445, 495);
  berrieUse.size(60, 30);
  berrieUse.html("use");
  berrieUse.mousePressed(berrieHunger);
  buttons.push(berrieUse);

  dragonflyUse = createButton();
  dragonflyUse.position(445, 535);
  dragonflyUse.size(60, 30);
  dragonflyUse.html("use");
  dragonflyUse.mousePressed(dragonflyHunger);
  buttons.push(dragonflyUse);

  bandageUse = createButton();
  bandageUse.position(445, 585);
  bandageUse.size(60, 30);
  bandageUse.html("use");
  bandageUse.mousePressed(bandageHealth);
  buttons.push(bandageUse);

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

  buitenButten = createButton("buiten");
  buitenButten.position(670, 730);
  buitenButten.size(60, 60);
  buitenButten.mousePressed(buiten);
  buttons.push(buitenButten);

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

  //restart
  restartButton = createButton("RESTART");
  restartButton.position(380, 500);
  restartButton.size(100, 50);
  restartButton.mousePressed(restart);
  buttons.push(restartButton);

  //minigame
  startButton = createButton("START");
  startButton.position(380, 500);
  startButton.size(80, 30);
  startButton.mousePressed(progress);
}

function draw() {
  storeItem("raccoonData", raccoonData);
  background(bg)
  //resize
  shopper[0].resize(30, 0);
  shopper[1].resize(30, 0);
  shopper[2].resize(40, 0);
  raccoon[0].resize(150, 0);
  raccoon[1].resize(150, 0);
  raccoon[2].resize(150, 0);
  raccoon[3].resize(120, 0);
  raccoon[4].resize(120, 0);
  raccoon[5].resize(120, 0);

  //bars
  heart();
  bliksem();
  geluk();
  hunger();

  //minigame
  if (locatie == 3) {
    if (screen == 0) {
      startScreen();
    } else if (screen == 1) {
      gameStart();
    } else if (screen == 2) {
      endScreen();
    }
  }

  //points
  textSize(20);
  text("coins: " + raccoonData.points, 600, 30)

  //inventory en shop
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
  }

  //raccoon
  if (showRaccoon == true || sleepingRaccoon == 1) {
    speed();
    racImage();
  } else { }

  if (begining == 0) {
    rect(185, 275, 480, 140);
    text("Welcome\n If you press the orange couch you will sleep.\n If you press the bath you will go in bath.\n And if you press a drawer your inventory will open.\n Press home to start.", 200, 300);
  }

  console.log(press)
}

//backgrounds
function woonkamer() {
  locatie = 0
  bg = loadImage('background/livingRoom.png');
  homeButton.hide();
  keukenButton.show();
  toiletButton.show();
  badButton.hide();
  bedButton.show();
  invButton.hide();
  startButton.hide();
  buitenButten.show();
  sleepingRaccoon += 1
  begining += 1
  if (raccoonData.health <= 0) {
    restartButton.show();
  } else { restartButton.hide(); }
  press = 0
}

function keuken() {
  locatie = 1
  bg = loadImage('background/keuken.png');
  keukenButton.hide();
  homeButton.show();
  toiletButton.hide();
  buitenButten.hide();
  bedButton.hide();
  badButton.hide();
  invButton.show();
}

function toilet() {
  locatie = 2
  if (locatie == 2) {
    bg = loadImage('background/bathroom.png');
    toiletButton.hide();
    homeButton.show();
    keukenButton.hide();
    bedButton.hide();
    badButton.show();
    buitenButten.hide();
    showRaccoon = true;
  }
}

function buiten() {
  locatie = 3
  bg = loadImage('background/buiten.jpg');
  bedButton.hide();
  keukenButton.hide();
  toiletButton.hide();
  badButton.hide();
  buitenButten.hide();
  homeButton.show();
  startButton.show();
}

function sleeping() {
  bg = loadImage('background/sleeping.png');
  toiletButton.hide();
  homeButton.show();
  keukenButton.hide();
  buitenButten.hide();
  sleepingRaccoon += 1
}

function inBad() {
  toiletButton.show();
  homeButton.hide();
  buitenButten.hide();
  shopButton.hide();
  invButton.hide();
  bg = loadImage('raccoon/wasbeerInBad.gif');
  showRaccoon = false;
  if (raccoonData.happines <= 99 && raccoonData.health <= 99);
  raccoonData.happines = raccoonData.happines += 0.1
  raccoonData.health = raccoonData.health += 0.5
}

//raccoon
function speed() {
  if (raccoonData.health >= 1) {
    if (raccoonWalkX >= 640 || raccoonWalkX <= 40) {
      raccoonSpeed = raccoonSpeed * -1
    }
    raccoonWalkX = raccoonWalkX + raccoonSpeed
  }
  else { raccoonSpeed = 0 }
}

function racImage() {
  if (raccoonData.health >= 1) {
    if (raccoonWalkX >= 640) {
      raccoonImage = 1
    }
    if (raccoonWalkX <= 40) {
      raccoonImage = 2
    }
    image(raccoon[raccoonImage], raccoonWalkX, 590);
  } else if (raccoonData.health <= 1) {
    image(raccoon[5], raccoonWalkX, 610);
    death();
    // raccoonSpeed = 0
  }
}

//shop
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

//items
function berrie() {
  if (raccoonData.points >= 2) {
    raccoonData.berries += 1
    raccoonData.points -= 2
  }
}

function berrieHunger() {
  if (raccoonData.berries > 0 && raccoonData.health > 0) {
    raccoonData.berries -= 1
    raccoonData.energy += 10
    raccoonData.trek += 18
    raccoonData.happines += 5
  } else { raccoonData.berries == 0 };

}

function dragonfly() {
  if (raccoonData.points >= 5) {
    raccoonData.dragonflys += 1
    raccoonData.points -= 5
  }
}

function dragonflyHunger() {
  if (raccoonData.dragonflys > 0 && raccoonData.health > 0) {
    raccoonData.dragonflys -= 1
    raccoonData.energy += 20
    raccoonData.trek += 26
    raccoonData.happines += 10
  } else {
    raccoonData.dragonflys == 0
  }
}

function bandage() {
  if (raccoonData.points >= 4) {
    raccoonData.bandages += 1
    raccoonData.points -= 4
  }
}

function bandageHealth() {
  if (raccoonData.bandages > 0 && raccoonData.health > 0) {
    raccoonData.bandages -= 1
    raccoonData.health += 15
  }
  else {
    raccoonData.bandages += 0;
  }
}

//inventory
function invPressed() {
  press += 2
  if (press >= 4) {
    press = 0
  }
}

function inventory() {
  fill("brown");
  rect(395, 480, 140, 140);
  fill("black");
  textSize(35);
  //berries
  image(shopper[0], 400, 485);
  text(raccoonData.berries, 510, 510);
  //dragonfly
  image(shopper[1], 400, 530);
  text(raccoonData.dragonflys, 510, 555);
  //bandage
  image(shopper[2], 395, 575);
  text(raccoonData.bandages, 510, 600);
}

//bars
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

  if (raccoonData.health >= 86) {
    image(wellBeing[0], 1, 1);
  } else if (raccoonData.health <= 86 && raccoonData.health >= 72) {
    image(wellBeing[1], 1, 1);
  } else if (raccoonData.health <= 72 && raccoonData.health >= 58) {
    image(wellBeing[2], 1, 1);
  } else if (raccoonData.health <= 58 && raccoonData.health >= 44) {
    image(wellBeing[3], 1, 1);
  } else if (raccoonData.health <= 44 && raccoonData.health >= 30) {
    image(wellBeing[4], 1, 1);
  } else if (raccoonData.health <= 30 && raccoonData.health >= 16) {
    image(wellBeing[5], 1, 1);
  } else if (raccoonData.health <= 16 && raccoonData.health >= 1) {
    image(wellBeing[6], 1, 1);
  } else if (raccoonData.health <= 1) {
    image(wellBeing[7], 1, 1);
  }
  if (showRaccoon === true && sleepingRaccoon == 0) {
    if (raccoonData.health > 0 && raccoonData.trek > 0) {
      raccoonData.health = raccoonData.health - 0.01
    } else if (raccoonData.health > 0 && raccoonData.trek <= 0) {
      raccoonData.health = raccoonData.health - 0.05
    }
  } else if (showRaccoon == false) {
    raccoonData.health = raccoonData.health + 2
  }
  else if (raccoonData.health == 0) {
    raccoonData.health = 0
    begin += 1
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


  if (raccoonData.energy >= 90) {
    image(energyImage[0], 1, 70);
  }
  else if (raccoonData.energy <= 90 && raccoonData.energy >= 80) {
    image(energyImage[1], 1, 70);
  } else if (raccoonData.energy <= 80 && raccoonData.energy >= 70) {
    image(energyImage[2], 1, 70);
  } else if (raccoonData.energy <= 70 && raccoonData.energy >= 60) {
    image(energyImage[3], 1, 70);
  } else if (raccoonData.energy <= 60 && raccoonData.energy >= 50) {
    image(energyImage[4], 1, 70);
  } else if (raccoonData.energy <= 50 && raccoonData.energy >= 40) {
    image(energyImage[5], 1, 70);
  } else if (raccoonData.energy <= 40 && raccoonData.energy >= 30) {
    image(energyImage[6], 1, 70);
  } else if (raccoonData.energy <= 30 && raccoonData.energy >= 20) {
    image(energyImage[7], 1, 70);
  } else if (raccoonData.energy <= 20 && raccoonData.energy >= 10) {
    image(energyImage[8], 1, 70);
  } else if (raccoonData.energy <= 10 && raccoonData.energy > 1) {
    image(energyImage[9], 1, 70);
  } else if (raccoonData.energy <= 1) {
    image(energyImage[10], 1, 70);
  }
  if (raccoonData.energy > 0 && showRaccoon == true && sleepingRaccoon == 0) {
    raccoonData.energy = raccoonData.energy - 0.03
  } else if (showRaccoon == false) {
    raccoonData.health = raccoonData.health - 0
  } else if (raccoonData.energy <= 0) {
    raccoonData.energy = 0
  } else if (sleepingRaccoon == 1) {
    raccoonData.energy = raccoonData.energy + 2
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

  if (raccoonData.happines >= 89) {
    image(gelukImage[0], 1, 150);
  } else if (raccoonData.happines <= 89 && raccoonData.happines >= 78) {
    image(gelukImage[1], 1, 150);
  } else if (raccoonData.happines <= 78 && raccoonData.happines >= 57) {
    image(gelukImage[2], 1, 150);
  } else if (raccoonData.happines <= 57 && raccoonData.happines >= 46) {
    image(gelukImage[3], 1, 150);
  } else if (raccoonData.happines <= 46 && raccoonData.happines >= 35) {
    image(gelukImage[4], 1, 150);
  } else if (raccoonData.happines <= 35 && raccoonData.happines >= 14) {
    image(gelukImage[5], 1, 150);
  } else if (raccoonData.happines <= 14 && raccoonData.happines >= 3) {
    image(gelukImage[6], 1, 150);
  } else if (raccoonData.happines <= 3 && raccoonData.happines >= 1) {
    image(gelukImage[7], 1, 150);
  } else if (raccoonData.happines <= 1) {
    image(gelukImage[8], 1, 150);
  }
  if (raccoonData.happines > 0 && showRaccoon == true) {
    raccoonData.happines = raccoonData.happines - 0.04
  } else if (raccoonData.happines == 0) {
    raccoonData.happines = 0
  } else if (showRaccoon == false) {
    raccoonData.happines = raccoonData.happines + 0.08
  } else if (sleepingRaccoon == 1) {
    raccoonData.happines = raccoonData.happines + 0.9
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


  if (raccoonData.trek >= 90) {
    image(hongerImage[0], 1, 220);
  } else if (raccoonData.trek <= 90 && raccoonData.trek >= 80) {
    image(hongerImage[1], 1, 220);
  } else if (raccoonData.trek <= 80 && raccoonData.trek >= 70) {
    image(hongerImage[2], 1, 220);
  } else if (raccoonData.trek <= 70 && raccoonData.trek >= 60) {
    image(hongerImage[3], 1, 220);
  } else if (raccoonData.trek <= 60 && raccoonData.trek >= 50) {
    image(hongerImage[4], 1, 220);
  } else if (raccoonData.trek <= 50 && raccoonData.trek >= 40) {
    image(hongerImage[5], 1, 220);
  } else if (raccoonData.trek <= 40 && raccoonData.trek >= 30) {
    image(hongerImage[5], 1, 220);
  } else if (raccoonData.trek <= 30 && raccoonData.trek >= 20) {
    image(hongerImage[6], 1, 220);
  } else if (raccoonData.trek <= 20 && raccoonData.trek >= 1) {
    image(hongerImage[7], 1, 220);
  } else if (raccoonData.trek <= 1) {
    image(hongerImage[8], 1, 220);
  }

  if (raccoonData.trek > 0 && showRaccoon == true) {
    raccoonData.trek = raccoonData.trek - 0.02
  } else if (showRaccoon == false) {
    raccoonData.health = raccoonData.health - 0
  } else if (raccoonData.trek == 0) {
    raccoonData.trek = 0
  }
}

//minigame
function startScreen() {
  textSize(20);
  text('catch as much fruit as possible', 300, 400);
  reset();
}

function gameStart() {
  raccoon[7].resize(100, 0);
  fill('blue');
  rect(377, 6, 130, 32);
  fill('black');
  textSize(30);
  text('score ' + score, 380, 30);
  image(shopper[0], x, y);

  image(raccoon[7], mouseX, height - 85);
  y = y + gameSpeed
  if (y > height) {
    minigameDeath();
  }
  if (y > height - 85 && x > mouseX - 42 && x < mouseX + 75) {
    y = -20
    gameSpeed += .5
    score += 1
  }
  if (y == -20) {
    pickRandom();
  }
}

function minigameDeath() {
  raccoonData.happines += 30;
  raccoonData.energy -= 5;
  raccoonData.trek -= 10;
  screen = 2
  if (score >= 1 && score <= 5) {
    raccoonData.points += 1
  } else if (score >= 6 && score <= 10) {
    raccoonData.points += 2
  } else if (score >= 11 && score <= 15) {
    raccoonData.points += 3
  } else if (score >= 16 && score <= 19) {
    raccoonData.points += 4
  } else if (score >= 20) {
    raccoonData.points += 5
  }
}

function pickRandom() {
  x = random(20, width - 20);
}

function endScreen() {
  text('GAME OVER', 350, 350);
  text('SCORE = ' + score, 360, 400);
  homeButton.show();
  startButton.show();


}

function progress() {
  if (screen == 0) {
    screen += 1
    startButton.hide();
    homeButton.hide();
  } else if (screen == 2) {
    screen = 0
  }
}

function reset() {
  score = 0;
  gameSpeed = 20
  y = -20
}

//death
function restart() {
  raccoonData.health = 100,
    raccoonData.energy = 100,
    raccoonData.happines = 100,
    raccoonData.trek = 100,
    raccoonData.berries = 0,
    raccoonData.dragonflys = 0,
    raccoonData.bandages = 0,
    raccoonData.points = 0
  raccoonSpeed = 1
  restartButton.hide();
}

function death() {
  restartButton.show();
}
