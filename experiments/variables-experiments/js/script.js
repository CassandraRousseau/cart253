/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let bgShade = 0;
let circleX = 0;
let circleY=250;
let circleSize = 200;
let circleSpeed=2;

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
  bgShade=bgShade +1;
  background(bgShade);
circleX+= circleSpeed;

ellipse(circleX,circleY, circleSize);

console.log(`circleX: ${circleX}, circleY: ${circleY},circleSize: ${circleSize},circleSpeed: ${circleSpeed}`);


}
