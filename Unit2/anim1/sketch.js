let x =0 ;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100) ;

//  rect(x,100,100,100) ;
text("LOVE ME NOW BEFORE IT'S TOO LATE",x,height/2)
textSize(35)
x = x + 10 ;

if (x > width){
  x = -200 ;
}

}
