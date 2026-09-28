let kleuren = ["red","purple","orange"]


function setup() {
  createCanvas(800, 600);
}

function buttonPressed(){
  if(keyCode == 8){
    
  }
}



function draw() {
  background(220);

  for( let i = 0; i < kleuren.length; i++){
  fill(kleuren[i]);
  circle(100,100,100);
  }
}
