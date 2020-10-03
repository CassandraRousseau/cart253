/**************************************************
Exercise 3: Love,actually
Cassandra Rousseau
We will open with a title screen. When the simulation begins we see two circles in darkness,
they each move off in a random direction. If they touch each other,the simulation ends with love triumphant!
If one goes off the edge of the canvas, the simulation ends in deep sadness.
**************************************************/
let heart = {
  x: 0,
  y: 0,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined,
};
let heartbreak = {
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined,
};
let cupid = {
  x: 0,
  y: 0,
  size: 100,
  image: undefined,
};
let invisibleheart = {
  x: 350,
  y: 250,
  size: 100,
  image: undefined,
};
let state = "title";
function preload() {
  heartbreak.image = loadImage("assets/images/heartbreak.png");
  cupid.image = loadImage("assets/images/cupid.png");
  heart.image = loadImage("assets/images/heart.png");
  invisibleheart.image = loadImage("assets/images/invisibleheart.png");
}
// setup()
//
// Creating the canvas.
function setup() {
  createCanvas(windowWidth, windowHeight);
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
  } else if (state === "instructions") {
    instructions();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "love") {
    love();
  } else if (state === "sadness") {
    sadness();
  }else if (state==="?"){
    ?();
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
  text("Cupidventure", width / 2, height / 2);
  pop();
}
function instructions() {
  push();
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("Cupidventure", width / 2, height / 2);
  pop();
}
function love() {
  push();
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("SPREAD LOVE!", width / 2, height / 2);
  pop();
}
function sadness() {
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("...", width / 2, height / 2);
  pop();
}
function ?(){
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("...", width / 2, height / 2);
  pop();
}
function move() {
  //Setting circles movements
  heart.x += heart.vx;
  heart.y += heart.vy;
  heartbreak.x += heartbreak.vx;
  heartbreak.y += heartbreak.vy;
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
  ellipse(mouseX, mouseY, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}
function mousePressed() {
  if (state === "title") {
    state = "instructions";
  } else if (state === "instructions") {
    state = "simulation";
  }
}
