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
let state = "title";
// setup()
//
// Creating the canvas.
function setup() {
  createCanvas(500, 500);
  //Setting circles positions
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
  if (state === "title") {
    title();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "love") {
    love();
  } else if (state === "sadness") {
    sadness();
  }
}
// Creating the simulation.
function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}
function title() {
  push();
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("LOVE?", width / 2, height / 2);
  pop();
}
function love() {
  push();
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("TRUE LOVE!", width / 2, height / 2);
  pop();
}
function sadness() {
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("FAKE LOVE...", width / 2, height / 2);
  pop();
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
  if (isOffscreen(circle1) || isOffscreen(circle2)) {
    state = "sadness";
  }
}
function isOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}
function checkOverlap() {
  //Checking if circles overlapped{
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    state = "love";
  }
}
function display() {
  //Display circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}
function mousePressed() {
  if (state === "title") {
    state = "simulation";
  }
}
