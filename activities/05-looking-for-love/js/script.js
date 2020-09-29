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
// Creating the canvas.
function setup() {
  createCanvas(500, 500);
  circle1.x = width / 3;
  circle2.x = (2 * width) / 3;
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

// draw()
//
//Creating the background.
function draw() {
  background(0);
}
// Creating the simulation.
function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}
function move() {
  //Setting circles movements
  circle1.x += circle1.vx;
  circle1.y += circle1.vy;
  circle2.x += circle2.vx;
  circle2.y += circle2.vy;
}
function checkOffscreen() {
  //Checking if circles go outside the canvas.
  if (
    circle1.x < 0 ||
    circle1.x > width ||
    circle1.y < 0 ||
    circle1.y > height ||
    circle2.x < 0 ||
    circle2.x > width ||
    circle2.y < 0 ||
    circle2.y > height
  ) {
    string("Sad ending");
  }
}
function checkOverlap() {
  //Checking if circles overlapped{
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    string("True love!");
  }
}
function display() {
  //Display circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function title() {
  string("LOVE?");
}
