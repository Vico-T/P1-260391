let kleuren = ["green", "blue", "orange", "red", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda",
  "parrot", "penguin", "pig", "rabbit", "snake"];
let afbeeldingen = [];
let nuAchter = "white";
let achtergrond = [aGreen, aBlue, aOrange, aRed, aPurple, aYellow];
let buttons = [];




function preload() {
  afbeeldingen.push(loadImage('assets/elephant.png'));
  afbeeldingen.push(loadImage('assets/giraffe.png'));
  afbeeldingen.push(loadImage('assets/hippo.png'));
  afbeeldingen.push(loadImage('assets/monkey.png'));
  afbeeldingen.push(loadImage('assets/panda.png'));
  afbeeldingen.push(loadImage('assets/parrot.png'));
  afbeeldingen.push(loadImage('assets/penguin.png'));
  afbeeldingen.push(loadImage('assets/pig.png'));
  afbeeldingen.push(loadImage('assets/rabbit.png'));
  afbeeldingen.push(loadImage('assets/snake.png'));
}



function setup() {
  createCanvas(800, 400);
  let buttonx = 20;

  for (let i = 0; i < bestanden.length; i++) {
    let button = createButton(bestanden[i]);
    button.mousePressed(bestanden[i]);
  }


  for (let i = 0; i < kleuren.length; i++) {
    let button = createButton(kleuren[i]);
    button.position(buttonx, 100)
    buttonx += 100
    button.style('background-color', kleuren[i]);
    button.mousePressed(achtergrond[i])
    buttons.push(button);
  }

}



function aGreen() {
  nuAchter = "green";

}

function aBlue() {
  nuAchter = "blue";
}

function aOrange() {
  nuAchter = "orange";
}

function aRed() {
  nuAchter = "red";
}

function aPurple() {
  nuAchter = "purple";
}

function aYellow() {
  nuAchter = "yellow";
}

function draw() {
  background(nuAchter);
  for (let i = 0; i < buttons.length; i++) {
    if (nuAchter == kleuren[i]) {
      buttons[i].hide();
    } else {
      buttons[i].show();
    }
  }

  for (let i = 0; i < afbeeldingen.length; i++) {
    image(afbeeldingen[i], 400, 0)
  }
}
