/**************************************************
Exercise 4:The Age of Aquariums
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
"use strict";
let hand = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  image: undefined,
};
let garden = [];
let gardenSize = 30;
let state = "title";
// setup()
//
// Description of setup() goes here.

function preload() {}
function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < schoolSize; i++) {
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish);
  }
}

function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return fish;
}
// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  background(100, 245, 90);
  //Making the order of the simulation
  if (state === "title") {
    title();
  } else if (state === "instructions") {
    instructions();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "goodEnding") {
    love();
  } else if (state === "badEnding") {
    sadness();
  }
}
function simulation() {
  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
}
function title() {
  push();
  textSize(105);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("CCSignLanguage");
  text("Pick the Flowers!", width / 2, height / 2);
  push();
  textSize(35);
  text("Click your mouse to start", width / 2, (2 * height) / 3);
  pop();
  pop();
}
function instructions() {
  push();
  textSize(45);
  fill(255);
  textAlign(LEFT, TOP);
  textFont("CCSignLanguage");
  text(intro, 10, 50, windowWidth, windowHeight);
  pop();
}
function goodEnding() {
  push();
  textSize(85);
  fill(225, 125, 125);
  textFont("CCSignLanguage");
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  push();
  textSize(45);
  text("Love is spread!", width / 2, 400);
  pop();
  pop();
}
function badEnding() {
  push();
  textSize(90);
  fill(0);
  textFont("CCSignLanguage");
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  push();
  textSize(40);
  text("Sadness conquered the world :'(", width / 2, 400);
  pop();
  pop();
}
function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
  fish.x += fish.vx;
  fish.y += fish.vy;
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}
function checkheartbreakEliminated() {
  isheartbreakEliminated(heartbreak1);
  isheartbreakEliminated(heartbreak2);
  isheartbreakEliminated(heartbreak3);
  isheartbreakEliminated(heartbreak4);
  isheartbreakEliminated(heartbreak5);
  if (
    !heartbreak1.active &&
    !heartbreak2.active &&
    !heartbreak3.active &&
    !heartbreak4.active &&
    !heartbreak5.active
  ) {
    state = "love";
  }
}
//Setting the shooting effect for heartbreaks
function isheartbreakEliminated(heartbreak) {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, heartbreak.x, heartbreak.y);
  if (
    arrow.shooted &&
    heartbreak.active &&
    d < arrow.w / 2 + heartbreak.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Eliminated heartbreak1
    heartbreak.active = false;
  }
}
//
//Checking if heartbreaks go outside the canvas.
function checkHeartbreakoverwhelm() {
  if (
    isHeartbreakoverwhelm(heartbreak1) ||
    isHeartbreakoverwhelm(heartbreak2) ||
    isHeartbreakoverwhelm(heartbreak3) ||
    isHeartbreakoverwhelm(heartbreak4) ||
    isHeartbreakoverwhelm(heartbreak5)
  ) {
    state = "sadness";
  }
}
//Setting when checking if heartbreaks go outside the canvas
function isHeartbreakoverwhelm(heartbreak) {
  if (heartbreak.w === width && heartbreak.h === height) {
    return true;
  } else {
    return false;
  }
}
//Setting shooting on invisible heart
function invisibleheartTouched() {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, invisibleheart.x, invisibleheart.y);
  if (
    arrow.shooted & invisibleheart.active &&
    d < arrow.w / 2 + invisibleheart.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Touched invisibleheart
    invisibleheart.active = false;
    state = "unknown";
  }
}

function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function mousePressed() {
  let fish = createFish(mouseX, mouseY);
  school.push(fish);
}
