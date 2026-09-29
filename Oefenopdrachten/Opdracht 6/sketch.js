let cijfers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300]
let rekenCijfer = [3,55,93,20,102,6]
let cijferRekenen = [14,22,80,5]
function setup() {
  createCanvas(380, 350);
}

function draw() {
  let colors = ["red", "green", "blue", "purple", "yellow"]
  background(220);
  fill("black");
  text("1.",20,15);
  text("2.",20,100);
  text("3.",20,190);
  text("4.",20,250);
  text("5.",120,15);
  text("6.",120,100);
  text("7.",120,190);
  text("8.",120,280);
  text("9.",240,15);

  //opdracht 1
  for(let i = 0; i < colors.length; i++){
    fill(colors[i]);
    text(colors[i],35,15 + (15* i));
  }
  //opdracht 2
  colors.shift()
  colors.push("red")
  for(let i = 0; i < colors.length; i++){
    fill(colors[i]);
    text(colors[i],35,100 + (15 * i));
  }
  //opdracht 3
  colors.splice(1,2);
  for(let i = 0; i < colors.length; i++){
    fill(colors[i]);
    text(colors[i],35,190 + (15 * i));
  }
  // opdracht 4
  let y = 250
  for(let i = 0; i < cijfers.length; i++){
    if(cijfers[i] <= 300){
      text(cijfers[i],35, y);
      y += 15
  }
}
// opdracht 5
for(let i = 0; i < 500; i++){
  text(rekenCijfer + cijferRekenen);
}
}
