
function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw(){
  background('blue');
noStroke();

  fill('brown')
  triangle(312, 253, 466, 254, 382, 167);

  fill('purple')
  square(314, 252, 150);
  //tree base
fill('#4b2b0f');
  rect(58,157, 63, 200);
//tree leaves
  fill('green');
   ellipse(84, 68, 200, 200);


  fill('yellow');
  ellipse(300, 35, 100, 100);
    fill('black')
  rect(263, 20, 18,18 );
  rect(315, 21, 18,18 );

  if (mouseIsPressed) {
    background('gray')
     fill('brown')
  triangle(312, 253, 466, 254, 382, 167);

  fill('purple')
  square(314, 252, 150);
  //tree base
fill('#4b2b0f');
  rect(58,157, 63, 200);
//tree leaves
  fill('green');
   ellipse(84, 68, 200, 200);


  fill('yellow');
  ellipse(300, 35, 100, 100);
    fill('black')
  rect(263, 20, 18,18 );
  rect(315, 21, 18,18 );
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
   //text

  textSize(15);
  textAlign(CENTER);
  fill(255);
  text('sunny is a sun that crys and water the grass and make it grow overnight!',
  20,10,690,500);


  fill('white');
text(mouseX + ', ' + mouseY,20,360);
}

function mouseReleased() {
print(mouseX + ', ' + mouseY);
}
