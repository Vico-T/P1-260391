let opdracht2 = ['black', 'darkgrey', 'grey', 'lightgrey', 'white']




function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill("black");
  text("1.",20,15);
  text("2.",20,105);
  text("3.",80,105);
  text("4.",80,205);
  text("5",540,20);
  text("6.",350,105);
  text("7",635,105);


  //opdracht 1
  for(let i = 0; i <= 10; i++){
    if(i == 7){
      fill("blue")
    }else{
      fill("white")
    }
    square(10 + (i * 45),20,45)
  }

  //opdract 2
  // for(let i = 0; i <= 5; i--){
  //   fill(opdracht2[2])
  //   square(10, 40,45)
  // }
}
