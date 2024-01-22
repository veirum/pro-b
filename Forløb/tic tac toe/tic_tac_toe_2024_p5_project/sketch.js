//***********************************************************************************
//* Tic Tac Toe
//* Programmering B,
//* af Jeppe Veirum Larsen, Januar 2024
//*
//* README!
//* Forløbet bruger en extension'en TODO Highlight v2, under hver TODO er der TIP
//* og OPGAVE. TIP kommer med små hints til hvad man KAN bruge, OPGAVE beskrive hvad
//* der SKAL laves.
//***********************************************************************************

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //TODO: Lav en spilleplade på 3 x 3 felter #
  //-------------------------------------------------
  // TIP:                                           |
  // line(width / 3, 0, width / 3, height);         |
  //-------------------------------------------------

  //-------------------------------------------------
  // OPGAVE:                                        |
  // - Lav spilleplade ud af 4 streger.             |
  //-------------------------------------------------

  //SKRIV DIN KODE HER!!! OG SLET MIG!!!

  //TODO: Lav et X
  //-------------------------------------------------
  // TIP:                                           |
  // line() x 2;                                    |
  // Tegn ud fra orego(0,0), tak mig senere         |
  //-------------------------------------------------

  //-------------------------------------------------
  // OPGAVE:                                        |
  // - Tegn et X i øverste venstre felt             |
  //-------------------------------------------------

  //SKRIV DIN KODE HER!!! OG SLET MIG!!!

  //TODO: Lav et O
  //-------------------------------------------------
  // TIP:                                           |
  // circle() / ellipse()                           |
  // noFill()                                       |
  // Tegn ud fra orego(0,0), tak mig senere         |
  //-------------------------------------------------

  //-------------------------------------------------
  // OPGAVE:                                        |
  // - Tegn et O i øverste venstre felt             |
  //-------------------------------------------------

  //SKRIV DIN KODE HER!!! OG SLET MIG!!!

  //TODO: Hvilket felt er musen over?
  //------------------------------------------------------------------------------
  // TIP:                                                                        |
  // console.log(mouseX, mouseY);                                                |
  // Øverste venstre felt:                                                       |
  // if(mouseX>0 && mouseX < witdh/3) && mouseY>0 && mouseY < height/3){         |
  //    position = 0;                                                            |
  // }                                                                           |
  //------------------------------------------------------------------------------

  //-------------------------------------------------------------------------
  // OPGAVE:                                                                |
  // - Definer alle 9 felter og print i console hvilket felt musen er over  |
  // - Gem derefter dette tal i en variabel kaldet position. Brug (0 - 8)   |
  //-------------------------------------------------------------------------

  //SKRIV DIN KODE HER!!! OG SLET MIG!!!

  //TODO: Placer en brik 1
  //-------------------------------------------------
  // TIP:                                           |
  // Array til at vise hvad der er på pladen        |
  // let plade = [0, 0, 0, 0, 0, 0, 0, 0, 0];       |
  // 0: ingen brik, 1: spiler 1, 2: spiller 2       |
  //-------------------------------------------------

  //TODO: Placer en brik 2
  //-------------------------------------------------
  // TIP:                                           |
  // circle() / ellipse()                           |
  // noFill()                                       |
  // Tegn ud fra orego(0,0), tak mig senere         |
  //-------------------------------------------------

  //TODO: Tegn vores data
  //-------------------------------------------------
  // TIP:                                           |
  // circle() / ellipse()                           |
  // noFill()                                       |
  // Tegn ud fra orego(0,0), tak mig senere         |
  //-------------------------------------------------

  //TODO: Spillebrikker som en Funktion

  //---------------------------------------------------------------------------------------------
  // TIP:                                                                                       |
  //  function circle(arrayPosition) {                                                          |
  //    if(spilleplade[i]== 1){                                                                 |
  //    circle(width / 6 + (width / 3) * arrayPosition, height / 6 + y * (arrayPosition % 3));  |
  //                        }                                                                   |
  //     ?Hvad med krydset og et tomt felt?                                                     |
  //  }                                                                                         |
  //                                                                                            |
  //---------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------
  // OPGAVE:                                                              |
  // - Se på tippet over. Overfør den ide på vores kryds og et tomt felt  |
  //-----------------------------------------------------------------------

  //TODO: HVIS DU ER FÆRDIG: Pimp dit spil
  //-------------------------------------------------
  // TIP:                                           |
  // Brug billeder istedet for line() og circle()   |
  // Optimer din kode, kan du lave det kortere?     |
  //                                                |
  //-------------------------------------------------
}
