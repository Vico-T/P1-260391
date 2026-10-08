//buttons
let buttons = [];
let buttonsPlace = {
  posX: [250, 75, 425, 75, 425, 250],
  posY: [250, 400, 400, 500, 500, 450],
  breed: [300, 300, 300, 300, 300, 300],
  hoog: [100, 80, 80, 80, 80, 100]
}
let score = 0;

let functie = [start, buttonA, buttonB, buttonC, buttonD, buttonR];
let names = ["START", "A", "B", "C", "D", "RESTART"]



let achtergrond = [];
let afbeeldingen = [];

let huidigeVraag = -1;

let vragen = [{
  vraag: "1. Met welke koers kan je overstag?",
  antwoorden: ["aan de wind", "voor de wind", "halve wind", "in de wind"],
  correctantwoord: 0
},
{
  vraag: "2. Aan welk onderdeel van de boot zit je zeil vast?",
  antwoorden: ["stag", "grootschoot", "mast", "piekenval"],
  correctantwoord: 2
},
{
  vraag: "3. Welke manoeuvre kan je doen als je voor de wind zeild?",
  antwoorden: ["aanleggen hoger wal", "gijpen", "afvaren lagerwal", "wrikken"],
  correctantwoord: 1
},
{
  vraag: "4. Hoe heet het kleine zeil voor de mast?",
  antwoorden: ["piek", "val", "leuver", "fok"],
  correctantwoord: 3
},
{
  vraag: "5. Hoe heet het als je boot omslaat?",
  antwoorden: ["kapseisen", "omslaan", "liggen", "zwemmen"],
  correctantwoord: 0
},
{
  vraag: "6. Schuiner gaan is beter.",
  antwoorden: ["waar", "niet waar"],
  correctantwoord: 1
},
{
  vraag: "7. Wanneer kan je je vok tegenover je grootzeil houden?",
  antwoorden: ["bij halve wind", "voor de wind", "aan land", "tijdens een storm"],
  correctantwoord: 1
},
{
  vraag: "8. Hoe loef je efficient op?",
  antwoorden: ["grotzeil aantrekken", "fok aantrekken", "alles los laten", "riem in het water steken"],
  correctantwoord: 0
},
{
  vraag: "9. Welk naam heeft dit onderdeel?",
  antwoorden: ["hanenkam", "doft", "piekenval", "zwaard"],
  correctantwoord: 3
},
{
  vraag: "10. Waarmee trek je het grootzeil aan?",
  antwoorden: ["riem", "flonder", "grootschoot", "zijstag"],
  correctantwoord: 2
}
]

let answerButtonA
let answerButtonB
let answerButtonC
let answerButtonD
function preload() {
  //achtergrond
  achtergrond.push(loadImage('kleinzeilboot/achtergrond.jpeg'));
  achtergrond.push(loadImage('kleinzeilboot/achtergrond1.jpeg'));
  //afbeeldingen
  afbeeldingen.push(loadImage('kleinzeilboot/windroos.jpeg'));
  afbeeldingen.push(loadImage('kleinzeilboot/bootonderdelen.png'));
  afbeeldingen.push(loadImage('kleinzeilboot/schuin.webp'));
  afbeeldingen.push(loadImage('kleinzeilboot/omgeslagen.webp'));
  afbeeldingen.push(loadImage('kleinzeilboot/boot.png'));
  afbeeldingen.push(loadImage('kleinzeilboot/zeilboot.webp'));
  afbeeldingen.push(loadImage('kleinzeilboot/oploeven.jpg'));
  afbeeldingen.push(loadImage('kleinzeilboot/zwaard.png'));
}


function setup() {
  createCanvas(800, 600);

  //buttons
  for (let i = 0; i < names.length; i++) {
    let button = createButton(names[i]);
    button.position(buttonsPlace.posX[i], buttonsPlace.posY[i]);
    button.size(buttonsPlace.breed[i], buttonsPlace.hoog[i]);
    button.mousePressed(functie[i]);
    buttons.push(button);
    if (i >= 1) {
      button.hide();
    }
  }

  answerButtonA = createButton(vragen[0].antwoorden[0]);
  answerButtonA.position(buttonsPlace.posX[1], buttonsPlace.posY[1]);
  answerButtonA.size(buttonsPlace.breed[1], buttonsPlace.hoog[1]);
  answerButtonA.mousePressed(functie[1]);
  buttons.push(answerButtonA);
  answerButtonB = createButton(vragen[0].antwoorden[1]);
  answerButtonB.position(buttonsPlace.posX[2], buttonsPlace.posY[2]);
  answerButtonB.size(buttonsPlace.breed[2], buttonsPlace.hoog[2]);
  answerButtonB.mousePressed(functie[2]);
  buttons.push(answerButtonB);
  answerButtonC = createButton(vragen[0].antwoorden[2]);
  answerButtonC.position(buttonsPlace.posX[3], buttonsPlace.posY[3]);
  answerButtonC.size(buttonsPlace.breed[3], buttonsPlace.hoog[3]);
  answerButtonC.mousePressed(functie[3]);
  buttons.push(answerButtonC);
  answerButtonD = createButton(vragen[0].antwoorden[3]);
  answerButtonD.position(buttonsPlace.posX[4], buttonsPlace.posY[4]);
  answerButtonD.size(buttonsPlace.breed[4], buttonsPlace.hoog[4]);
  answerButtonD.mousePressed(functie[4]);
  buttons.push(answerButtonD);

  answerButtonA.hide();
  answerButtonB.hide();
  answerButtonC.hide();
  answerButtonD.hide();
}




function start() {
  buttons[0].hide();
  answerButtonA.show();
  answerButtonB.show();
  answerButtonC.show();
  answerButtonD.show();
  buttons[5].hide();
  huidigeVraag += 1;
}

function updateButtons() {
  answerButtonA.html(vragen[huidigeVraag].antwoorden[0])
  answerButtonB.html(vragen[huidigeVraag].antwoorden[1])

  if (vragen[huidigeVraag].antwoorden.length > 2) {
    answerButtonC.show();
    answerButtonD.show();
    answerButtonC.html(vragen[huidigeVraag].antwoorden[2])
    answerButtonD.html(vragen[huidigeVraag].antwoorden[3])
  }
  else {
    answerButtonC.hide();
    answerButtonD.hide();
  }
}

function buttonA() {
  if (vragen[huidigeVraag].correctantwoord === 0) {
    score += 1
  }
  huidigeVraag += 1
  updateButtons();
}


function buttonB() {
  if (vragen[huidigeVraag].correctantwoord === 1) {
    score += 1
  }
  huidigeVraag += 1
  updateButtons();
}


function buttonC() {
  if (vragen[huidigeVraag].correctantwoord === 2) {
    score += 1
  }
  huidigeVraag += 1
  updateButtons();
}


function buttonD() {
  if (vragen[huidigeVraag].correctantwoord === 3) {
    score += 1
  }
  huidigeVraag += 1
  updateButtons();
}


function buttonR() {
  huidigeVraag = -1
  buttons[0].show();
  answerButtonA.hide();
  answerButtonB.hide();
  answerButtonC.hide();
  answerButtonD.hide();
  buttons[5].hide();
  score = 0
}





function draw() {
  achtergrond[1].resize(10000, 0);
  background(achtergrond[1]);
  if (huidigeVraag >= 0 && huidigeVraag < 10) {
    textSize(40);
    text("SCORE: "+ score, 10, 40);
  }

  //size van onderdelen in de vragen
  afbeeldingen[0].resize(300, 0);
  afbeeldingen[1].resize(250, 0);
  afbeeldingen[2].resize(250, 0);
  afbeeldingen[3].resize(300, 0);
  afbeeldingen[4].resize(200, 0);
  afbeeldingen[5].resize(200, 0);
  afbeeldingen[6].resize(400, 0);
  afbeeldingen[7].resize(180, 0);




  textSize(30)
  //vragen
  //vraag 1
  if (huidigeVraag === 0) {
    text(vragen[0].vraag, 180, 100);
    image(afbeeldingen[0], 250, 130);
  }

  //vraag 2
  if (huidigeVraag === 1) {
    text(vragen[1].vraag, 100, 100);
    image(afbeeldingen[1], 270, 130);
  }

  //vraag 3
  if (huidigeVraag === 2) {
    text(vragen[2].vraag, 10, 100);
    image(afbeeldingen[0], 250, 130);
  }

  //vraag 4
  if (huidigeVraag === 3) {
    text(vragen[3].vraag, 140, 100);
    image(afbeeldingen[4], 300, 140);
  }

  //vraag 5
  if (huidigeVraag === 4) {
    text(vragen[4].vraag, 180, 100)
    image(afbeeldingen[3], 270, 170);
  }

  //vraag 6
  if (huidigeVraag === 5) {
    text(vragen[5].vraag, 250, 100)
    image(afbeeldingen[2], 270, 150);
  }

  //vraag 7
  if (huidigeVraag === 6) {
    text(vragen[6].vraag, 30, 100)
    image(afbeeldingen[5], 290, 150);
  }

  //vraag 8
  if (huidigeVraag === 7) {
    text(vragen[7].vraag, 250, 100)
    image(afbeeldingen[6], 240, 140);
  }

  //vraag 9
  if (huidigeVraag === 8) {
    text(vragen[8].vraag, 200, 100)
    image(afbeeldingen[7], 290, 150);
  }

  //vraag 10
  if (huidigeVraag === 9) {
    text(vragen[9].vraag, 180, 100)
    image(afbeeldingen[5], 270, 150);
  }

  if (huidigeVraag === 10) {
  buttons[0].hide();
  answerButtonA.hide();
  answerButtonB.hide();
  answerButtonC.hide();
  answerButtonD.hide();
  buttons[5].show();
    textSize(70);
    text("Jou Score: " + score, 150, 300);
  }
}