let Player = 1
let RectW = 150
let RectH = 150
let RectB = 10
let Box1 = 0
let Box2 = 0
let Box3 = 0
let Box4 = 0
let Box5 = 0
let Box6 = 0
let Box7 = 0
let Box8 = 0
let Box9 = 0
let Win = 0
let Winner = 0
let Reset = 0
let buttonH = 30
let buttonW = 100
let buttonX = 600
let buttonY = 320



function setup() {
  createCanvas(800, 700);
}

function mousePressed() {
  if (mouseButton == LEFT) {
    console.log("Linker Muisknop")
    let RectX = 100
    let RectY = 100


    console.log('rectX is ' + RectX)
    if (Box1 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box1 = Player;
      Player++
      console.log('blokje 1 wordt geactiveerd')
    }

    RectX += RectW + RectB;
    console.log('rectX is ' + RectX + 'RectY is ' + RectY + 'RectH is ' + RectH)
    console.log('box 2 waarde' + Box2)
    if (Box2 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box2 = Player;
      Player++
      console.log('blokje 2 wordt geactiveerd')
    }

    RectX += RectW + RectB;
    if (Box3 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box3 = Player;
      Player++
    }

    RectX = 100;
    RectY += RectH + RectB;

    if (Box4 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box4 = Player;
      Player++
    }

    RectX += RectW + RectB;
    if (Box5 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box5 = Player;
      Player++
    }

    RectX += RectW + RectB;
    if (Box6 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box6 = Player;
      Player++
    }

    RectX = 100;
    RectY += RectH + RectB;

    if (Box7 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box7 = Player;
      Player++
    }

    RectX += RectW + RectB;
    if (Box8 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box8 = Player;
      Player++
    }

    RectX += RectW + RectB;
    if (Box9 == 0 &&
      mouseX > RectX && mouseX < RectX + RectW &&
      mouseY > RectY && mouseY < RectY + RectH
    ) {
      Box9 = Player;
      Player++
    }
  }
  if (Player >= 3) {
    Player = 1
  }
  if (Reset == 0 &&
    mouseX > buttonX && mouseX < buttonX + buttonW &&
    mouseY > buttonY && mouseY < buttonY + buttonH) {
    Box1 = 0
    Box2 = 0
    Box3 = 0
    Box4 = 0
    Box5 = 0
    Box6 = 0
    Box7 = 0
    Box8 = 0
    Box9 = 0
    console.log(Reset + 'reset')
  }
}

function draw() {
  background(190);
  text(mouseX, 100, 100);
  let RectX = 100
  let RectY = 100


  strokeWeight(0)
  console.log(Box1 + 'is de waarde van box 1')
  if (Box1 == 1) {
    fill("blue")
  } else if (Box1 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
  if (Box2 == 1) {
    fill("blue")
  } else if (Box2 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
  if (Box3 == 1) {
    fill("blue")
  } else if (Box3 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)


  RectX = 100
  RectY += RectH + RectB;

  strokeWeight(0)
  if (Box4 == 1) {
    fill("blue")
  } else if (Box4 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
  if (Box5 == 1) {
    fill("blue")
  } else if (Box5 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
  if (Box6 == 1) {
    fill("blue")
  } else if (Box6 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)

  RectX = 100
  RectY = RectH * 2.75 + RectB;


  strokeWeight(0)
  if (Box7 == 1) {
    fill("blue")
  } else if (Box7 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
  if (Box8 == 1) {
    fill("blue")
  } else if (Box8 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
  if (Box9 == 1) {
    fill("blue")
  } else if (Box9 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect(RectX, RectY, RectW, RectH)







  //winopties 
  //horizontaal
  if (Box1 != 0 &&
    Box1 == Box2 &&
    Box1 == Box3
  ) {
    if (Player == 1) {
      Winner = 2;
    } else if (Player == 2) {
      Winner = 1;
    }
    textSize(60)
    fill('black')
    text('player ' + Winner + ' wins', 160, 340)
  }



  if (Box4 != 0 &&
    Box4 == Box5 &&
    Box4 == Box6
  ) {
    if (Player == 1) {
      Winner = 2;
    } else if (Player == 2) {
      Winner = 1;
    }
    textSize(60)
    fill('black')
    text('player ' + Winner + ' wins', 160, 340)
  }



  if (Box7 != 0 &&
    Box7 == Box8 &&
    Box7 == Box9
  ) {
    if (Player == 1) {
      Winner = 2;
    } else if (Player == 2) {
      Winner = 1;
    }
    textSize(60)
    fill('black')
    text('player ' + Winner + ' wins', 160, 340)
  }




  //verticaal
  if (Box1 != 0 &&
    Box1 == Box4 &&
    Box1 == Box7
  ) {
    if (Player == 1) {
      Winner = 2;
    } else if (Player == 2) {
      Winner = 1;
    }
    textSize(60)
    fill('black')
    text('player ' + Winner + ' wins', 160, 340)
  }



  if (Box2 != 0 &&
    Box2 == Box5 &&
    Box2 == Box8
  ) {
    if (Player == 1) {
      Winner = 2;
    } else if (Player == 2) {
      Winner = 1;
    }
    textSize(60)
    fill('black')
    text('player ' + Winner + ' wins', 160, 340)
  }



  if (Box3 != 0 &&
    Box3 == Box6 &&
    Box3 == Box9
  ) {
    if (Player == 1) {
      Winner = 2;
    } else if (Player == 2) {
      Winner = 1;
    }
    textSize(60)
    fill('black')
    text('player ' + Winner + ' wins', 160, 340)
  }



  //diagonaal
  if (Box1 != 0 &&
    Box1 == Box5 &&
    Box1 == Box9
  ) {
    if (Player == 1) {
      Winner = 2;
    } else if (Player == 2) {
      Winner = 1;
    }
    textSize(60)
    fill('black')
    text('player ' + Winner + ' wins', 160, 340)
  }




  if (Box3 != 0 &&
    Box3 == Box5 &&
    Box3 == Box7
  ) {
    if (Player == 1) {
      Winner = 2;
    } else if (Player == 2) {
      Winner = 1;
    }
    textSize(60)
    fill('black')
    text('player ' + Winner + ' wins', 160, 340)
  }
  if (Box1 != 0 && Box2 != 0 && Box3 != 0 && Box4 != 0 && Box5 != 0 && Box6 != 0 && Box7 != 0 && Box8 != 0 && Box9 != 0) {
    textSize(60)
    fill("black")
    text("It's a draw!", 200, 200)
  }
   fill('white');
  rect(buttonX, buttonY, buttonW, buttonH)
  textSize(30)
  fill('black');
  text('restart', 610, 345);
}
