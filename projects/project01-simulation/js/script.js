/**************************************************
Project 01: Simulation
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/


let bg = {
  r: 0,
  g: 0,
  b: 0,
};
let coffeeshop = {
  image: undefined,
};
let mask = {
  x: 250,
  y: 250,
  w: 150,
  h: 150,
  image: undefined,
  tint: {
    r: 100,
    g: 100,
    b: 200,
    alpha: undefined,
  },
};
let circle1 = {
  x: 100,
  y: 200,
  size: 100,
  r: 255,
  g: 100,
  b: 10,
  alpha: 225,
  speed: 0.75,
  growth: 1,
};
let circle2 = {
  x: 500,
  y: 100,
  size: 150,
  r: 200,
  g: 155,
  b: 10,
  speed: -1,
  growth: -0.25,
};

let arc1 = {
  y: 725,
  w: 900,
  h: 675,
  start: 0,
  stop: 180,
  speed: -25,
};
let arc2 = {
  x: 0,
  y: 500,
  w: 500,
  h: 500,
  start: 0,
  stop: 180,
  r: 200,
  g: 200,
  b: 0,
};
let oval1 = {
  x: 0,
  y: 500,
  w: 0,
  h: 0,
  r: 200,
  g: 100,
  b: 0,
  growth: 1,
};
let oval2 = {
  w: 195,
  h: 100,
  r: 225,
  g: 125,
  b: 0,
};
let rectangle1 = {
  w: 80,
  h: 145,
  tl: 5,
  tr: 5,
  r: 0,
  g: 215,
  b: 215,
};
let state = "title";
//Loading images for simulation.
function preload() {
  coffeeshop.image = loadImage("assets/images/");
  success.image = loadImage("assets/images/");
  failure.image = loadImage("assets/images/");
    table.image = loadImage("assets/images/");
}
// setup()
//
// Creating the canvas.
function setup() {
  createCanvas(500, 500);
}
function draw() {
  background(0);
  if (state === "title") {
    title();
  } else if(state==="welcome"){
    welcome();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "success") {
    success();
  } else if (state === "failure") {
    failure();
  }
}
function title() {
  push();
  //Display COVID-19 image
  image(coffeshop.image, windowWidth, windowHeight);
  //Display mask image
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("Coffeeccino", width / 2, height / 2);
  pop();
}
function welcome() {
  push();
  //Display COVID-19 image
  image(covid19.image, covid19.x, covid19.y, covid19.w, covid19.h);
  //Display mask image
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("LOVE?", width / 2, height / 2);
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
    image(mask.image, mask.x, mask.y, mask.w, mask.h);
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  pop();
}
function failure() {
  tint(mask.tint.r, mask.tint.g, mask.tint.b, mask.tint.alpha);
  image(mask.image, mask.x, mask.y, mask.w, mask.h);
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("FAKE LOVE...", width / 2, height / 2);
  pop();
}
function checkOffscreen() {
  //Checking if circles go outside the canvas.
  if (isOffscreen(circle1) || isOffscreen(circle2)) {
    state = "failure";
  }
}
function keyPressed() {
  if (state === "title") {
    else if(keyCode===32){
      state = "welcome";
    }
  }
}
function mousePressed(){
  if(state==="welcome"){
    state="simulation"
  }
}
function move() {
  //Setting circles movements
  circle1.x += circle1.vx;
  circle1.y += circle1.vy;
  circle2.x += circle2.vx;
  circle2.y += circle2.vy;
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

// draw()
//
//Creating the solar system

  //Draws the background(universe)
  background(bg.r, bg.g, bg.b);
  bg.b = map(circle1.x, 250, width, 0, 225);
  //Draws the strokes
  stroke(255, 150);
  strokeWeight(8);


  //Draws Jupiter(left circle)
  fill(circle1.r, circle1.g, circle1.b, circle1.alpha);
  circle1.g = map(circle1.x, 250, width, 0, 255);
  circle1.b = map(circle1.x, 250, width, 0, 255);
  ellipse(circle1.x, circle1.y, circle1.size);
  circle1.x += circle1.speed;
  circle1.size += circle1.growth;
  circle1.size = constrain(circle1.size, 0, 150);
  //Draws Mars(right circle)
  fill(circle2.r, circle2.g, circle2.b);
  circle2.b = map(circle1.x, 500, 250, 0, 150);
  ellipse(circle2.x, circle2.y, circle2.size);
  circle2.x += circle2.speed;
  circle2.y = constrain(circle2.y, 0, 250);
  circle2.x = constrain(circle2.x, 0, width);
  circle2.size += circle2.growth;
  circle2.size = constrain(circle2.size, 0, 100);
  //Draws Saturn ring
  push();
  noFill();
  stroke(255, 255);
  strokeWeight(15);
  arc1.x = random(0, 20);
  ellipse(arc1.x, arc1.y, arc1.w, arc1.h, arc1.start, arc1.stop);
  arc1.x += arc1.speed;
  pop();
  //Draws Saturn(bottom left circle)
  push();
  blendMode(HARD_LIGHT);
  fill(arc2.r, arc2.g, arc2.b);
  ellipse(arc2.x, arc2.y, arc2.w, arc2.h, arc2.start, arc2.stop);
  //Draws Saturn shadow
  noStroke();
  fill(oval1.r, oval1.g, oval1.b);
  ellipse(oval1.x, oval1.y, oval1.w, oval1.h);
  oval1.w += oval1.growth;
  oval1.w = constrain(oval1.w, 0, 500);
  oval1.h += oval1.growth;
  oval1.h = constrain(oval1.h, 0, 500);
  pop();
  //Draws the spaceship
  fill(oval2.r, oval2.g, oval2.b);
  ellipse(mouseX, mouseY, oval2.w, oval2.h);
  oval2.r = map(mouseX, 0, mouseY, 10, 225);
  //Draws the spaceship cockpit
  push();
  noStroke();
  fill(rectangle1.r, rectangle1.g, rectangle1.b);
  rectangle1.b = map(mouseX, 0, mouseY, 10, 225);
  rect(
    mouseX,
    mouseY,
    rectangle1.w,
    rectangle1.h,
    rectangle1.tl,
    rectangle1.tr
  );
  pop();
  rectMode(CENTER);
  //Hiding a part of the cockpit on spaceship
  push();
  noStroke();
  fill(oval2.r, oval2.g, oval2.b);
  ellipse(mouseX, mouseY, oval2.w, oval2.h);
  oval2.r = map(mouseX, 0, mouseY, 10, 225);
  pop();
  //Draws the spaceship's windows
  fill(rectangle2.r, rectangle2.g, rectangle2.b);
  rectangle2.g = map(mouseX, 0, mouseY, 10, 225);
  rect(
    mouseX,
    mouseY,
    rectangle2.w,
    rectangle2.h,
    rectangle2.tl,
    rectangle2.tr
  );
}
////////
//
// Creating the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  covid19.y = random(0, height);
  covid19.vx = covid19.speed;
  noCursor();
}
// draw()
//
// Creating COVID-19 simulation.
function draw() {
  //Creating background
  background(255);
  //Display static
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    fill(255);
    stroke(200, 100, 100);
    ellipse(x, y, 50);
  }
  //Creating COVID-19 movement
  noStroke();
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;
  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
  }
  //Modifying COVID-19 tints and opacity
  if (covid19.y < height / 2) {
    tint(255, 225);
  } else {
    tint(200, 100, 100, 20);
  }

}
//Creating catching effect
function mouseDragged() {
  mask.x = mouseX;
  mask.y = mouseY;
  let d = dist(mask.x, mask.y, covid19.x, covid19.y);
  if (d < covid19.w / 2 + mask.w / 2) {
    noLoop();
  }
  //Modifying mask tints and opacity
  if (mask.x > width / 2) {
    mask.tint.r = 255;
    mask.tint.g = 255;
    mask.tint.b = 255;
    mask.tint.alpha = 200;
  } else {
    mask.tint.r = 100;
    mask.tint.g = 100;
    mask.tint.b = 100;
    mask.tint.alpha = 50;
  }
}
/////
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
  //Setting circles positions
  circle1.x = width / 3;
  circle2.x = (2 * width) / 3;
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}
