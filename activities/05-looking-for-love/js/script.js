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
// Creating the animation.
function draw() {
  //Creating the background.
  background(0);
  //Setting circles movements
  circle1.x += circle1.vx;
  circle1.y += circle1.vy;
  circle2.x += circle2.vx;
  circle2.y += circle2.vy;
  //Display circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
  //Checking if circles go outside the canvas.
  if (circle.x < 0 || (circle.x > width && circle.y < 0) || circle.y > height) {
    string("Sad ending");
  }
  //Checking if circles overlapped
  if (dis) {
    string("True love!");
  }
}
