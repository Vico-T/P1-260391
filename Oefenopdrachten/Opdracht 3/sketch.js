  function setup() {
  createCanvas(400, 200);
}

function draw() {
  let score = random(100)
noLoop(score)
  background(220);
  text(score,10,20);
  fill('green');
  if (score >= 90){ 
  text ("Uitstekent!",10,35);
  }
  else if (score >= 70 && score <=89){
  fill('yellow');
  text('Goed gedaan!',10,35);
  }
  else if (score >= 50 && score <=69){
  fill('orange');
  text('Voldoende',10,40);
}
  else if (score <=49){
  fill('red');
  text('Onvoldoende',10,50);
}
}
