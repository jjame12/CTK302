let landscape1, landscape2,landscape3;




function setup() {
  createCanvas(800, 800);
  landscape1 = loadImage("assets/blue.JPG");
  landscape2 = loadImage("assets/Camera.JPG");
  landscape3 = loadImage("assets/orange.JPG");

  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);



}

function draw() {
  background('white');
  image(landscape1, width / 2, 400, 200, 200)
  image(landscape2, width / 2, 200, 200, 200)
  image(landscape3, width / 2, 600, 200, 200)
}
