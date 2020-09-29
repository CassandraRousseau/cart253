/**************************************************
Template p5 project
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
let circle= {
  x:0,
  y:250,
  vx:0,
  vy:0,
  speed:2,
  size:100,
}
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);
circle.vx=circle.speed;
textSize(32);
textAlign(CENTER,CENTER);
}
let state='title';
// draw()
//
// Description of draw() goes here.
function draw() {
background(0);
//text
fill(255);
text('Life',width/2,height/2);
//Animation
circle.x+=circle.vx;
circle.y+=circle.vy;
ellipse(circle.x,circle.y,circle.size);
//Ending
fill(127);

}
