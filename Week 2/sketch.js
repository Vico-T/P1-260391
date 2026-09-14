function setup() {
  createCanvas(800, 600);
}
let daglicht = 'lightblue'
let gebouw = 'lightgrey'
function draw() {
  background(daglicht);
  fill(gebouw);
  //van links naar rechts worden de gebouwen geteld
  //gebouw 3
  rect(70,150,150,450);
  //gebouw 5
  rect(280,120,100,480);
  //gebouw 4
  rect(200,400,150,200);
  //gebouw 1
  rect(0,100,50,500);
  //gebouw 2
  rect(40,250,100,350);


}
