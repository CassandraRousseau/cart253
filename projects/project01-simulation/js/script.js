/**************************************************
Project 01: Simulation
Cassandra Rousseau

Creating a barista simulation.
**************************************************/
"use strict";
let instructions =
  "Hello new employee!\n Welcome to Coffeeccino!\nWe are glad to have you in our team!\nThis newly open cafe needs your talent to \ncreate succulent lattes!\nPress your mouse and drag it to make drawings on \nlatte\nFollow the guidelines to create beautiful artworks!\nBe artsy, have fun and good luck!";

let plate = {
  x: 0,
  y: 0,
  w: 550,
  h: 550,
  vx: 0,
  vy: 0,
  fill: {
    r: 255,
    g: 255,
    b: 255,
    speed: 3,
  },
};
let coffee = {
  x: 0,
  y: 0,
  w: 225,
  h: 225,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: {
    r: 143,
    g: 60,
    b: 0,
  },
};
let shadow = {
  x: 0,
  y: 0,
  w: 400,
  h: 400,
  stroke: 127,
  strokeWeight: 3,
  vx: 0,
  vy: 0,
  speed: 3,
};

let mug = {
  x: 0,
  y: 0,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  stroke: 127,
  strokeWeight: 3,
  speed: 3,
  fill: {
    r: 255,
    g: 255,
    b: 255,
  },
};

let handle = {
  x: 0,
  y: 0,
  w: 50,
  h: 200,
  tl: 5,
  tr: 5,
  vx: 0,
  vy: 0,
  speed: 3,
  stroke: 127,
  strokeWeight: 3,
  fill: {
    r: 255,
    g: 255,
    b: 255,
  },
};
let circle = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let cafe = {
  image: undefined,
};
let table = {
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
  cafe.image = loadImage("assets/images/cafe.png");
  failure.image = loadImage("assets/images/failure.png");
  success.image = loadImage("assets/images/success.png");
  table.image = loadImage("assets/images/table.png");
}
// setup()
//
// Creating the canvas.
function setup() {
  createCanvas(windowWidth, windowHeight);
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
  //Display cafe background
  image(cafe.image, windowWidth, windowHeight);
  background(cafe.image);
  //Display title
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
function level1() {
  simulation();
  if (drawing() === sun()) {
    level2();
  }
}
function level2() {
  simulation();
  if (drawing() === smiley()) {
    level3();
  }
}
function level3() {
  simulation();
  if (drawing() === sun()) {
    level4();
  }
}
function level4() {
  simulation();
  if (drawing() === sun()) {
    level5();
  }
}
function level5() {
  simulation();
  if (drawing() === sun()) {
    level6();
  }
}
function level6() {
  simulation();
  if (drawing() === sun()) {
    level7();
  }
}
//Setting simulation
function simulation() {
  // prevent re-drawing the background, mug and coffee once they reach the middle
  if (mug.x < width / 2) {
    displaytable();
    move();
    acceleration();
    constraining();
    display();
  }
  erasing();
  drawing();
}
function displaytable() {
  push();
  //Display table image
  image(table.image, windowWidth, windowHeight);
  background(table.image);
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
  displayplate();
  displayshadow();
  displayhandle();
  displaymug();
  displaycoffee();
}
function displayplate() {
  //Display coffee cup
  push();
  fill(plate.fill.r, plate.fill.g, plate.fill.b);
  ellipse(plate.x, height / 2, plate.w, plate.h);
  pop();
}
function displayshadow() {
  //Display shadow
  push();
  stroke(shadow.stroke);
  strokeWeight(shadow.strokeWeight);
  ellipse(shadow.x, height / 2, shadow.w, shadow.h);
  pop();
}
function displayhandle() {
  //Display handle
  push();
  fill(handle.fill.r, handle.fill.g, handle.fill.b);
  stroke(handle.stroke);
  strokeWeight(handle.strokeWeight);
  rectMode(CORNER);
  rect(handle.x, height / 2, handle.w, handle.h, handle.tl, handle.tr);
  pop();
}
function displaymug() {
  //Display mug
  push();
  fill(mug.fill.r, mug.fill.g, mug.fill.b);
  stroke(mug.stroke);
  strokeWeight(mug.strokeWeight);
  ellipse(mug.x, height / 2, mug.w, mug.h);
  pop();
}
function displaycoffee() {
  //Display coffee
  push();
  fill(coffee.fill.r, coffee.fill.g, coffee.fill.b);
  ellipse(coffee.x, height / 2, coffee.w, coffee.h);
  pop();
}
function guideline() {}
function sun() {
  push();
  noFill();
  stroke(circle.stroke.r, circle.stroke.g, circle.stroke.b);
  strokeWeight(circle.strokeWeight);
  ellipse(circle.x, circle.y, circle.w, circle.h);
  line();
  pop();
}
function smiley() {
  push();
  noFill();
  stroke(circle.stroke.r, circle.stroke.g, circle.stroke.b);
  strokeWeight(circle.strokeWeight);
  ellipse(circle.x, circle.y, circle.w, circle.h);
  pop();
}
function cat() {
  push();
  noFill();
  stroke(circle.stroke.r, circle.stroke.g, circle.stroke.b);
  strokeWeight(circle.strokeWeight);
  ellipse(circle.x, circle.y, circle.w, circle.h);
  pop();
}
function bear() {
  push();
  noFill();
  stroke(circle.stroke.r, circle.stroke.g, circle.stroke.b);
  strokeWeight(circle.strokeWeight);
  ellipse(circle.x, circle.y, circle.w, circle.h);
  pop();
}
function umbrella() {}

function leaf() {}
//Stoping cup movement
function constraining() {
  plate.x = constrain(plate.x, 0, width / 2);

  shadow.x = constrain(shadow.x, 0, width / 2);

  handle.x = constrain(handle.x, 0, width / 2);

  mug.x = constrain(mug.x, 0, width / 2);

  coffee.x = constrain(coffee.x, 0, width / 2);
}
//Setting keys to change states
function keyPressed() {
  if (state === "title" && keyCode === 32) {
    state = "welcome";
  } else if (state === "welcome") {
    state = "simulation";
  }
}
//Setting mouse pressed use
function mouseIsPressed() {
  if (state === "simulation") {
    drawing();
  }
}
//Setting the drawing function
function drawing() {
  stroke(255);
  strokeWeight(10);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function letterIsPressed() {
  if (state === "simulation" && keyCode === 90) {
    erasing();
  }
}
function erasing() {
  if (letterIsPressed === true) {
    erase();
  }
}
