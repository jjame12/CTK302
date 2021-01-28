
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background('green');
  if (mouseIsPressed)
  background('pink')
  arc(50, 50, 80, 80, 30, PI + QUARTER_PI);
  fill('yellow')

}
