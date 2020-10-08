/**************************************************
Project 01: Simulation
Cassandra Rousseau

Creating a barista simulation.
**************************************************/
"use strict";
let instructions =
  "Welcome new employee!\nWe are glad to have you in our team!\nThis newly open coffeeshop need your talent to \ncreate succulent latte!\nPress your mouse and drag it to make drawings on \nlatte\nFollow the guidelines to create beautiful artworks!\nBe artsy, have fun and good luck!";

let plate = {
  x: 0,
  y: 0,
  size: 500,
  fill: 255,
  speed: 2,
};
let coffee = {
  x: 0,
  y: 0,
  size: 250,
  vx: 0,
  vy: 0,
  speed: 2,
  fill: {
    r: 143,
    g: 60,
    b: 0,
  },
};
let shadow = {
  x: 0,
  y: 0,
  size: 450,
  stroke: 127,
  strokeWeight: 3,
  vx: 0,
  vy: 0,
  speed: 2,
};

let mug = {
  x: 0,
  y: 0,
  size: 400,
  stroke: 127,
  strokeWeight: 3,
  fill: 255,
  speed: 2,
};

let handle = {
  x: 0,
  y: 0,
  w: 50,
  h: 100,
  tl: 5,
  tr: 5,
  fill: 255,
  vx: 0,
  vy: 0,
  speed: 2,
};
let coffeeshop = {
  image: undefined,
};
let table = {
  image: undefined,
};
let hand = {
  x: 0,
  y: 0,
  w: 400,
  h: 400,
  image: undefined,
};
let failure = {
  image: undefined,
};
let success = {
  image: undefined,
};
let state = "title";
//Loading images for simulation.
function preload() {
  coffeeshop.image = loadImage("assets/images/coffeeshop.png");
  failure.image = loadImage("assets/images/failure.png");
  success.image = loadImage("assets/images/success.png");
  table.image = loadImage("assets/images/table.png");
  hand.image = loadImage("assets/images/hand.png");
}
// setup()
//
// Creating the canvas.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}
//Setting the states of the game
function draw() {
  if (state === "title") {
    title();
  } else if (state === "welcome") {
    welcome();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "success") {
    open();
  } else if (state === "failure") {
    closed();
  }
}
//Setting the title
function title() {
  push();
  //Display coffeeshop background
  image(coffeeshop.image, windowWidth, windowHeight);
  background(coffeeshop.image);
  //Display text
  textFont("CCSignLanguage");
  textSize(125);
  fill(255);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  text("Coffeeccino", width / 2, height / 2);
  pop();
  push();
  textFont("CCSignLanguage");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("Press Spacebar to start", width / 2, 450);
  pop();
}
//Setting the instructions
function welcome() {
  push();
  background(257, 255, 196);
  textSize(35);
  fill(112, 26, 0);
  textFont("Blambot Pro BB");
  textAlign(LEFT, TOP);
  text(instructions, 10, 50, windowWidth, windowHeight);
  pop();
}
//Setting simulation
function simulation() {
  move();
  acceleration();
  constraining();
  display();
  drawing();
}
//Setting the good ending
function open() {
  push();
  iamge(success.image, windowWidth, windowHeight);
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  text("Customers ADORE your latte!", width / 2, 350);
  pop();
}
//Setting the bad ending
function closed() {
  image(failure.image, windowWidth, windowHeight);
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("OH NO!", width / 2, height / 2);
  text("Coffeeccino is closing!", width / 2, 350);
  text("You will have to find another job...", width / 2, 450);
  pop();
}
//Setting coffee cup movement
function move() {
  plate.x += plate.vx;
  plate.y += plate.vy;
  shadow.x += shadow.vx;
  shadow.y += shadow.vy;
  handle.x += handle.vx;
  handle.y += handle.vy;
  mug.x += mug.vx;
  mug.y += mug.vy;
  coffee.x += coffee.vx;
  coffee.y += coffee.vy;
}
//Setting cup speed
function acceleration() {
  plate.x += plate.speed;
  shadow.x += shadow.speed;
  handle.x += handle.speed;
  mug.x += mug.speed;
  coffee.x += coffee.speed;
}
//Diplaying the images
function display() {
  push();
  //Display table image
  image(table.image, windowWidth, windowHeight);
  background(table.image);
  //Display coffee cup
  fill(plate.fill);
  circle(plate.x, height / 2, plate.size);
  pop();
  push();
  noFill();
  stroke(shadow.stroke);
  strokeWeight(shadow.strokeWeight);
  circle(shadow.x, height / 2, shadow.size);
  pop();
  push();
  fill(handle.fill);
  rect(handle.x, height / 2, handle.w, handle.h, handle.tl, handle.tr);
  pop();
  push();
  fill(mug.fill);
  stroke(mug.stroke);
  strokeWeight(mug.strokeWeight);
  circle(mug.x, height / 2, mug.size);
  pop();
  push();
  fill(coffee.fill.r, coffee.fill.g, coffee.fill.b);
  circle(coffee.x, height / 2, coffee.size);
  pop();
  //Display hand image
  push();
  imageMode(CENTER);
  image(hand.image, mouseX, mouseY, hand.w, hand.h);
  pop();
}
//Stoping cup movement
function constraining() {
  plate.x = constrain(plate.x, 0, width / 2);

  shadow.x = constrain(shadow.x, 0, width / 2);

  handle.x = constrain(handle.x, 0, width / 2);

  mug.x = constrain(mug.x, 0, width / 2);

  coffee.x = constrain(coffee.x, 0, width / 2);
}
//Setting the drawing function
function drawing() {
  hand.x = mouseX;
  hand.y = mouseY;
  stroke(255);
  strokeWeight(10);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
//Setting keys to change states
function keyPressed() {
  if (state === "title" && keyCode === 32) {
    state = "welcome";
  } else if (state === "welcome") {
    state = "simulation";
  }
}
