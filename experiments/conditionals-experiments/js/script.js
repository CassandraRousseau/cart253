/**************************************************
Template p5 project
Cassandra Rousseau
Conditionals experiments
**************************************************/
let caterpillar = {
  x: 100,
  y: 250,
  segementSize: 50,
};
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
  noStroke();
  fill(100,200,100);
  let x = caterpillar.x;
  let numSegments = 6;
  let segmentsDrawn = 0;
  while (segmentsDrawn < numSegments) {
    ellipse(x, caterpillar.y, caterpillar.segmentSize);
    x = x + 40;
    segmentsDrawn = segmentsDrawn + 1;
  }
}
