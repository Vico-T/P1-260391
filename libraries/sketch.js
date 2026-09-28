function setup() {
  createCanvas(600, 600);
    for(let i = 5; i >= 0; i--){
    console.log(i)
  }
}







function draw() {
  background('pink');
  for(let i = 1; i <= 3; i++){
      if(i == 1){
    fill("red");
  }
  if(i == 2){
    fill("orange");
  }
  if(i == 3){
    fill("green");
  }
    circle(30, 30 + (i * 35),30);
}
let index = 0
while(index < 5){
rect(50 + (index * 50),50,50,50);
index++
}
}
