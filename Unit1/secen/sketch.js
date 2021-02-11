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


  fill('white');
text(mouseX + ', ' + mouseY,20,360);
}

function mouseReleased() {
print(mouseX + ', ' + mouseY);
}
