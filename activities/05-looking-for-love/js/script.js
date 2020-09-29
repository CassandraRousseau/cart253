/**************************************************
Activity 5: Looking for love
Cassandra Rousseau
We will open with a title screen. When the simulation begins we see two circles in darkness,
they each move off in a random direction. If they touch each other,the simulation ends with love triumphant!
If one goes off the edge of the canvas, the simulation ends in deep sadness.
**************************************************/
let circle1 = {
  x: 150,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
};
let circle2 = {
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
};
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  circle1.x = width / 3;
  circle2.x = (2 * width) / 3;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  circle1.x += circle1.vx;
  circle1.y += circle1.vy;
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  ellipse(circle1.x, circle1.y, circle1.size);
  circle2.x += circle2.vx;
  circle2.y += circle2.vy;
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
  ellipse(circle2.x, circle2.y, circle2.size);
}
