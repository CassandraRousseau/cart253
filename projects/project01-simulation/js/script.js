/**************************************************
Project 01: Simulation
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
let instructions =
  "Welcome new employee!\nWe are glad to have you in our team!\nThis newly open coffeeshop need your talent to \ncreate succulent latte!\nPress your mouse and drag it to make drawings on \nlatte\nFollow the guidelines to create beautiful artworks!\nBe artsy, have fun and good luck!";
let coffee = {
  x: 0,
  y: 0,
  size: 175,
  vx: 0,
  vy: 0,
  speed: 0.5,
  fill: {
    r: 200,
    g: 200,
    b: 100,
  },
};
let shadow = {
  x: 350,
  y: 250,
  size: 250,
  fill: 255,
  stroke: 127,
  strokeWeight: 3,
  vx: 0,
  vy: 0,
  speed: 0.5,
};

let plate = {
  x: 0,
  y: 0,
  size: 300,
  fill: 255,
  speed: 0.5,
};
let mug = {
  x: 0,
  y: 0,
  size: 200,
  fill: 255,
  speed: 0.5,
};

let handle = {
  x: 0,
  y: 0,
  w: 80,
  h: 145,
  tl: 5,
  tr: 5,
  fill: 255,
  vx: 0,
  vy: 0,
  speed: 0.5,
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
let failure = {
  image: undefined,
};
let state = "title";
//Loading images for simulation.
function preload() {
  coffeeshop.image = loadImage("assets/images/coffeeshop.png");
  failure.image = loadImage("assets/images/failure.png");
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
function draw() {
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
  background(coffeeshop.image);
  //Display mask image
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
function welcome() {
  push();
  background(257, 255, 196);
  //Display mask image
  textSize(35);
  fill(112, 26, 0);
  textFont("Blambot Pro BB");
  textAlign(LEFT, TOP);
  text(instructions, 10, 50, windowWidth, windowHeight);
  pop();
}
function simulation() {
  move();
  acceleration();
  constraining();
  display();
  drawing();
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
function acceleration() {
  plate.x += plate.speed;
  shadow.x += shadow.speed;
  handle.x += handle.speed;
  mug.x += mug.speed;
  coffee.x += coffee.speed;
}

function display() {
  push();
  //Display table image
  image(table.image, windowWidth, windowHeight);
  background(table.image);
  //Display circles
  fill(plate.fill);
  ellipse(plate.x, height / 2, plate.size);
  fill(shadow.fill);
  stroke(shadow.stroke);
  strokeWeight(shadow.strokeWeight);
  ellipse(shadow.x, height / 2, shadow.size);
  fill(handle.fill);
  rect(handle.x, height / 2, handle.w, handle.h, handle.tl, handle.tr);
  fill(mug.fill);
  ellipse(mug.x, height / 2, mug.size);
  fill(coffee.r, coffee.g, coffee.b);
  ellipse(coffee.x, height / 2, coffee.size);
  pop();
  //Display hand image
  push();
  imageMode(CENTER);
  image(hand.image, mouseX, mouseY);
  pop();
}
function constraining() {
  plate.x = constrain(plate.x, 0, width / 2);

  shadow.x = constrain(shadow.x, 0, width / 2);

  handle.x = constrain(handle.x, 0, width / 2);

  mug.x = constrain(mug.x, 0, width / 2);

  coffee.x = constrain(coffee.x, 0, width / 2);
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
  } else if (state === "welcome") {
    state = "simulation";
  }
}
