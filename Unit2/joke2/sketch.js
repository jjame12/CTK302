let state = 0;
let timer = 0;

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
      text("why did the man take a hammer to bed?", width / 2, height / 2,400,400);
      break;


    case 1:
      background('green')
      text("he wanted to hit the sack.", width / 2 ,height / 2,400,400);
      break;
  }

  timer++;
  if (timer > 3 * 60) {
    state++;
    timer = 0;

    if (state > 1) {
      state = 0;
    }
  }
}
