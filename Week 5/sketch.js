let buttons = []
let blokken = [];
let achtergrond = [];
let afbeeldingen = [];
let huidigeVraag = 0;
let vragenKleinSchip = [
  {
    vraag1: "welke koers overstag?",
    1: "Aan de wind",
    2: "Voor de wind",
    3: "Halve wind",
    4: "In de wind",
    goedAntwoord: 1
  },
  {
    vraag2: "aan welk onderdeel van de boot zit het zeil vast?",
    1: "stag",
    2: "grootschoot",
    3: "mast",
    4: "piekenval",
    goedAntwoord: 3
  }
];

function preload(){
achtergrond.push(loadImage('kleinzeilboot/achtergrond.jpeg'));
afbeeldingen.push(loadImage('kleinzeilboot/windroos.jpeg'));
}


function setup() {
  createCanvas(800, 600);

  for(let j = 0; j < vragenKleinSchip.length; j++){
  for (let i = 1; i <= 4; i++) {
    button = createButton(vragenKleinSchip[j][i])
    button[0][1].positioin(100,400);
    buttons.push(button)
  }
}
}

function draw() {
  background(achtergrond[0]);
if(huidigeVraag == 0){
 buttons[0].show(vragenKleinSchip[0]);
 buttons[1].hide(vragenKleinSchip[1]);
}
if(huidigeVraag == 1){
  buttons[0].hide(vragenKleinSchip[0]);
  buttons[1].show(vragenKleinSchip[1]);
}
}


