/**************************************************
Template p5 project
Cassandra Rousseau
Conditionals experiments
**************************************************/
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
};
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
}
// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgroundShade);
  circle.x += circle.speed;
if(!(circle.x<width/3)){
    fill(255,0,0);
}
  ellipse(circle.x, circle.y, circle.size);
}