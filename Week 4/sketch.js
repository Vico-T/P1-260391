//positie van het object
let posX = []
let posY = []
//grote van het object
let grote = []
let hoogte = []
//snelheid
let speed = []
//kleuren
let red = []
let green = []
let blue = []
let transparant = []
//geluid
let mySound;


async function setup() {
  createCanvas(800, 600);
  // mySound = await loadSound('sound.mp3')
}

function keyPressed() {
  if (keyCode == 8) {
    console.log("backspace")
    // mySound.play();
    posX = []
    posY = []
    grote = []
    hoogte = []
    for (let i = 0; i <= 300; i++) {
      
      //positie van het object
      posX.push(int(random(0, 800)));
      posY.push(int(random(0, 600)));
      
      //grote van het object
      grote.push(int(random(10, 100)));
      hoogte.push(int(random(10, 200)));
      
      //snelheid van het object
      speed.push(int(random(-10, -2)));
      console.log("speed " + speed)
      // speed.push(int(random(2,10)));
      
      //kleuren
      red.push(int(random(0, 255)));
      green.push(int(random(0, 255)));
      blue.push(int(random(0, 255)));
       transparant.push(int(random(20, 300)));
      
      // voor als ik de objecten alle kanten op heb weten te krijgen voor het trailen effect
       //  background(red[i],green[i],blue[i]);
    }
  }
}



function draw() {
  background("blue");
  for (let i = 0; i <= 130; i++) {
    //snelheid instellen
    posX[i] = posX[i] + speed[i]
    posY[i] = posY[i] + speed[i]

    //objecten
    fill(red[i], green[i], blue[i], transparant[i])
    circle(posX[i], posY[i], grote[i])
  }
  for (let i = 0; i <= 30; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    square(posX[i], posY[i], grote[i])
  }
  for (let i = 0; i <= 10; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    rect(posX[i], posY[i], grote[i], hoogte[i])
  }
  for (let i = 0; i <= 30; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    ellipse(posX[i], posY[i], grote[i], hoogte[i])


    //loopfunctie
    if (posX[i] >= 850) {
      posX[i] = -50
    } else if (posX[i] <= -50) {
      posX[i] = 850
    }
    if (posY[i] >= 650) {
      posY[i] = -50
    } else if (posY[i] <= -50) {
      posY[i] = 650
    }
  }
}
