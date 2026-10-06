let ballen = [];
let aantalBallen = 50;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < aantalBallen; i++) {
    ballen.push(
      {
        posX: random(25, 375),
        posY: random(25, 375),
        cGrootte: random(10, 50),
        color: randomColor(),
        cSpeedX: random(-3, 3),
        cSpeedY: random(-3, 3),
      }
    );

  }

}


function draw() {
  background(80, 131, 126);

  for (let i = 0; i < ballen.length; i++) {
    updateBall( ballen[i] );
    drawBall( ballen[i] );
  }
}

function updateBall(ball)
{
  // // //balmovement
  ball.posX = ball.posX + ball.cSpeedX;
  ball.posY = ball.posY + ball.cSpeedY;
  
  if(ball.posX >= 450 || ball.posX <= -50){
    ball.posX = -50
  }
  if(ball.posY >= 450 || ball.posY <= -50){
    ball.posY = -50
  }

}

function drawBall(ball)
{
  if(dist( ball.posX, ball.posY, mouseX, mouseY) <ball.cGrootte / 2)
   {
    strokeWeight(3);
   }
   else
   {
    strokeWeight(1);
   }


  fill(ball.color);
  circle(ball.posX, ball.posY, ball.cGrootte);
}

function randomColor() {
  let r = floor(random(0, 256));
  let g = floor(random(0, 256));
  let b = floor(random(0, 256));
  let a = floor(random(0, 256));
  return color(r, g, b, a);
}

