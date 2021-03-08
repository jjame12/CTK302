let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(48) ;
  rectMode(CENTER) ;
}

function draw() {
  switch (state) {
    case 0:
      background('yellow')
      text("what did the hurricane say to the island?", width / 2, height / 2,400,400);
      break;


    case 1:
      background('green')
      text("I've got my eye on you!.", width / 2 ,height / 2,400,400);
      break;
  }
}

function mouseReleased() {
  state++ ;
  if (state > 1){
    state = 0 ;
  }
}
