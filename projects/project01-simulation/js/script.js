/**************************************************
Project 01: Simulation
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
let coffee = {
  x: 150,
  y: 250,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 2,
};
let shadow = {
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
};

let bg = {
  r: 0,
  g: 0,
  b: 0,
};
let coffeeshop = {
  image: undefined,
};
let table={
  image:undefined,
};
let hand = {
  x:0,
  y:0,
  image: undefined,
};
let plate = {
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
let mug = {
  x: 500,
  y: 100,
  size: 150,
  r: 200,
  g: 155,
  b: 10,
  speed: -1,
  growth: -0.25,
};

let handle= {
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
    table.image = loadImage("assets/images/table.png");
    hand.image = loadImage("assets/images/");
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
  text("Press Spacebar to start", width/2, 2 * height / 2);
  pop();
}
function welcome() {
  push();
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
  if (state === "title" && keyCode===32){
      state = "welcome";
  }
}
function mousePressed(){
  if(state==="welcome"){
    state="simulation"
  }
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
  coffee.y = constrain(coffee.y, width/2,height/2);
  coffee.x = constrain(coffee.x,width/2,height/2);
  mug.y = constrain(mug.y, width/2,height/2);
  mug.x = constrain(mug.x,width/2,height/2);
  shadow.y = constrain(shadow.y, width/2,height/2);
  shadow.x = constrain(shadow.x,width/2,height/2);
handle.y = constrain(handle.y, width/2,height/2);
handle.x = constrain(handle.x,width/2,height/2);
plate.y = constrain(plate.y, width/2,height/2);
plate.x = constrain(plate.x,width/2,height/2);
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
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
  //Display table image
  image(table.image,windowWidth,windowHeight);
  //Display hand image
  image(hand.image,mouseX,mouseY);
}
function drawing() {
  hand.x = mouseX;
  hand.y = mouseY;
  stroke(255)
  if (mouseIsPressed===true) {
  line(mouseX,mouseY,pmouseX,pmouseY)
  }
  noLoop();
// draw()
//
//Creating the solar system
  //Draws the strokes
  stroke(255, 150);
  strokeWeight(8);


  //Draws Jupiter(left circle)
  fill(circle1.r, circle1.g, circle1.b, circle1.alpha);

  ellipse(circle1.x, circle1.y, circle1.size);
  circle1.x += circle1.speed;

  circle1.size = constrain(circle1.size, 0, 150);
  //Draws Mars(right circle)
  fill(circle2.r, circle2.g, circle2.b);
  circle2.b = map(circle1.x, 500, 250, 0, 150);
  ellipse(circle2.x, circle2.y, circle2.size);
  circle2.x += circle2.speed;
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
  covid19.y = random(0, height);
  covid19.vx = covid19.speed;
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

  //Setting circles positions
  circle1.x = width / 3;
  circle2.x = (2 * width) / 3;
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}
