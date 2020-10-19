/**************************************************
Exercise 4:The Age of Aquariums
Cassandra Rousseau

Picking flowers simulation. It starts with a title screen, followed by an instruction screen.
The goal is to pick (or not?) flowers in the garden. The player have to choose to pick all the flowers
(or not) before the end of the countdown. When time is out, a surprising ending will be revealed to the player depending
of his choice during the simulation...
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
let isFlowerEliminated;
let garden = [];
let displayGarden;
let gardenSize = 30;
let currentLine = 0;
let state = "title";
let images = [];
let numImages = 5;
let displayImage;

// setup()
//
// Description of setup() goes here.

function preload() {
  hand.image = loadImage("assets/images/hand.png");
  for (let i = 0; i < numImages; i++) {
    let loadedImage = loadImage(`assets/images/flower-${i}.png`);
    images.push(loadedImage);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < gardenSize; i++) {
    let flower = createFlower(random(0, width), random(0, height));
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
    moveFlower(garden[i]);
    displayFlower(garden[i]);
    timeCheck();
    displayFlower = random(garden[i]);
    displayImage = random(images);
  }
}
function title() {
  push();
  textSize(105);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Lemonada");
  text("Pick the Flowers!", width / 2, height / 2);
  push();
  textSize(35);
  text("Presse Spacebar to start", width / 2, (2 * height) / 3);
  pop();
  pop();
}
function instructions() {
  push();
  textSize(45);
  fill(255);
  textAlign(LEFT, TOP);
  textFont("Lemonada");
  let dialog1 = intro[currentLine];
  text(dialog1, 10, 50, windowWidth, windowHeight);
  pop();
}
function goodEnding() {
  push();
  textSize(85);
  fill(225, 125, 125);
  textFont("Lemonada");
  textAlign(CENTER, CENTER);
  let dialog2 = right[currentLine];
  text(dialog2, 10, 50, windowWidth, windowHeight);
  pop();
}
function badEnding() {
  push();
  textSize(90);
  fill(0);
  textFont("Lemonada");
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

function timeCheck() {
  if (frameCount > 300 && !flower.active) {
    state = "wrong";
  } else {
    state = "right";
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
  for (let i = 0; i < garden.length; i++) {
    let flower = garden[i];
    let d = dist(mouseX, mouseY, flower.x, flower.y);
    if (d < flower.w / 2 + flower.h / 2) {
      garden.splice(i, 1);
      break;
    }
  }
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
  } else if (keyCode === 13) {
    if (state === "title") {
      state = "instructions";
    } else if (state === "instructions") {
      state = "simulation";
    }
  }
}
