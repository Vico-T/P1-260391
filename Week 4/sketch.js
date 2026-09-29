let kleuren = ["red","purple","orange","blue","green","pink"]
let snelheidy = 0
let snelheidx = 0
let angle = 0
let X = 0
let Y = 0


function setup() {
  createCanvas(800, 600);
}

function buttonPressed(){
  if(keyCode == 8){
    
  }
}



function draw() {
  background(220);

  // rotate(angle);
  // angle = angle + 1
  // circleMode(CENTER);
  for( let i = 0; i < kleuren.length; i++){
      rotate(angle);
  angle = angle + 1
  // circleMode(CENTER);
  fill(kleuren[i]);
  circle(X + (i * 50) + snelheidx,Y + snelheidy,50);
  snelheidy = snelheidy + 1 
  snelheidx = snelheidx + 0.5
  if(X >= 600 && Y >= 800){
    X = 50,
    Y = 50
  }
  }
}
