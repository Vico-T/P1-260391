  let str = 'poker';
  str = addLetterSpacing(str, 1);


function setup() {
  createCanvas(600, 400);
  }

function draw() {
  background(50,180,250,100);
  textSize(12)
  text('str',100,100);


  verticalText('p\no\nk\ne\nr\n',200,200);
}

function verticalText(t, x, y){
  push();
  textAlign(CENTER, CENTER);
  const vt = t.split('').join('\n');
    text(vt, x, y);
    pop();
}
