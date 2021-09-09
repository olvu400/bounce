/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

// variabelen voor stuiteren
var x = [50, 90, 130, 170, 210];
var y = [50, 90, 130, 170, 210];
var SpeedX = [1, 3, 4, 5, 2];
var SpeedY = [1, 3, 4, 5, 2];

function draw() {

  //teken achtergrond
  background('black');

  // teken een cirkel, en laat deze stuiteren
  fill(255, 255, 255);
  ellipse(x[0], y[0], 80, 80);
  
  fill(0, 255, 255);
  ellipse(x[1], y[1], 80, 80);
  
  fill(255, 0, 255);
  ellipse(x[2], y[2], 80, 80);
  
  fill(255, 255, 0);
  ellipse(x[3], y[3], 80, 80);
  
  fill(0, 0, 255);
  ellipse(x[4], y[4], 80, 80);

  
  //bal 0
    //positie veranderen
    x[0] = x[0] + SpeedX[0];
    y[0] = y[0] + SpeedY[0];
    
    //borders
    if(y[0] > 680) {
      SpeedY[0] = SpeedY[0] * -1;
    }
    if(y[0] < 40) {
      SpeedY[0] = SpeedY[0] * -1;
    }
    if(x[0] > 1240) {
      SpeedX[0] = SpeedX[0] * -1;
    }
    if(x[0] < 40) {
      SpeedX[0] = SpeedX[0] * -1;
    }

  //bal 1
    //positie veranderen
    x[1] = x[1] + SpeedX[1];
    y[1] = y[1] + SpeedY[1];
    
    //borders
    if(y[1] > 680) {
      SpeedY[1] = SpeedY[1] * -1;
    }
    if(y[1] < 40) {
      SpeedY[1] = SpeedY[1] * -1;
    }
    if(x[1] > 1240) {
      SpeedX[1] = SpeedX[1] * -1;
    }
    if(x[1] < 40) {
      SpeedX[1] = SpeedX[1] * -1;
    }

  //bal 2
    //positie veranderen
    x[2] = x[2] + SpeedX[2];
    y[2] = y[2] + SpeedY[2];
    
    //borders
    if(y[2] > 680) {
      SpeedY[2] = SpeedY[2] * -1;
    }
    if(y[2] < 40) {
      SpeedY[2] = SpeedY[2] * -1;
    }
    if(x[2] > 1240) {
      SpeedX[2] = SpeedX[2] * -1;
    }
    if(x[2] < 40) {
      SpeedX[2] = SpeedX[2] * -1;
    }

  //bal 3
    //positie veranderen
    x[3] = x[3] + SpeedX[3];
    y[3] = y[3] + SpeedY[3];
    
    //borders
    if(y[3] > 680) {
      SpeedY[3] = SpeedY[3] * -1;
    }
    if(y[3] < 40) {
      SpeedY[3] = SpeedY[3] * -1;
    }
    if(x[3] > 1240) {
      SpeedX[3] = SpeedX[3] * -1;
    }
    if(x[3] < 40) {
      SpeedX[3] = SpeedX[3] * -1;
    }

  //bal 4
    //positie veranderen
    x[4] = x[4] + SpeedX[4];
    y[4] = y[4]+ SpeedY[4];
    
    //borders
    if(y[4] > 680) {
      SpeedY[4] = SpeedY[4] * -1;
    }
    if(y[4] < 40) {
      SpeedY[4] = SpeedY[4] * -1;
    }
    if(x[4] > 1240) {
      SpeedX[4] = SpeedX[4] * -1;
    }
    if(x[4] < 40) {
      SpeedX[4] = SpeedX[4] * -1;
    }
  
}

