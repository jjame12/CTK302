var mic;
var vol;
let sunY = 35 ;
let state = 0;
let timer = 0;

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  noStroke() ;

  // code for initializing mic in.
  mic = new p5.AudioIn();  // what does "new" mean?
  mic.start();


}

function draw() {
  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1


  switch (state) {
    case 0:
  background('black');
      sun();
      text('click to start',
        20, 10, 690, 500);

      break;

    case 1:
    // check how loud the input is
    if (vol > .10) { // if the volume is LOUD?
    sunY=sunY+5;
    if (sunY> height){
      state = 2 ;
      sunY = 35 ;

    }
   }
    background('brown');
    sun(sunY);
    text('Don\'t yell',
      20, 10, 690, 500);

      break;

    case 2:
    background('pink');
    sun(sunY);
    text('stop you are upsetting the sun',
      20, 10, 690, 500);
      break;
    
  }

  fill('white');
  text(mouseX + ', ' + mouseY, 20, 360);
}

function mouseReleased() {
  print(mouseX + ', ' + mouseY);
  state++ ;
  if (state>4) {
    state = 0;

  }
}

function sun(y) {
  fill('brown')
  triangle(312, 253, 466, 254, 382, 167);

  fill('purple')
  square(314, 252, 150);
  //tree base
  fill('#4b2b0f');
  rect(58, 157, 63, 200);
  //tree leaves
  fill('green');
  ellipse(84, 68, 200, 200);


  fill('yellow');
  ellipse(300, y, 100, 100);


  //text

  textSize(15);
  textAlign(CENTER);
  fill(255);


}
function cryingsun(){
    background('gray')
    fill('brown')
    triangle(312, 253, 466, 254, 382, 167);

    fill('purple')
    square(314, 252, 150);
    //tree base
    fill('#4b2b0f');
    rect(58, 157, 63, 200);
    //tree leaves
    fill('green');
    ellipse(84, 68, 200, 200);


    fill('yellow');
    ellipse(300, 35, 100, 100);
    fill('blue')
    circle(276, 62, 20);
    circle(317, 61, 20);
    circle(280, 108, 20);
    circle(317, 109, 20);
    circle(286, 141, 20);
    circle(322, 143, 20);
    //grass
    fill('green')
    triangle(163, 459, 190, 459, 175, 323);
    triangle(165, 500, 200, 500, 185, 343);
}

function touchStarted() {
  getAudioContext().resume();
}
