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
  fill:{
    r:200,
    g:200,
    b:100,
  }
};
let shadow = {
  x: 350,
  y: 250,
  size: 100,
  fill:255,
  stroke:127,
  strokeWeight:3,
  vx: 0,
  vy: 0,
  speed: 2,
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
fill:255,
  speed: 0.75,

};
let mug = {
  x: 500,
  y: 100,
  size: 150,
fill:255,
  speed: 1,
};

let handle= {
  w: 80,
  h: 145,
  tl: 5,
  tr: 5,
fill:255
};
let state = "title";
//Loading images for simulation.
function preload() {
  soundTrack = loadSound ("");
  coffeeshop.image = loadImage("assets/images/coffeeshop.png");
  success.image = loadImage("assets/images/");
  failure.image = loadImage("assets/images/");
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
  textSize(35);
  fill(200,200,100);
  textFont("Blambot Pro BB")
  textAlign(LEFT, TOP);
  text("Welcome new employee!", 0, 50);
    text("We are glad to have you in our team!", 0, 150);
    text("This newly open coffeeshop need your talent to create succulent latte!",0.200);
    text("Press your mouse and drag it to make drawings on latte",0,300);
    text("Follow the guidelines to create beautiful artworks!",0,350);
      text("Be artsy, have fun and good luck!",0,350);
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
    text("Customers ADORE your latte!", width / 2, 350);
  pop();
}
function failure() {
  tint(mask.tint.r, mask.tint.g, mask.tint.b, mask.tint.alpha);
  image(mask.image, mask.x, mask.y, mask.w, mask.h);
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("OH NO!", width / 2, height / 2);
    text("Coffeeccino is closing!", width / 2, 350);
        text("You will have to find another job...", width / 2, 450);
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
