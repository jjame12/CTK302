let state = 0 ;



function setup() {
  createCanvas(500, 500);
}

function draw() {

switch(state){
  case 0:
  background('grey');
  text("state 0" , 100, 100);
  break ;
  case 1:
  background('red');
  text("state 1" , 100, 100);
  break ;

  case 2:
  background('green');
  text("state 2" , 100, 100);
  break ;
 }
}
function mouseReleased() {
  state++ ;
  if (state > 2){
    state = 0
  }

}
