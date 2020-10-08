/**************************************************
Project 01: Simulation
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
let instructions =
  "Welcome new employee!\nWe are glad to have you in our team!\nThis newly open coffeeshop need your talent to create succulent latte!\nPress your mouse and drag it to make drawings on latte\nFollow the guidelines to create beautiful artworks!\nBe artsy, have fun and good luck!";
let coffee = {
  x: 150,
  y: 250,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 2,
  fill: {
    r: 200,
    g: 200,
    b: 100,
  },
};
let shadow = {
  x: 350,
  y: 250,
  size: 100,
  fill: 255,
  stroke: 127,
  strokeWeight: 3,
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
  image: undefined,
};
let plate = {
  x: 100,
  y: 200,
  size: 100,
  fill: 255,
  speed: 0.75,
};
let mug = {
  x: 500,
  y: 100,
  size: 150,
  fill: 255,
  speed: 1,
};

let handle = {
  w: 80,
  h: 145,
  tl: 5,
  tr: 5,
  fill: 255,
};
let failure = {
  image: undefined,
};
let state = "title";
//Loading images for simulation.
function preload() {
  soundTrack = loadSound("");
  coffeeshop.image = loadImage("assets/images/coffeeshop.png");
  failure.image = loadImage("assets/images/failure.png");
  table.image = loadImage("assets/images/table.png");
  hand.image = loadImage("assets/images/hand.png");
}
// setup()
//
// Creating the canvas.
function setup() {
  createCanvas(windoWidth, windowHeight);
  noCursor();
}
function draw() {
  background(0);
  if (state === "title") {
    title();
  } else if (state === "welcome") {
    welcome();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "success") {
    success();
  } else if (state === "failure") {
    closed();
  }
}
function title() {
  push();
  //Display COVID-19 image
  image(coffeeshop.image, windowWidth, windowHeight);
  //Display mask image
  textFont("CCSignLanguage");
  textSize(65);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("Coffeeccino", width / 2, height / 2);
  pop();
  push();
  textFont("CCSignLanguage");
  textSize(35);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Press Spacebar to start", width / 2, (2 * height) / 2);
  pop();
}
function welcome() {
  push();
  //Display mask image
  textSize(35);
  fill(200, 200, 100);
  textFont("Blambot Pro BB");
  textAlign(LEFT, TOP);
  text("Instructions", 10, 50);
  pop();
}
function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}
function success() {
  push();
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  text("Customers ADORE your latte!", width / 2, 350);
  pop();
}
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

function move() {
  //Setting mug movements
  coffee.x += coffee.vx;
  coffee.y += coffee.vy;
  mug.x += mug.vx;
  mug.y += mug.vy;
  handle.x += handle.vx;
  handle.y += handle.vy;
  shadow.x += shadow.vx;
  shadow.y += shadow.vy;
  plate.x += plate.vx;
  plate.y += plate.vy;
}
function constraining() {
  coffee.y = constrain(coffee.y, width / 2, height / 2);
  coffee.x = constrain(coffee.x, width / 2, height / 2);
  mug.y = constrain(mug.y, width / 2, height / 2);
  mug.x = constrain(mug.x, width / 2, height / 2);
  shadow.y = constrain(shadow.y, width / 2, height / 2);
  shadow.x = constrain(shadow.x, width / 2, height / 2);
  handle.y = constrain(handle.y, width / 2, height / 2);
  handle.x = constrain(handle.x, width / 2, height / 2);
  plate.y = constrain(plate.y, width / 2, height / 2);
  plate.x = constrain(plate.x, width / 2, height / 2);
}

function display() {
  //Display table image
  image(table.image, windowWidth, windowHeight);
  //Display circles
  ellipse(coffee.x, coffee.y, coffee.size);
  ellipse(mug.x, mug.y, mug.size);
  rect(handle.x, handle.y, handle.w, handle.h, handle.tl, handle.tr);
  ellipse(shadow.x, shadow.y, shadow.size);
  ellipse(plate.x, plate.y, plate.size);
  //Display hand image
  image(hand.image, mouseX, mouseY);
}
function drawing() {
  hand.x = mouseX;
  hand.y = mouseY;
  stroke(255);
  strokeWeight(5);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function keyPressed() {
  if (state === "title" && keyCode === 32) {
    state = "welcome";
  }
}
function mousePressed() {
  if (state === "welcome") {
    state = "simulation";
  }
}
