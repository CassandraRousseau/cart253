/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let circle ={
  x:0,
  y:250,
  size:100,
  vx:1,
  vy:0,
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
circle.x+=circle.vx;
circle.y+=circle.vy;
if (circle.x>width){
  circle.x=0;
  circle.vx+=2;
  circle.size+=5;
}
fill(255,0,0);
ellipse(circle.x,circle.y,circle.size);
}
