let b = 'x';
let x = 30;
let teller = 0;
let licht = 55;
let color = 'red'
let colorgreen = 'green'
let colororange = 'orange'
let ballx = 450;
let bally = 100;




function setup() {
  createCanvas(900, 600);
}
//key pressed
function keyPressed() {
  //cube
  if (keyCode == 66)
    console.log('b wordt ingedrukt');
  if (keyCode == 32)
    console.log('spatie wordt ingedrukt');
  if (keyCode == 13)
    console.log('enter wordt ingedrukt');


  //stoplicht 
  if (keyCode == 13) {
    if (color === 'red') {
      color = 'black'
    }
    else if (colororange === 'orange') {
      color = 'red'
    }
  }
  if (keyCode == 13) {
    if (colorgreen === 'green') {
      colorgreen = 'black'
    }
    else if (colorgreen === color) {
      colorgreen = 'green'
    }
  }
  if (keyCode == 13) {
    if (colororange === 'orange') {
      colororange = 'black'
    }
    else if (colororange === colorgreen) {
      colororange = 'orange'
    }
  }

  //eightball
  if (keyCode == 38) {
    console.log('pijltje naar boven')
  }
  if (keyCode == 87) {
    console.log('w ingedrukt')
  }
  if (keyCode == 40) {
    console.log('pijltje omlaag')
  }
  if (keyCode == 83) {
    console.log('s ingedrukt')
  }
  if (keyCode == 37) {
    console.log('pijltje naar links')
  }
  if (keyCode == 65) {
    console.log('a ingedrukt')
  }
  if (keyCode == 39) {
    console.log('pijltje naar rechts')
  }
  if (keyCode == 68) {
    console.log('d ingedrukt')
  }
}


//key released
function keyReleased() {
  //cube
  if (keyCode == 66)
    console.log('b wordt losgelaten');
  //timer
  if (keyCode == 32)
    console.log('spatie wordt losgelaten');
  //stoplicht
  if (keyCode == 13)
    console.log('enter wordt losgelaten');
  //eightball
  //pijltjes
  if (keyCode == 38) {
    console.log('pijltje naar boven los')
  }
  if (keyCode == 40) {
    console.log('pijltje omlaag los')
  }
  if (keyCode == 37) {
    console.log('pijltje naar links los')
  }
  if (keyCode == 39) {
    console.log('pijltje naar rechts los')
  }
  // WASD
  if (keyCode == 87) {
    console.log('w los')
  }
  if (keyCode == 83) {
    console.log('s los')
  }
  if (keyCode == 65) {
    console.log('a los')
  }
  if (keyCode == 68) {
    console.log('d los')
  }
}



function draw() {
  background(220);
  //cube
  if (keyIsPressed == true) {
    if (keyCode == 66) {
      x == true;
      square(x, 30, 60);
    }
  }


  //text
  fill('black');
  textSize(12);
  text('1. Houd B ingedrukt om het blokje te laten verschijnen', 20, 20);
  text('2. Druk op spatie om het getal op 0 te zetten', 20, 120);
  text('3. Druk op enter om van rood -> groen -> oranje te gaan', 20, 240);
  text('4. beweeg de eightball met WASD of de pijltjes toetsen', 360, 20);

  //verkeerslicht
  fill('grey');
  rect(30, 250, 50, 150);
  rect(40, 400, 30, 100);

  fill(color);
  circle(licht, 280, 40);

  fill(colorgreen);
  circle(licht, 370, 40);

  fill(colororange);
  circle(licht, 325, 40);



  //teller
  textSize(40);
  text('teller:', 20, 170);
  text(teller, 130, 170);
  teller = teller + 1
  if (teller >= 500) {
    teller = 0
  }
  if (keyIsPressed == true) {
    if (keyCode == 32) {
      teller = 0
    }
  }


  //eightball
  fill('black');
  circle(ballx, bally, 100);
  fill('white"');
  circle(ballx, bally, 70);
  fill('black');
  text('8', ballx, bally);
  if (keyIsPressed == true)
    if (keyCode == 38 || keyCode ==87)
      bally -= 1
  if (keyIsPressed == true)
    if (keyCode == 40 || keyCode == 83)
      bally += 1
  if (keyIsPressed == true)
    if (keyCode == 37 || keyCode == 65)
      ballx -= 1
  if (keyIsPressed == true)
    if (keyCode == 39 || keyCode == 68)
      ballx += 1

  if(ballx >=950){
    ballx = -50
  }
  if(ballx <= -100){
    ballx = 950
  }
  if(bally >= 650){
    bally = -50
  }
  if(bally <= -100){
    bally = 650
  }
}
