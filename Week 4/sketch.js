//positie van het object
//circle
let posXCircle = []
let posYCircle = []
//vierkant
let posXVierkant = []
let posYVierkant = []
//rect
let posXRect = []
let posYRect = []
//ellipse
let posXEllipse = []
let posYEllipse = []


//grote van het object
//circle
let groteCircle = []
let circleMin = 10
let circleMax = 100
//vierkant
let groteVierkant = []
let vierkantMin = 10
let vierkantMax = 100
//rect
let groteRect = []
let hoogteRect = []
let rectGroteMin = 10
let rectGroteMax = 100
let rectHoogteMin = 20
let rectHoogteMax = 200
//ellipse
let groteEllipse = []
let hoogteEllipse = []
let ellipseGroteMin = 10
let ellipseGroteMax = 100
let ellipseHoogteMin = 20
let ellipseHoogteMax = 200
//boost en vermindering
let groteBoost = []
let groteMin = []
let groteBoostMin = 1
let groteBoostMax = 3
let groteMinMin = -1
let groteMinMax = -3


//snelheid
//circle
let speedXCircle = []
let speedYCircle = []
let speedCircleMin = -8
let speedCircleMax = 8

//vierkant
let speedXVierkant = []
let speedYVierkant = []
let speedVierkantMin = -8
let speedVierkantMax = 8

//rect
let speedXRect = []
let speedYRect = []
let speedRectMin = -8
let speedRectMax = 8

//ellipse
let speedXEllipse = []
let speedYEllipse = []
let speedEllipseMin = -8
let speedEllipseMax = 8



//kleuren
let red = []
let green = []
let blue = []
let transparant = []


//geluid
let mySound;

//pauze
let spatie = false


async function setup() {
  createCanvas(800, 600);
  mySound = await loadSound('bubbles.mp3')
  regenerate();
}


function keyPressed() {
  //geluid
  if (keyCode == 13) {
    mySound.play();
  }

  //pauze
  if(keyCode == 32){
    spatie = !spatie
    console.log("spatie waarde "+ spatie)
  }

// generator knop
  if (keyCode == 8) {
    console.log("backspace")
    regenerate();
  }

  //object grote aanpassen
  //circle en rect groter
  if (keyCode == 38) {
    console.log("pijltje omhoog ")
    for (i = 0; i < groteCircle.length; i++) {
      for(j = 0; j < groteBoost.length; j++){
      groteCircle[i] = groteCircle[i] + groteBoost[j]
    }
  }
         for (i = 0; i < groteRect.length; i++) {
          for(j = 0; j < groteBoost.length; j++){
      groteRect[i] = groteRect[i] + groteBoost[j]
    }
  }
  }

  //circle en rect kleiner
   if (keyCode == 40) {
    console.log("pijltje laag ")
    for (i = 0; i < groteCircle.length; i++) {
      for(j = 0; j < groteBoost.length; j++){
      groteCircle[i] = groteCircle[i] - groteBoost[j]
    }
  }
     for (i = 0; i < groteRect.length; i++) {
      for(j = 0; j < groteBoost.length; j++){
      groteRect[i] = groteRect[i] - groteBoost[j]
      }
    }
  }

//vierkant en ellipse groter
  if (keyCode == 39) {
    console.log("pijltje rechts ")
    for (i = 0; i < groteVierkant.length; i++) {
      for(j = 0; j < groteBoost.length; j++){
      groteVierkant[i] = groteVierkant[i] + groteBoost[j]
    }
  }
     for (i = 0; i < groteEllipse.length; i++) {
      for(j = 0; j < groteBoost.length; j++){
      groteEllipse[i] = groteEllipse[i] + groteBoost[j]
      }
    }
  }
  //vierkant en ellipse kleiner
  if (keyCode == 37) {
    console.log("pijltje links ")
    for (i = 0; i < groteVierkant.length; i++) {
      for(j = 0; j < groteBoost.length; j++){
      groteVierkant[i] = groteVierkant[i] - groteBoost[j]
    }
  }
     for (i = 0; i < groteEllipse.length; i++) {
      for(j = 0; j < groteBoost.length; j++){
      groteEllipse[i] = groteEllipse[i] - groteBoost[j]
    }
  }
  }
}

function regenerate() {
  //circle
  posXCircle = []
  posYCircle = []
  groteCircle = []
  speedCircle = []
  //vierkant
  posXVierkant = []
  posYVierkant = []
  groteVierkant = []
  speedVierkant = []
  //rect
  posXRect = []
  posYRect = []
  groteRect = []
  hoogteRect = []
  speedRect = []
  //ellipse
  posXEllipse = []
  posYEllipse = []
  groteEllipse = []
  hoogteEllipse = []
  speedEllipse = []
  //boost en vermindering
  groteBoost = []
  groteMin = []



  //code om de waardes te randomizen
  for (let i = 0; i <= random(50, 300); i++) {
    console.log("text" + i)

    //positie van het object
    //circle
    posXCircle.push(int(random(0, 1000)));
    posYCircle.push(int(random(0, 800)));
    //vierkant
    posXVierkant.push(int(random(0, 1000)));
    posYVierkant.push(int(random(0, 800)));
    //rect
    posXRect.push(int(random(0, 1000)));
    posYRect.push(int(random(0, 800)));
    //ellipse
    posXEllipse.push(int(random(0, 1000)));
    posYEllipse.push(int(random(0, 800)));

    //grote van het object
    //circle
    groteCircle.push(int(random(circleMin, circleMax)));
    //vierkant
    groteVierkant.push(int(random(vierkantMin, vierkantMax)));
    //rect
    groteRect.push(int(random(rectGroteMin, rectGroteMax)));
    hoogteRect.push(int(random(rectHoogteMin, rectHoogteMax)));
    //ellipse
    groteEllipse.push(int(random(ellipseGroteMin, ellipseGroteMax)));
    hoogteEllipse.push(int(random(ellipseHoogteMin, ellipseHoogteMax)));

    //boost en vermindering
    groteBoost.push(int(random(groteBoostMin, groteBoostMax)));
    groteMin.push(int(random(groteMinMin, groteMinMax)));


    //snelheid van het object
    //circle
    speedXCircle.push(int(random(speedCircleMin, speedCircleMax)));
    if(speedXCircle[i] == 0){
      speedXCircle[i] = speedXCircle[i] + random(2,8)
    }
     speedYCircle.push(int(random(speedCircleMin, speedCircleMax)));
    if(speedYCircle[i] == 0){
      speedYCircle[i] = speedYCircle[i] + random(2,8)
    }    
    //vierkant
    speedXVierkant.push(int(random(speedVierkantMin, speedVierkantMax)));
    if(speedXVierkant[i] == 0){
      speedXVierkant[i] = speedXVierkant[i] + random(2,8)
    }  
      speedYVierkant.push(int(random(speedVierkantMin, speedVierkantMax)));
    if(speedYVierkant[i] == 0){
      speedYVierkant[i] = speedYVierkant[i] + random(2,8)
    }  
    //rect
    speedXRect.push(int(random(speedRectMin, speedRectMax)));
    if(speedXRect[i] == 0){
      speedXRect[i] = speedXRect[i] + random(2,8)
    }  
     speedYRect.push(int(random(speedRectMin, speedRectMax)));
    if(speedYRect[i] == 0){
      speedYRect[i] = speedYRect[i] + random(2,8)
    }  
    //ellipse
    speedXEllipse.push(int(random(speedEllipseMin, speedEllipseMax)));
    if(speedXEllipse[i] == 0){
      speedXEllipse[i] = speedXEllipse[i] + random(2,8)
    }  
    speedYEllipse.push(int(random(speedEllipseMin, speedEllipseMax)));
    if(speedYEllipse[i] == 0){
      speedYEllipse[i] = speedYEllipse[i] + random(2,8)
    } 


    //kleuren
    red.push(int(random(0, 255)));
    green.push(int(random(0, 255)));
    blue.push(int(random(0, 255)));
    transparant.push(int(random(20, 300)));


    // voor als ik de objecten alle kanten op heb weten te krijgen voor het trailen effect 
    // de backround onder draw moet uit
    background(red[i],green[i],blue[i]);
  }
}




function draw() {
  // background("blue");
  
  if(spatie == false){
  //snelheid
  //circle 
    for (let i = 0; i < speedXCircle.length; i++) {
    posXCircle[i] = posXCircle[i] + speedXCircle[i]
    }
    for(let i = 0; i < speedYCircle.length; i++){
    posYCircle[i] = posYCircle[i] + speedYCircle[i]
    }
    //vierkant
      for (let i = 0; i < speedXVierkant.length; i++) {
    posXVierkant[i] = posXVierkant[i] + speedXVierkant[i]
      }
      for(let i = 0; i < speedYVierkant.length; i++){
    posYVierkant[i] = posYVierkant[i] + speedYVierkant[i]
      }
    //rect
      for (let i = 0; i < speedXRect.length; i++) {
    posXRect[i] = posXRect[i] + speedXRect[i]
      }
    for(let i = 0; i < speedYRect.length; i++){
    posYRect[i] = posYRect[i] + speedYRect[i]
      }
    //ellipse
      for (let i = 0; i < speedXEllipse.length; i++) {
    posXEllipse[i] = posXEllipse[i] + speedXEllipse[i]
      }
      for(let i = 0; i < speedYEllipse.length; i++){
    posYEllipse[i] = posYEllipse[i] + speedYEllipse[i]
  }
}
  



  //objecten
  //circle
  for (let i = 0; i <= 30; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    circle(posXCircle[i], posYCircle[i], groteCircle[i])
  }
  //vierkant
  for (let i = 0; i <= 30; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    square(posXVierkant[i], posYVierkant[i], groteVierkant[i])
  }
  //rect
  for (let i = 0; i <= 10; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    rect(posXRect[i], posYRect[i], groteRect[i], hoogteRect[i])
  }
  //ellipse
  for (let i = 0; i <= 30; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    ellipse(posXEllipse[i], posYEllipse[i], groteEllipse[i], hoogteEllipse[i])

    //loopfunctie
    //circle
    if (posXCircle[i] >= 850) {
      posXCircle[i] = -50
    } else if (posXCircle[i] <= -50) {
      posXCircle[i] = 850
    }
    if (posYCircle[i] >= 650) {
      posYCircle[i] = -50
    } else if (posYCircle[i] <= -50) {
      posYCircle[i] = 650
    }

    //vierkant
    if (posXVierkant[i] >= 850) {
      posXVierkant[i] = -50
    } else if (posXVierkant[i] <= -50) {
      posXVierkant[i] = 850
    }
    if (posYVierkant[i] >= 650) {
      posYVierkant[i] = -50
    } else if (posYVierkant[i] <= -50) {
      posYVierkant[i] = 650
    }

    //rect
    if (posXRect[i] >= 850) {
      posXRect[i] = -50
    } else if (posXRect[i] <= -50) {
      posXRect[i] = 850
    }
    if (posYRect[i] >= 650) {
      posYRect[i] = -50
    } else if (posYRect[i] <= -50) {
      posYRect[i] = 650
    }


    //ellipse
    if (posXEllipse[i] >= 850) {
      posXEllipse[i] = -50
    } else if (posXEllipse[i] <= -50) {
      posXEllipse[i] = 850
    }
    if (posYEllipse[i] >= 650) {
      posYEllipse[i] = -50
    } else if (posYEllipse[i] <= -50) {
      posYEllipse[i] = 650
    }
  }
}
