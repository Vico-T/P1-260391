let y = -20
let screen = 0
let x = 400
let speed = 2
let score = 0
function setup() {
  createCanvas(800, 800);
}
function draw() {
  
  if(screen == 0){
    console.log(screen)
    startScreen();
  }else if(screen == 1){
    gameStart();
  }else if(screen == 2){
    endScreen();
  }
}
function startScreen(){
  background("black")
  text('catch as much fruit as possible', 400,400);
  reset();
}
function gameStart(){
  background("white")
  text('score'+ score, 200,200);
  rect(x,y, 20,20);
  rectMode(CENTER);
  rect(mouseX, height-10,50,30);
  y= y+ speed
  if(y>height){
    screen = 2
  }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
    y=-20
    speed += .5
    score += 1
  }
  if(y ==-20){
    pickRandom();
  }
}

function pickRandom(){
  x= random(20, width-20);
}

function endScreen(){
  background("grey")
  text('GAME OVER', 400,350);
  text('SCORE =' + score, 430,400);
}

function mousePressed(){
  if(screen == 0){
    screen = 1
  }else if(screen ==2){
    screen = 0
  }
}

function reset(){
  score = 0;
  speed = 2
  y= -20
}