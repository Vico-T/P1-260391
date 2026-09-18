let speed = 1.5;
let sunx = -50;
let moonx = -50;
let truckposition = -300;
let cabrioposition = -200;
let jeepposition = -400;
let cloudpositionLeft = 1000;
let cloudpositionRight = -200
let straatstreepy = 0
let daglicht = 'lightblue'
let ochtend = 'orange'
let nacht = 'black'
let gebouw = 'lightgrey'
let licht = 710;
let stoplichtstatus = 0;

function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
  //stoplicht 
  if (keyCode == 13) {
    stoplichtstatus += 1;
    if (stoplichtstatus > 2) {
      stoplichtstatus = 0;
    }
  }
}

function draw() {
  //dag
  if (sunx >= -49 && sunx <= 200 || sunx >= 600) {
    background(ochtend)
  }
  if (sunx >= 200 && sunx <= 600) {
    background(daglicht)

    // if(sunx >= cloudpositionRight && sunx <= cloudpositionRight){
    //   background('grey')
    // }
  }
  fill('yellow');
  circle(sunx, 40, 50);
  sunx += speed;
  if (sunx > 1750) {
    sunx = -50
  }


  //nacht
  if (sunx >= 849) {
    background(nacht)
    fill('white');
    circle(moonx, 40, 50);
    moonx += speed
    if (moonx > 855) {
      moonx = -50
    }
  }



  //wolken
  noStroke();
  fill('white');
  circle(60 + cloudpositionLeft, 100, 50);
  circle(80 + cloudpositionLeft, 80, 50);
  circle(120 + cloudpositionLeft, 100, 50);
  circle(100 + cloudpositionLeft, 120, 50);
  cloudpositionLeft = cloudpositionLeft - 2
  if(sunx == -50){
    cloudpositionLeft = 810
  }

  noStroke();
  fill('white');
  circle(60 + cloudpositionRight, 80, 50);
  circle(80 + cloudpositionRight, 60, 50);
  circle(120 + cloudpositionRight, 80, 50);
  circle(100 + cloudpositionRight, 100, 50);
  cloudpositionRight = cloudpositionRight + 1.6
  if(sunx == -50){
    cloudpositionRight = -350
  }

  stroke('black');
  strokeWeight(1);
  fill(gebouw);
  //van links naar rechts worden de gebouwen opgeteld geteld
  //gebouw 3
  rect(70, 150, 150, 450);
    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
  rect(85, 160, 20, 10);
  rect(85, 180, 20, 10);
  rect(85, 200, 20, 10);
  rect(85, 220, 20, 10);
  rect(85, 240, 20, 10);
  rect(120, 160, 20, 10);
  rect(120, 180, 20, 10);
  rect(120, 200, 20, 10);
  rect(120, 220, 20, 10);
  rect(120, 240, 20, 10);
  rect(160, 160, 20, 10);
  rect(160, 180, 20, 10);
  rect(160, 200, 20, 10);
  rect(160, 220, 20, 10);
  rect(160, 240, 20, 10);
  rect(160, 260, 20, 10);
  rect(160, 280, 20, 10);
  rect(160, 300, 20, 10);
  rect(160, 320, 20, 10);
  rect(160, 340, 20, 10);
  rect(160, 360, 20, 10);
  rect(160, 380, 20, 10);
  rect(160, 400, 20, 10);
  rect(160, 420, 20, 10);
  rect(160, 440, 20, 10);
  rect(160, 460, 20, 10);
  rect(160, 480, 20, 10);
  rect(160, 500, 20, 10);
  rect(160, 520, 20, 10);
  rect(160, 540, 20, 10);
  rect(160, 560, 20, 10);
  rect(160, 580, 20, 10);
  rect(190, 160, 20, 10);
  rect(190, 180, 20, 10);
  rect(190, 200, 20, 10);
  rect(190, 220, 20, 10);
  rect(190, 240, 20, 10);
  rect(190, 260, 20, 10);
  rect(190, 280, 20, 10);
  rect(190, 300, 20, 10);
  rect(190, 320, 20, 10);
  rect(190, 340, 20, 10);
  rect(190, 360, 20, 10);
  rect(190, 380, 20, 10);
  rect(190, 400, 20, 10);
  rect(190, 420, 20, 10);
  rect(190, 440, 20, 10);
  rect(190, 460, 20, 10);
  rect(190, 480, 20, 10);
  rect(190, 500, 20, 10);
  rect(190, 520, 20, 10);
  rect(190, 540, 20, 10);
  rect(190, 560, 20, 10);
  rect(190, 580, 20, 10);


  //gebouw 5
  fill(gebouw);
  rect(280, 120, 100, 480);
    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
  rect(290,130,20,10);
  rect(290,150,20,10);
  rect(290,170,20,10);
  rect(290,190,20,10);
  rect(290,210,20,10);
  rect(290,230,20,10);
  rect(290,250,20,10);
  rect(290,270,20,10);
  rect(290,290,20,10);
  rect(290,310,20,10);
  rect(290,330,20,10);
  rect(290,350,20,10);
  rect(290,370,20,10);
  rect(290,390,20,10);
  rect(330,130,40,10);
  rect(330,150,40,10);
  rect(330,170,40,10);
  rect(330,190,40,10);
  rect(330,210,40,10);
  rect(330,230,40,10);
  rect(330,250,40,10);


  //gebouw 6
  fill(gebouw);
  rect(320, 260, 200, 340);
    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
  square(330,270,20);
  square(330,300,20);
  square(330,330,20);
  square(330,360,20);
  square(330,390,20);
  circle(375,285,35);
  circle(375,330,35);
  circle(375,375,35);
  circle(375,420,35);
  circle(375,465,35);
  circle(375,510,35);
  circle(375,555,35);
  circle(375,600,35);


  //gebouw 4
  fill(gebouw);
  rect(200, 400, 150, 200);
    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
  rect(210, 410, 80, 50);
  rect(300, 410, 40, 50);
  rect(210, 470, 110, 20);
  rect(210, 500, 110, 20);
  rect(320, 470, 20, 50);


  //gebouw 1
  fill(gebouw);
  rect(0, 100, 50, 500);
  if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -49 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
  rect(10, 120, 20, 10);
  rect(10, 140, 20, 10);
  rect(10, 160, 20, 10);
  rect(10, 180, 20, 10);
  rect(10, 200, 20, 10);
  rect(10, 220, 20, 10);
  rect(10, 240, 20, 10);
  rect(10, 260, 20, 10);
  rect(10, 280, 20, 10);
  rect(10, 300, 20, 10);
  rect(10, 320, 20, 10);
  rect(10, 340, 20, 10);
  rect(10, 360, 20, 10);
  rect(10, 380, 20, 10);
  rect(10, 400, 20, 10);
  rect(10, 420, 20, 10);
  rect(10, 440, 20, 10);
  rect(10, 460, 20, 10);
  rect(10, 480, 20, 10);
  rect(10, 500, 20, 10);
  rect(10, 520, 20, 10);
  rect(10, 540, 20, 10);
  rect(10, 560, 20, 10);
  rect(10, 580, 20, 10);


  //gebouw 2
  fill(gebouw);

  rect(40, 250, 100, 350);
  //new fill
    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
  // fill(37, 150, 190);
  rect(60, 260, 20, 10);
  rect(60, 280, 20, 10);
  rect(60, 300, 20, 10);
  rect(60, 320, 20, 10);
  rect(60, 340, 20, 10);
  rect(60, 360, 20, 10);
  rect(60, 380, 20, 10);
  rect(60, 400, 20, 10);
  rect(60, 420, 20, 10);
  rect(60, 440, 20, 10);
  rect(60, 460, 20, 10);
  rect(60, 480, 20, 10);
  rect(60, 500, 20, 10);
  rect(60, 520, 20, 10);
  rect(60, 540, 20, 10);
  rect(60, 560, 20, 10);
  rect(60, 580, 20, 10);
  rect(100, 260, 20, 10);
  rect(100, 280, 20, 10);
  rect(100, 300, 20, 10);
  rect(100, 320, 20, 10);
  rect(100, 340, 20, 10);
  rect(100, 360, 20, 10);
  rect(100, 380, 20, 10);
  rect(100, 400, 20, 10);
  rect(100, 420, 20, 10);
  rect(100, 440, 20, 10);
  rect(100, 460, 20, 10);
  rect(100, 480, 20, 10);
  rect(100, 500, 20, 10);
  rect(100, 520, 20, 10);
  rect(100, 540, 20, 10);
  rect(100, 560, 20, 10);
  rect(100, 580, 20, 10);
  
  
  //gebouw 7
  fill(gebouw);
  rect(400, 50, 150, 550);
  //new fill
  fill(37, 150, 190);
  rect(420,60,110,200);
  textSize(30);
  //new fill
  fill('black');
  text('A',425,90);
  text('A',505,250);
  circle(435,100,10);
  circle(431,107,10);
  circle(439,107,10);
  triangle(433,118,435,107,436,118);

  circle(513,200,10);
  circle(509,207,10);
  circle(517,207,10);
  triangle(511,218,513,207,514,218);


  circle(475,125,30);
  circle(465,140,30);
  circle(485,140,30);
  triangle(461,190,475,130,489,190);

//new fill
fill(37, 150, 190);
rect(420,320,110,200);
//new fill
fill('red');
text('A',425,350);
text('A',505,510)
noStroke();
triangle(435,360,435,380,430,370);
triangle(435,360,435,380,440,370);

triangle(515,480,515,460,510,470);
triangle(515,480,515,460,520,470);

triangle(475,370,475,470,450,420);
triangle(475,370,475,470,500,420);
stroke(1);


//gebouw 9
if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 400){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
circle(645,180,130);
//new fill
  fill(gebouw);
  rect(580, 180, 130, 420);

    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 400){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
rect(600,180,20,500);
rect(670,180,20,500);
//new fill
fill('silver');
rect(600,390,20,30);
rect(670,230,20,30);
strokeWeight(2);
line(620,120,620,180);
line(670,120,670,180);
line(605,130,685,130);
line(585,160,705,160);
stroke('blue')
textSize(25);
text('restaurant',590,200);
stroke('black')
strokeWeight(1);

  //gebouw 10
  fill(gebouw);
  rect(680, 500, 100, 100);
  //new fill
  //fill(37, 150, 190);
    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
square(690,510,50);
square(690,570,50);


  //gebouw 8
  fill(gebouw);
  rect(500, 320, 100, 280);
  //new fill
  noStroke();
  //fill(37, 150, 190);
    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
  triangle(510,400,550,325,590,400);
  triangle(510,400,550,475,590,400);
  arc(550,535,70,100,71,17);
  arc(550,535,70,100,5,39);


  //gebouw 11
  stroke(1); 
  fill(gebouw);
  rect(750, 80, 55, 520);
  //fill(37, 150, 190);
    if(sunx >= -50 && sunx <= 849){
fill(37, 150, 190)
}
else if(moonx >= -48 && moonx <= 200){
  fill('yellow')
}
else if(moonx >= 200 && moonx <= 855){
  fill('darkblue')
}
rect(760,90,60,200);
rect(760,300,60,20);
rect(760,330,60,200);
rect(760,540,60,20);
rect(760,570,60,50);




  //neon bord
  //sushi
  strokeWeight(2);
  stroke('black');
  line(213, 360, 322, 360);
  line(213, 375, 322, 375);
  line(230, 360, 230, 399);
  line(275, 360, 275, 399);
  line(310, 360, 310, 399);
  stroke('red');
  textSize(50);
  noFill();
  text('sushi', 210, 380);

  //poker
  stroke(2);
  line(550, 65, 558, 65);
  line(550, 145, 558, 145);
  line(550, 105, 558, 105);
  noStroke();
  fill('grey');
  rect(558, 62, 15, 90);
  noFill();
  strokeWeight(0.5);
  textSize(20);
  stroke('lightgreen');
  verticalText('p\no\nk\ne\nr\n', 560, 75);
  textLeading(6);


  //bomen
  stroke(1);
  fill('orange');
  circle(150,500,20);
  fill('brown');
  rect(145,440,10,60);
  fill('green');
  noStroke();
  circle(137,440,30)
  circle(160,440,30)
  circle(150,420,30)

  //auto's
  //vrachtwagen
  noStroke();
  fill('lightblue');
  rect(155 + truckposition, 468, 20, 6);
  rect(158 + truckposition, 475, 15, 4)
  rect(160 + truckposition, 480, 10, 3)
  rect(208 + truckposition, 468, 20, 6);
  rect(211 + truckposition, 475, 15, 4);
  rect(213 + truckposition, 480, 10, 3);
  rect(230 + truckposition, 468, 20, 6)
  rect(233 + truckposition, 475, 15, 4);
  rect(235 + truckposition, 480, 10, 3);
  rect(260 + truckposition, 468, 10, 6)
  rect(262 + truckposition, 475, 6, 4);
  rect(263 + truckposition, 480, 4, 3)
  fill('blue');
  rect(150 + truckposition, 450, 100, 20);
  fill('red');
  rect(251 + truckposition, 450, 10, 20, 2)
  rect(251 + truckposition, 460, 20, 10)
  rect(230 + truckposition, 465, 22, 5)
    if (truckposition >= 850) {
    truckposition = -300
  }
  //jeep
  strokeWeight(0);
  fill('lightblue')
  rect(97 + jeepposition, 488, 10, 5);
  rect(99 + jeepposition, 494, 6, 3);
  rect(135 + jeepposition, 488, 10, 5);
  rect(137 + jeepposition, 494, 6, 3);
  fill('green');
  strokeWeight(0);
  rect(94 + jeepposition, 480, 56, 10, 3);
  rect(94 + jeepposition, 470, 36, 20);
  triangle(140 + jeepposition, 480, 130 + jeepposition, 470, 130 + jeepposition, 480);
  fill('lightblue');
  triangle(131 + jeepposition, 478, 131 + jeepposition, 472, 138 + jeepposition, 478);
  rect(119 + jeepposition, 471, 8, 8);
  rect(109 + jeepposition, 471, 8, 8);
  rect(96 + jeepposition, 471, 11, 8);
  stroke('black')
  strokeWeight(1);
  line(108 + jeepposition, 469, 108 + jeepposition, 479);
  line(95 + jeepposition, 469, 95 + jeepposition, 479);
  line(128 + jeepposition, 469, 128 + jeepposition, 479);
  strokeWeight(2);
  line(94 + jeepposition, 469, 129 + jeepposition, 469);
  if (jeepposition >= 900) {
    jeepposition = -200
  }
  noStroke();


  
  
  //koplampen
  if(moonx >= 0 && moonx < 850){
  fill('yellow')
   triangle(271 + truckposition,467,280 + truckposition,460,280 + truckposition,474)
  triangle(101 + cabrioposition,522,111 + cabrioposition,525,111 + cabrioposition,519)
   triangle(151 + jeepposition,487,156 + jeepposition,480,156 + jeepposition,494)
  }




  //straat strepen
  noStroke();
  //1
  fill('lightblue');
  rect(11, 509 +straatstreepy, 28, 5);
  rect(15, 515 +straatstreepy, 20, 4);
  rect(19, 521 +straatstreepy, 12, 2);
  //2
  rect(101, 509, 28, 5);
  rect(105, 515, 20, 4);
  rect(109, 521, 12, 2);
  //3
  rect(191, 509, 28, 5);
  rect(195, 515, 20, 4);
  rect(199, 521, 12, 2);
  //4
  rect(281, 509, 28, 5);
  rect(285, 515, 20, 4);
  rect(289, 521, 12, 2);
  //5
  rect(371, 509, 28, 5);
  rect(375, 515, 20, 4);
  rect(379, 521, 12, 2);
  //6
  rect(461, 509, 28, 5);
  rect(465, 515, 20, 4);
  rect(469, 521, 12, 2);
  //7
  rect(551, 509, 28, 5);
  rect(555, 515, 20, 4);
  rect(559, 521, 12, 2);
  //8
  rect(641, 509, 28, 5);
  rect(645, 515, 20, 4);
  rect(649, 521, 12, 2);
  //9
  rect(731, 509, 28, 5)
  rect(735, 515, 20, 4)
  rect(739, 521, 12, 2);
  //new fill
  fill('white')
  //1
  rect(10, 500 +straatstreepy, 30, 10);
  //2
  rect(100, 500, 30, 10);
  //3
  rect(190, 500, 30, 10)
  //4
  rect(280, 500, 30, 10);
  //5
  rect(370, 500, 30, 10);
  //6
  rect(460, 500, 30, 10);
  //7
  rect(550, 500, 30, 10);
  //8
  rect(640, 500, 30, 10);
  //9
  rect(730, 500, 30, 10);

  //cabrio
  noStroke();
  fill('blue');
  triangle(95 + cabrioposition, 515, 85 + cabrioposition, 509, 85 + cabrioposition, 515)
  fill('lightblue');
  rect(55 + cabrioposition, 524, 40, 5);
  rect(65 + cabrioposition, 533, 20, 4);
  rect(73 + cabrioposition, 542, 5, 2);
  fill('orange');
  stroke('black');
  strokeWeight(1)
  rect(50 + cabrioposition, 515, 50, 10, 3);
  if (cabrioposition > 800) {
    cabrioposition = -50
  } 





  //stoplicht
  fill('lightblue');
  rect(705, 562, 10, 5);
  rect(706, 568, 8, 3);
  fill('grey');
  rect(700, 490, 20, 50);
  rect(704, 540, 12, 23);

  if (stoplichtstatus == 0) {
    fill("red");
  }
  else {
    fill("black");
  }
  circle(licht, 500, 8);

  if (stoplichtstatus == 1) {
    fill("green");
  }
  else {
    fill("black");
  }
  circle(licht, 530, 8);

  if (stoplichtstatus == 2) {
    fill("orange");
  }
  else {
    fill("black");
  }
  circle(licht, 515, 8);  
  

  if(stoplichtstatus == 2){
  cabrioposition = cabrioposition + 3;
  truckposition += 1.5;
  jeepposition += 2;
  }
  else if(stoplichtstatus == 1){
   cabrioposition = cabrioposition + 6;
   truckposition += 3;
   jeepposition += 4
  }
 
  //bomen
  stroke(1);
  fill('orange');
  circle(450,570,30);
  fill('brown');
  rect(440,500,20,70);
  fill('green');
  noStroke();
  circle(435,490,40)
  circle(465,490,40)
  circle(450,470,40)
}
function verticalText(t, x, y) {
  push();
  const vt = t.split('').join('\n');
  text(vt, x, y);
  pop();
}