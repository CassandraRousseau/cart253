/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let bgShade = 0;

let circle = {
  x:0,
  y:250,
  size:200,
  speed:2,
};


// setup()
//
// Description of setup() goes here.
function setup() {

createCanvas(500, 500);
;

}

// draw()
//
// Description of draw() goes here.
function draw() {
  bgShade=bgShade +1;
  background(bgShade);
circle.x+= circle.speed;

ellipse(circle.x,circle.y, circle.size);

}
