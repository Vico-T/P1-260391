let posX = []
let posY = []
let grote = []
let hoogte = []
let speed = []
let red = []
let green = []
let blue = []
let transparant = []


function setup() {
  createCanvas(800, 600);
}

function keyPressed(){
  if(keyCode == 8){
    console.log("backspace")
    posX = []
    posY = []
    grote = []
    for(let i = 0; i <= 100; i++){
    posX.push(int(random(0,800)));
    posY.push(int(random(0,600)));
    grote.push(int(random(0,100)));
    hoogte.push(int(random(0,100)));
    speed.push(int(random(2,10)));
    transparant.push(int(random(20,300)));
    red.push(int(random(0,255)));
    green.push(int(random(0,255)));
    blue.push(int(random(0,255)));
  }
  }
}



function draw() {
  background("blue");
  for(let i = 0; i <= 130; i++){
    posX[i] = posX[i] + speed[i]
    posY[i] = posY[i] + speed[i]
    fill(red[i],green[i],blue[i],transparant[i])
    circle(posX[i],posY[i],grote[i])
  }
    for(let i = 0; i <= 30; i++){
    fill(red[i],green[i],blue[i],transparant[i])
    square(posX[i],posY[i],grote[i])
  }
  for(let i = 0; i <= 10; i++){
    fill(red[i],green[i],blue[i],transparant[i])
    rect(posX[i],posY[i],grote[i],hoogte[i])
  }
    for(let i = 0; i <= 30; i++){
    fill(red[i],green[i],blue[i],transparant[i])
    ellipse(posX[i],posY[i],grote[i],hoogte[i])
  
    if(posX[i] >= 800){
    posX[i] = -50
  }
  if(posY[i] >= 600){
    posY[i] = -50
  }
}
}
