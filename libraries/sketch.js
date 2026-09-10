function setup() {
  createCanvas(600, 400);
  }

function draw() {
  background(50,180,250,100);
  textSize(20);
   push();
  angle1 = radians(270);
  translate(200,180);
  rotate(angle1);
  text('kast',252,476);
  pop();
}
