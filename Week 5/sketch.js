let blokken = [];
let aantalBlokken = 4;
let vragenKleinSchip = [
{

}
]

function setup() {
  createCanvas(800, 600);

  for(let i = 0; i < aantalBlokken; i++){
  blokken.push(
  {
  posX: [80,320,
         80,320],
  posY: [300,300,
         420,420],
  lengte: 300,
  hoogte: 100,
  }
  )
}
}

function draw() {
  background("pink");
  for(let i = 0; i < blokken.length; i++){
  drawBlokken( blokken[i] );
  // updateBlokken( blokken[i] );
  }
}

function drawBlokken(blok){
  rect(blok.posX[0][0], blok.posY[0][0], blok.lengte, blok.hoogte);
  rect(blok.posX[0][1], blok.posY[0][1], blok.lengte, blok.hoogte);
  rect(blok.posX[1][0], blok.posY[1][0], blok.lengte, blok.hoogte);
  rect(blok.posX[1][1], blok.posY[1][1], blok.lengte, blok.hoogte);
}

// function updateBlokken(blok){
// if( blok.posX, blok.posY, mouseX, mouseY > blok.lengte && blok.hoogte){
// strokeWeight(3);
// }
// else{
//   strokeWeight(1);
// }
// }

