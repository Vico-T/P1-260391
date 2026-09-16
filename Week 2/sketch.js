let speed = 1.5;
let sunx = -50;
let moonx = -50;
let truckposition = -300;
let cabrioposition = -200;
let jeepposition = 1000;
let cloudpositionLeft = 1000;
let cloudpositionRight = -200
let straatstreep = 0;
let straatstreepSpeed = 1;
let daglicht = 'lightblue'
let ochtend = 'orange'
let nacht = 'black'
let gebouw = 'lightgrey'
let licht = 710;
let color = 'red'
let colorgreen = 'green'
let colororange = 'orange'


function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
//stoplicht 
  if (keyCode == 13) {
    if (color === 'red') {
      color = 'black'
    }
    else if (colororange === 'orange') {
      color = 'red'
    }
  }
  if (keyCode == 13) {
    if (colorgreen === 'green') {
      colorgreen = 'black'
    }
    else if (colorgreen === color) {
      colorgreen = 'green'
    }
  }
  if (keyCode == 13) {
    if (colororange === 'orange') {
      colororange = 'black'
    }
    else if (colororange === colorgreen) {
      colororange = 'orange'
    }
  }
}

function draw() {
  //dag
  if(sunx >= -49 && sunx <=200 || sunx >=600){
  background(ochtend)
  }
  if(sunx >=200 && sunx <=600){
    background(daglicht)
  }
  fill('yellow');
  circle(sunx,40,50);
  sunx += speed;
  if(sunx >= 900){
    sunx != speed
    sunx = 0
  }
  if(moonx >= 800){
    sunx = -50
  }
  // if(sunx >=-100 && sunx <= 900){
  //   sunx += speed
  // }


  //nacht
  if(sunx >= 800){
    background(nacht)
  fill('white');
  circle(moonx,40,50);
  moonx += speed
  if(moonx == 850){
  moonx != speed
  }
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
  cloudpositionRight = cloudpositionRight +1,2

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

  fill(37,150,190);
  //gebouw 1
  rect(10,120,20,10);
  rect(10,140,20,10);
  rect(10,160,20,10);
  rect(10,180,20,10);
  rect(10,200,20,10);
  rect(10,220,20,10);
  rect(10,240,20,10);
  rect(10,260,20,10);
  rect(10,280,20,10);
  rect(10,300,20,10);
  rect(10,320,20,10);
  rect(10,340,20,10);
  rect(10,360,20,10);
  rect(10,380,20,10);
  rect(10,400,20,10);
  rect(10,420,20,10);
  rect(10,440,20,10);
  rect(10,460,20,10);
  rect(10,480,20,10);
  rect(10,500,20,10);
  rect(10,520,20,10);
  rect(10,540,20,10);
  rect(10,560,20,10);
  rect(10,580,20,10);
  
  //gebouw 2
  rect(60,260,20,10);
  rect(60,280,20,10);
  rect(60,300,20,10);
  rect(60,320,20,10);
  rect(60,340,20,10);
  rect(60,360,20,10);
  rect(60,380,20,10);
  rect(60,400,20,10);
  rect(60,420,20,10);
  rect(60,440,20,10);
  rect(60,460,20,10);
  rect(60,480,20,10);
  rect(60,500,20,10);
  rect(60,520,20,10);
  rect(60,540,20,10);
  rect(60,560,20,10);
  rect(60,580,20,10);
  rect(100,260,20,10);
  rect(100,280,20,10);
  rect(100,300,20,10);
  rect(100,320,20,10);
  rect(100,340,20,10);
  rect(100,360,20,10);
  rect(100,380,20,10);
  rect(100,400,20,10);
  rect(100,420,20,10);
  rect(100,440,20,10);
  rect(100,460,20,10);
  rect(100,480,20,10);
  rect(100,500,20,10);
  rect(100,520,20,10);
  rect(100,540,20,10);
  rect(100,560,20,10);
  rect(100,580,20,10);

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
  fill('lightblue');
  rect(705,562,10,5)
  rect(706,568,8,3);
  fill('grey');
  rect(700,490,20,50);
  rect(704,540,12,23);

  fill(color);
  circle(licht,500,8);

  fill(colorgreen);
  circle(licht,530,8);

  fill(colororange);
  circle(licht,515,8);
}