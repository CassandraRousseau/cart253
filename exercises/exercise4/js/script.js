/**************************************************
Exercise 4:The Age of Aquariums
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
"use strict";
let intro = [
  "Hello kids!",
  "You like pretty things right?",
  "Why not picking some beautiful flowers?",
  "Pick all the flowers surronding in the garden!",
  "Press your mouse to pick a flower!",
  "Look at the countdown!If time is out, you will not be able to make a bouquet! ",
  "Have fun!",
];
let right = [
  "Congrats!",
  "You made the right choice!",
  "Sounds pretty confusing right?",
  "Well, by not picking flowers, your showing that you are taking care of nature.",
  "Taking care of your ecosystem is a good quality!",
  "Take care of yourself and your surroundings. ",
  "Take care of the planet, we only have one!",
];

let wrong = [
  "Why did you pick flowers?",
  "By doing this, you destroyed your ecosystem!",
  "Plants have to be nurture correctly!",
  "Not everything is just about fun and your own desires!",
  "Take care of yourself and your surroundings. ",
  "Take care of the planet, we only have one!",
];

let hand = {
  x: 0,
  y: 0,
  w: 250,
  h: 250,
  image: undefined,
};
let garden = [];
let displayGarden;
let gardenSize = 30;
let currentLine = 0;
let state = "title";
// setup()
//
// Description of setup() goes here.

function preload() {
  hand.image = loadImage("assets/images/hand.png");
  garden[0] = loadImage(`assets/images/flower-0.png`);
  garden[1] = loadImage(`assets/images/flower-1.png`);
  garden[2] = loadImage(`assets/images/flower-2.png`);
  garden[3] = loadImage(`assets/images/flower-3.png`);
  garden[4] = loadImage(`assets/images/flower-4.png`);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < gardenSize; i++) {
    let fish = createFlower(random(0, width), random(0, height));
    garden.push(flower);
  }
}

function createFlower(x, y) {
  let flower = {
    x: x,
    y: y,
    w: 150,
    h: 150,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return flower;
}
// draw()
//
// Description of draw() goes here.
function draw() {
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
  for (let i = 0; i < garden.length; i++) {
    moveFish(garden[i]);
    displayFish(garden[i]);
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
  let dialog1 = intro[currentLine];
  text(dialog1, 10, 50, windowWidth, windowHeight);
  pop();
}
function goodEnding() {
  push();
  textSize(85);
  fill(225, 125, 125);
  textFont("CCSignLanguage");
  textAlign(CENTER, CENTER);
  let dialog2 = right[currentLine];
  text(dialog2, 10, 50, windowWidth, windowHeight);
  pop();
}
function badEnding() {
  push();
  textSize(90);
  fill(0);
  textFont("CCSignLanguage");
  textAlign(CENTER, CENTER);
  let dialog3 = wrong[currentLine];
  text(dialog3, 10, 50, windowWidth, windowHeight);
  pop();
}
function moveFlower(flower) {
  let change = random(0, 1);
  if (change < 0.05) {
    flower.vx = random(-flower.speed, flower.speed);
    flower.vy = random(-flower.speed, flower.speed);
  }
  flower.x += flower.vx;
  flower.y += flower.vy;
  flower.x = constrain(flower.x, 0, width);
  flower.y = constrain(flower.y, 0, height);
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

function displayFlower(flower) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(flower.x, flower.y, flower.w, flower.h);
  pop();
}
function displayHand() {
  push();
  imageMode(CENTER);
  image(hand.image, mouseX, mouseY, hand.w, hand.h);
  pop();
}
function mousePressed() {
  let fish = createFish(mouseX, mouseY);
  garden.push(flower);
}
function keyPressed() {
  if (keyCode === 32) {
    currentLine = currentLine + 1;
    if (currentLine === intro.length) {
      currentLine = intro.length - 1;
    } else if (currentLine === right.length) {
      currentLine = right.length - 1;
    } else if (currentLine === wrong.length) {
      currentLine = wrong.length - 1;
    }
  }
}
