let variabellen = 100;
let greeting = 'Hello World!';
let a = 20;
let b = 10;
let y = 80;
let x = 20;
let optellen = a + b;
let aftrekken = a - b;
let delen = a / b;
let keer = a * b;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //opdracht 1
  text(variabellen,x,20);

  //opdracht 2
  text(greeting,x,60);

  //opdracht 3 + 4
  text('optellen: ' + optellen,x,y);
  noLoop(y=y+ 20);
  text('aftrekken: ' + aftrekken,x,y);
  noLoop(y=y+ 20);
  text('delen: ' + delen,x,y);
  noLoop(y=y+ 20);
  text('keer: ' + keer,x,y);
  noLoop(y=y+ 20);
}
