
function setup() {
  createCanvas(600, 400);
  }

function draw() {
  background(50,180,250,100);
  textSize(12)


  verticalText('p\no\nk\ne\nr\n',201,200);
  textLeading(4);
}

function verticalText(t, x, y){
  push();
  const vt = t.split('').join('\n');
    text(vt, x, y);
    pop();
}
