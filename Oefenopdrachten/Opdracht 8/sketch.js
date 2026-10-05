function setup() {
  createCanvas(800, 400);
}

function tekenHuis(){
  square(50,100,50);
  triangle(50,100,75,30,100,100);
  rect(55,120,10,30);
  square(75,120,20);
}

function rondje(){
  circle(150,50,30);
}

function rechthoek(){
  rect(150,100,20,40);
}

function lijn(){
  strokeWeight(4);
  line(150,150,180,170);
}

function woorden(){
  textSize(80);
  text("hallo",200,80);
}

function rekenen(a, b){
  return a + b
}

let antwoord = rekenen(10,8);


function draw() {
  textSize(40);
  background(220);
  tekenHuis();
  rondje();
  rechthoek();
  lijn();
  woorden();
  text(antwoord);
}