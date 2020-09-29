/**************************************************
Template p5 project
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
let hello= {
  string:'Hello,world!',
  x:250,
  y:250,
  vx:5,
  vy:1,
  size:64,
}
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);
hello.x+=hello.vx;
hello.y+=hello.vy;
hello.size+=1;
textAlign(CENTER,CENTER);
textSize(hello.size);
textStyle(BOLD);
fill(200,50,200);
stroke(50,200,50);
strokeWeight(3);
text(hello.string,hello.x,hello.y);
}
