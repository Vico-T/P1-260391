let speed = 2;
let x = 0;
let truckposition = -300;
let cabrioposition = -200;
let jeepposition = 1000;
let cloudpositionLeft = 1000;
let cloudpositionRight = -200
let daglicht = 'lightblue'
let ochtend = 'orange'
let gebouw = 'lightgrey'

function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(daglicht)
  fill('yellow');
  circle(x,40,50);
  x += speed;
  if(x == 850){
    x != speed
  }

  //wolken
  noStroke();
  fill('white');
  circle(60 +cloudpositionLeft,100,50);
  circle(80 +cloudpositionLeft,80,50);
  circle(120 +cloudpositionLeft,100,50);
  circle(100 +cloudpositionLeft,120,50);
  cloudpositionLeft = cloudpositionLeft -2

  noStroke();
  fill('white');
  circle(60 +cloudpositionRight,80,50);
  circle(80 +cloudpositionRight,60,50);
  circle(120 +cloudpositionRight,80,50);
  circle(100 +cloudpositionRight,100,50);
  cloudpositionRight = cloudpositionRight +1,5

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
  rect(11,509,28,5);
  rect(15,515,20,4);
  rect(19,521,12,2);
  //2
  rect(101,509,28,5);
  rect(105,515,20,4);
  rect(109,521,12,2);
  //3
  rect(191,509,28,5);
  rect(195,515,20,4);
  rect(199,521,12,2);
  //4
  rect(281,509,28,5);
  rect(285,515,20,4);
  rect(289,521,12,2);
  //5
  rect(371,509,28,5);
  rect(375,515,20,4);
  rect(379,521,12,2);
  //6
  rect(461,509,28,5);
  rect(465,515,20,4);
  rect(469,521,12,2);
  //7
  rect(551,509,28,5);
  rect(555,515,20,4);
  rect(559,521,12,2);
  //8
  rect(641,509,28,5);
  rect(645,515,20,4);
  rect(649,521,12,2);
  //9
  rect(731,509,28,5)
  rect(735,515,20,4)
  rect(739,521,12,2);
  fill('white')
  //1
  rect(10,500,30,10);
  //2
  rect(100,500,30,10);
  //3
  rect(190,500,30,10)
  //4
  rect(280,500,30,10);
  //5
  rect(370,500,30,10);
  //6
  rect(460,500,30,10);
  //7
  rect(550,500,30,10);
  //8
  rect(640,500,30,10);
  //9
  rect(730,500,30,10);

  
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
  cabrioposition = cabrioposition + 8;
  fill('blue');
  triangle(95 +cabrioposition,500,85 +cabrioposition,494,85 +cabrioposition,500)
  fill('lightblue');
  rect(55 +cabrioposition,509,40,5);
  rect(65 +cabrioposition,518,20,4);
  rect(73 +cabrioposition,527,5,2);
  fill('orange');
  stroke('black');
  strokeWeight(1)
  rect(50 +cabrioposition,500,50,10,3);
  if(cabrioposition > 800){
    cabrioposition = cabrioposition -8
  }
  
  //jeep
  strokeWeight(0);
  jeepposition = jeepposition - 6
  fill('lightblue')
  rect(97 +jeepposition,558,10,5);
  rect(99 +jeepposition,564,6,3);
  rect(135 +jeepposition,558,10,5);
  rect(137 +jeepposition,564,6,3);
  fill('green');
  strokeWeight(0);
  rect(94 +jeepposition,550,56,10,3);
  rect(94 +jeepposition,540,36,20);
  triangle(140 +jeepposition,550,130 +jeepposition,540,130 +jeepposition,550);
  fill('lightblue');
  triangle(131 +jeepposition,548,131 +jeepposition,542,138 +jeepposition,548);
  rect(119 +jeepposition,541,8,8);
  rect(109 +jeepposition,541,8,8);
  rect(96 +jeepposition,541,11,8);
  strokeWeight(1);
  line(108 +jeepposition,539,108 +jeepposition,549);
  line(95 +jeepposition,539,95 +jeepposition,549);
  line(128 +jeepposition,539,128 +jeepposition,549);
  strokeWeight(2);
  line(94 +jeepposition,539,129 +jeepposition,539);
  if(jeepposition ==-500){
    jeepposition = jeepposition +6
  }

  //vrachtwagen
  noStroke();
  fill('lightblue');
  truckposition = truckposition + 5;
  rect(155 +truckposition,468,20,6);
  rect(158 +truckposition,475,15,4)
  rect(160 +truckposition,480,10,3)
  rect(208 +truckposition,468,20,6);
  rect(211 +truckposition,475,15,4);
  rect(213 +truckposition,480,10,3);
  rect(230 +truckposition,468,20,6)
  rect(233 +truckposition,475,15,4);
  rect(235 +truckposition,480,10,3);
  rect(260 +truckposition,468,10,6)
  rect(262 +truckposition,475,6,4);
  rect(263 +truckposition,480,4,3)
  fill('blue');
  rect(150 +truckposition,450,100,20);
  fill('red');
  rect(251 +truckposition,450,10,20,2)
  rect(251 +truckposition,460,20,10)
  rect(230 +truckposition,465,22,5)
  if(truckposition >800){
    truckposition = truckposition -5
  }


  //stoplicht
   noFill();
  fill('lightblue');
  rect(705,562,10,5)
  rect(706,568,8,3);
  fill('black');
  rect(700,490,20,50);
  rect(704,540,12,23)
  fill('red');
  circle(710,500,8)
  fill('orange');
  circle(710,515,8);
  fill('green');
  circle(710,530,8);

}