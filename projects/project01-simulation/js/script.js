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
  soundTrack = loadSound ("");
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
  fill(200,200,100);
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
function wrongDrawing() {
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
function rightDrawing() {
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
  stroke(255);
  strokeWeight(5);
  if (mouseIsPressed===true) {
  line(mouseX,mouseY,pmouseX,pmouseY)
  }
  noLoop();
