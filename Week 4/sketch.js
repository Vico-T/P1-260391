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
//vierkant
let groteVierkant = []
//rect
let groetRect = []
let hoogteRect = []
//ellipse
let groteEllipse = []
let hoogteEllipse = []


//snelheid
let speedCircle = []
let speedVierkant = []
let speedRect = []
let speedEllipse = []


//kleuren
let red = []
let green = []
let blue = []
let transparant = []
//geluid
let mySound;


async function setup() {
  createCanvas(800, 600);
  mySound = await loadSound('bubbles.mp3')


  // //vormen groter maken als ingedrukt
  // posXCircle = []
  //   posYCircle = []
  //   groteCircle = []

  // if(mouseX > posXCircle[i] && mouseX < posXCircle[i] + groteCircle[i] &&
  //   mouseY > posYCircle[i] && mouseY < posYCircle[i] + groteCircle[i]
  // ){
  //   groteCircle[i] + 500
  // }
}


function keyPressed() {
 if (keyCode == 32){
  mySound.play();
 }
 
  if (keyCode == 8) {
    console.log("backspace")
    // mySound.play();
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
    groetRect = []
    hoogteRect = []
    speedRect = []
    //ellipse
    posXEllipse = []
    posYEllipse = []
    groteEllipse = []
    hoogteEllipse = []
    speedEllipse = []

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
      groteCircle.push(int(random(10, 100)));
      //vierkant
      groteVierkant.push(int(random(10, 100)));
      //rect
      groetRect.push(int(random(10, 100)));
      hoogteRect.push(int(random(10, 200)));
      //ellipse
      groteEllipse.push(int(random(10, 100)));
      hoogteEllipse.push(int(random(10, 200)));


      //snelheid van het object
      //circle
      speedCircle.push(int(random(-8, -2)));
      speedCircle.push(int(random(2, 8)));
      //vierkant
      speedVierkant.push(int(random(-8, -2)));
      speedVierkant.push(int(random(2, 8)));
      //rect
      speedRect.push(int(random(-8, -2)));
      speedRect.push(int(random(2, 8)));
      //ellipse
      speedEllipse.push(int(random(-8, -2)));
      speedEllipse.push(int(random(2, 8)));


      //kleuren
      red.push(int(random(0, 255)));
      green.push(int(random(0, 255)));
      blue.push(int(random(0, 255)));
      transparant.push(int(random(20, 300)));

      // voor als ik de objecten alle kanten op heb weten te krijgen voor het trailen effect 
      // de backround onder draw moet uit
      // background(red[i],green[i],blue[i]);
    }
  }
}



function draw() {
  background("blue");
  
  for (let i = 0; i <= int(random(50, 300)); i++) {
  //snelheid
    //circle 
    posXCircle[i] = posXCircle[i] + speedCircle[i]
    posYCircle[i] = posYCircle[i] + speedCircle[i]
    //vierkant
    posXVierkant[i] = posXVierkant[i] + speedVierkant[i]
    posYVierkant[i] = posYVierkant[i] + speedVierkant[i]
    //rect
    posXRect[i] = posXRect[i] + speedRect[i]
    posYRect[i] = posYRect[i] + speedRect[i]
    //ellipse
    posXEllipse[i] = posXEllipse[i] + speedEllipse[i]
    posYEllipse[i] = posYEllipse[i] + speedEllipse[i]
  }
  


  //objecten
  for (let i = 0; i <= 30; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    circle(posXCircle[i], posYCircle[i], groteCircle[i])
  }
  for (let i = 0; i <= 30; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    square(posXVierkant[i], posYVierkant[i], groteVierkant[i])
  }
  for (let i = 0; i <= 10; i++) {
    fill(red[i], green[i], blue[i], transparant[i])
    rect(posXRect[i], posYRect[i], groetRect[i], hoogteRect[i])
  }
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
