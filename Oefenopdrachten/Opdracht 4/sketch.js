let b = 'x';
let x = 30;
let teller = 0;
let licht = 55;

function setup() {
  createCanvas(900, 600);
}
//key pressed
function keyPressed(){
    if(keyCode == 66)
    console.log('b wordt ingedrukt');
  if (keyCode == 32)
  console.log('spatie wordt ingedrukt');
if(keyCode == 13)
  console.log('enter wordt ingedrukt');
}
//key released
function keyReleased(){
if(keyCode == 66)
  console.log('b wordt losgelaten');
  if (keyCode == 32)
     console.log('spatie wordt losgelaten');
if (keyCode == 13)
  console.log('enter wordt losgelaten');
}

//sqaure dat verschijnt 
function draw() {
  background(220);
  if(keyIsPressed == true){
  if(keyCode == 66){
  x == true;
  square(x,30,60);
  }
}
//text
fill('black');
textSize(12);
  text('1. Houd B ingedrukt om het blokje te laten verschijnen',20,20);
  text('2. Druk op spatie om het getal op 0 te zetten',20,120);
  text('3. Druk op enter om van rood -> groen -> oranje te gaan',20,240);
  text('4. beweeg de eightball met WASD of de pijltjes toetsen',360,20);

//verkeerslicht
fill('grey');
rect(30,250,50,150);
rect(40,400,30,100);

fill('black');
circle(licht,280,40);

fill('black');
circle(licht,370,40);

fill('black');
circle(licht,325,40);

if(keyIsPressed == true){
  if(keyCode == 13)
    fill('red')
  circle (licht,280,40);
  fill('green')
  circle(licht, 370,40)
  fill('orange')
  circle(licht,325,40)
}

//teller
  textSize(40);
text('teller:',20,170);
text(teller,130,170);
teller = teller + 1
if(teller >= 500){
  teller = 0
}
if(keyIsPressed == true){
  if(keyCode == 32){
    teller = 0
  }
}
}
