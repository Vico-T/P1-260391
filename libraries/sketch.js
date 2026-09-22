
// function setup() {
//   createCanvas(600, 400);
//   }

// function draw() {
//   background(50,180,250,100);
//   textSize(12)


// if(mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
//     mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte){
//       box1 = 'blue'
//     } else
//       box1 = 'red'

//   if(mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
//     mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte){
//       box2 = 'blue'
//     }else 
//       box2 = 'red'
  
//   if(mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
//     mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte){
//       box3 = 'blue'
//     }else
//       box3 = 'red'
  
//   if(mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
//     mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte){
//       box4 = 'blue'
//     }else
//       box4 = 'red'

//   if(mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
//     mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte){
//       box5 = 'blue'
//     }else 
//       box5 = 'red'

//   if(mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
//     mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte){
//       box6 = 'blue'
//     }else
//       box6 = 'red'

//   if(mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
//     mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte){
//       box7 = 'blue'
//     }else
//       box7 = 'red'

//   if(mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
//     mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte){
//       box8 = 'blue'
//     }else
//       box8 = 'red'

//   if(mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
//   mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte){
//     box9 = 'blue'
//   }else
//     box9 = 'red'
// }
let player = 1
let boxRij1X = 75
let boxRij2X = 225
let boxRij3X = 375
let boxKolom1Y = 75
let boxKolom2Y = 225
let boxKolom3Y = 375
let boxHoogte = 150
let boxBreedte = 150
let box1 = 'grey'
let box2 = 'grey'
let box3 = 'grey'
let box4 = 'grey'
let box5 = 'grey'
let box6 = 'grey'
let box7 = 'grey'
let box8 = 'grey'
let box9 = 'grey'


function setup() {
  createCanvas(600, 600);
}

function mousePressed(){
  if(mouseButton == LEFT){
    player ++
    // box1 += 1;
    console.log('links ingedrukt')

  }
}







function draw() {
  background('pink');

if (player >= 3){
  player = 1
}



if (mouseIsPressed === true && player == 1 && box1 == "grey" &&
  mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
  mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte 
){
  Box1 = "red"
}else if (mouseIsPressed === true && player == 2 && box1 == "grey" &&
  mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
  mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte ){
  box1 = "blue"
  }

if (mouseIsPressed === true && player == 1 && box2 == "grey" &&
  mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
  mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte
){
  box2 = "red"
}else if (mouseIsPressed === true && player == 2 && box2 == "grey" &&
  mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
  mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte ){
  box2 = "blue"
  }

if (mouseIsPressed === true && player == 1 && box3 == "grey" &&
  mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
  mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte
){
  box3 = "red"
}else if (mouseIsPressed === true && player == 2 && box3 == "grey" &&
  mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
  mouseY > boxKolom1Y && mouseY < boxKolom1Y + boxHoogte ){
  box3 = "blue"
}

if (mouseIsPressed === true && player == 1 && box4 == "grey" &&
  mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
  mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte
){
  box4 = "red"
}else if (mouseIsPressed === true && player == 2 && box4 == "grey" &&
  mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
  mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte ){
  box4 = "blue"
}

if (mouseIsPressed === true && player == 1 && box5 == "grey" &&
  mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
  mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte
){
  box5 = "red"
}else if (mouseIsPressed === true && player == 2 && box5 == "grey" &&
  mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
  mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte ){
  box5 = "blue"
}

if (mouseIsPressed === true && player == 1 && box6 == "grey" &&
  mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
  mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte
){
  box6 = "red"
}else if (mouseIsPressed === true && player == 2 && box6 == "grey" &&
  mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
  mouseY > boxKolom2Y && mouseY < boxKolom2Y + boxHoogte ){
  box6 = "blue"
}

if (mouseIsPressed === true && player == 1 && box7 == "grey" &&
  mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
  mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte
){
  box7 = "red"
}else if (mouseIsPressed === true && player == 2 && box7 == "grey" &&
  mouseX > boxRij1X && mouseX < boxRij1X + boxBreedte &&
  mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte ){
  box7 = "blue"
}

if (mouseIsPressed === true && player == 1 && box8 == "grey" &&
  mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
  mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte
){
  box8 = "red"
}else if (mouseIsPressed === true && player == 2 && box8 == "grey" &&
  mouseX > boxRij2X && mouseX < boxRij2X + boxBreedte &&
  mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte ){
  box8 = "blue"
}

if (mouseIsPressed === true && player == 1 && box9 == "grey" &&
  mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
  mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte
){
  box9 = "red"
}else if (mouseIsPressed === true && player == 2 && box9 == "grey" &&
  mouseX > boxRij3X && mouseX < boxRij3X + boxBreedte &&
  mouseY > boxKolom3Y && mouseY < boxKolom3Y + boxHoogte ){
  box9 = "blue"
}







//speelveld box 1 tot 9 lopen van links boven naar rechts onder
strokeWeight(3);
square(75,75,450);
fill(box1);
rect(boxRij1X,boxKolom1Y,boxHoogte,boxBreedte);
fill(box2);
rect(boxRij1X,boxKolom2Y,boxHoogte,boxBreedte);
fill(box3);
rect(boxRij1X,boxKolom3Y,boxHoogte,boxBreedte);
fill(box4);
rect(boxRij2X,boxKolom1Y,boxHoogte,boxBreedte);
fill(box5);
rect(boxRij2X,boxKolom2Y,boxHoogte,boxBreedte);
fill(box6);
rect(boxRij2X,boxKolom3Y,boxHoogte,boxBreedte);
fill(box7);
rect(boxRij3X,boxKolom1Y,boxHoogte,boxBreedte);
fill(box8);
rect(boxRij3X,boxKolom2Y,boxHoogte,boxBreedte);
fill(box9);
rect(boxRij3X,boxKolom3Y,boxHoogte,boxBreedte);
}
