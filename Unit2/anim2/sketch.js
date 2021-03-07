let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100) ;


push() ;
translate(x,0) ;
fill('yellow');
ellipse(300, 35, 100, 100); ;
pop() ;

x = x + 10 ;
if(x > width){
  x = 0 ;
}

}
