/**************************************************
Template p5 project
Cassandra Rousseau
Conditionals experiments
**************************************************/
let angle=0;
let rectScale=0;
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
  background(127);
push();
fill(255,0,0);
rectMode(CENTER);
translate(width/2,height/2);
rotate(angle);
scale(rectScale);
rect(0,0,100,100);
pop();
angle+=0.1;
rectScale+=0.01;
}
