let quizBlock = [
  [0,0],
  [0,0]
];
let kleuren = [["white"]];
let quizBlockX = 450;
let quizBlockY = 200;
let quizBlockGrote = 100;
let quizBlockHoogte = 80;



function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("pink");

  for(let rij of quizBlock){
    for(let col of rij){
fill(kleuren[col]);
if(col == 0){
rect(quizBlockX,quizBlockY,quizBlockGrote,quizBlockHoogte);
}
 quizBlockX + 100
}
quizBlockY + 100 
}
quizBlockHoogte + 80
}
