let state = 0;
let timer = 0;
let x = 0;
let velocity = 1 ;


function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER) ;
  rectMode(CENTER) ;
}

function draw() {
  background(100);
fill('yellow');
rect(width/2, hreight/2, 200, 600) ;
//car rectcode
fill('purple')
rect(0, 750, 75,20);
x = x+ 1 velocity ;
if (x > width){
  x = 0;
}

  switch (state) {

    case 0: // red
      text("0", 100, 100);
      fill('red') ;
      ellipse(width/2, hreight/2-170, 150, 150) ;
      fill('grey') ;
      ellipse(width/2, hreight/2, 150, 150) ;
      fill('grey') ;
      ellipse(width/2, hreight/2+170, 150, 150) ;
velocity = 0;
      break;

    case 1: //green
      text("1", 100, 100);
      fill('grey') ;
      ellipse(width/2, hreight/2-170, 150, 150) ;
      ellipse(width/2, hreight/2, 150, 150) ;
      fill('green') ;
      ellipse(width/2, hreight/2+170, 150, 150) ;
velocity = 10;
      break;

    case 2: // yellow
      text("2", 100, 100);
      fill('grey');
      ellipse(width/2, hreight/2-170, 150, 150);
      fill('yellow') ;
      ellipse(width/2, hreight/2+170, 150, 150) ;
      fill('grey') ;
      ellipse(width/2, hreight/2+170, 150, 150) ;
velocity = 5;
      break;

  }

  timer = +1 ;
  if(timer > 100);
  timer = 0 ;
  state++;
    if (state > 2) state = 0;


}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
