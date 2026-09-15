let speed = 3;

function setup() {
  createCanvas(800, 600);
}
let daglicht = 'lightblue'
let gebouw = 'lightgrey'
function draw() {
  background(daglicht)
  stroke('black');
  strokeWeight(1);
  fill(gebouw);
  //van links naar rechts worden de gebouwen opgeteld geteld
  //gebouw 3
  rect(70,150,150,450);
  //gebouw 5
  rect(280,120,100,480);
  //gebouw 6
  rect(320,260,200,340);
  //gebouw 4
  rect(200,400,150,200);
  //gebouw 1
  rect(0,100,50,500);
  //gebouw 2
  rect(40,250,100,350);
  //gebouw 7
  rect(400,50,150,550);
  //gebouw 9
  rect(580,180,130,420);
  //gebouw 10
  rect(680,500,100,100);
  //gebouw 8
  rect(500,320,100,280);
  //gebouw
  rect(750,80,55,520);
  

  //straat strepen
    noStroke();
  //1
  fill('lightblue');
  rect(11,459,28,5);
  rect(15,465,20,4);
  rect(19,471,12,2);
  //2
  rect(101,459,28,5);
  rect(105,465,20,4);
  rect(109,471,12,2);
  //3
  rect(191,459,28,5);
  rect(195,465,20,4);
  rect(199,471,12,2);
  //4
  rect(281,459,28,5);
  rect(285,465,20,4);
  rect(289,471,12,2);
  //5
  rect(371,459,28,5);
  rect(375,465,20,4);
  rect(379,471,12,2);
  //6
  rect(461,459,28,5);
  rect(465,465,20,4);
  rect(469,471,12,2);
  //7
  rect(551,459,28,5);
  rect(555,465,20,4);
  rect(559,471,12,2);
  //8
  rect(641,459,28,5);
  rect(645,465,20,4);
  rect(649,471,12,2);
  //9
  rect(731,459,28,5)
  rect(735,465,20,4)
  rect(739,471,12,2);
  fill('white')
  //1
  rect(10,450,30,10);
  //2
  rect(100,450,30,10);
  //3
  rect(190,450,30,10)
  //4
  rect(280,450,30,10);
  //5
  rect(370,450,30,10);
  //6
  rect(460,450,30,10);
  //7
  rect(550,450,30,10);
  //8
  rect(640,450,30,10);
  //9
  rect(730,450,30,10);

  //neon bord
  //sushi
  strokeWeight(2);
  stroke('black');
  line(213,360,322,360);
  line(213,375,322,375);
  line(230,360,230,399);
  line(275,360,275,399);
  line(310,360,310,399);
  stroke('red');
  textSize(50);
  noFill();
  text('sushi',210,380);
  //poker
  stroke(2);
  line(550,65,558,65);
  line(550,145,558,145);
  line(550,105,558,105);
  noStroke();
  fill('grey');
  rect(558,62,15,90);
  noFill(); 
  strokeWeight(0.5);
  textSize(20);
  stroke('lightgreen');
  verticalText('p\no\nk\ne\nr\n',560,75);
  textLeading(6);

  function verticalText(t, x, y){
  push();
  const vt = t.split('').join('\n');
    text(vt, x, y);
    pop();
  }


  //auto's
  //cabrio
  noStroke();
  fill('blue');
  triangle(95,500,85,494,85,500)
  fill('lightblue');
  rect(55,509,40,5);
  rect(65,518,20,4);
  rect(73,527,5,2);
  fill('orange');
  stroke('black');
  strokeWeight(1)
  rect(50,500,50,10,3);
  
  //jeep
  strokeWeight(0);
  fill('lightblue')
  rect(97,558,10,5);
  rect(99,564,6,3);
  rect(135,558,10,5);
  rect(137,564,6,3);
  fill('green');
  strokeWeight(0);
  rect(94,550,56,10,3);
  rect(94,540,36,20);
  triangle(140,550,130,540,130,550);
  fill('lightblue');
  triangle(131,548,131,542,138,548);
  rect(119,541,8,8);
  rect(109,541,8,8);
  rect(96,541,11,8);
  strokeWeight(1);
  line(108,539,108,549);
  line(95,539,95,549);
  line(128,539,128,549);
  strokeWeight(2);
  line(94,539,129,539);

  vrachtwagen
  noStroke();
  fill('lightblue');
  rect(155,468,20,6);
  rect(158,475,15,4)
  rect(160,480,10,3)
  rect(208,468,20,6);
  rect(211,475,15,4);
  rect(213,480,10,3);
  rect(230,468,20,6)
  rect(233,475,15,4);
  rect(235,480,10,3);
  rect(260,468,10,6)
  rect(262,475,6,4);
  rect(263,480,4,3)
  fill('blue');
  rect(150,450,100,20);
  fill('red');
  rect(251,450,10,20,2)
  rect(251,460,20,10)
  rect(230,465,22,5)
}