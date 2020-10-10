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
let circle1 = {
  x: 0,
  y: 0,
  w: 145,
  h: 145,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle2 = {
  x: 28,
  y: 300,
  w: 35,
  h: 35,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle3 = {
  x: -28,
  y: 300,
  w: 35,
  h: 35,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle4 = {
  x: 0,
  y: 325,
  w: 30,
  h: 15,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle5 = {
  x: 0,
  y: 335,
  w: 70,
  h: 50,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle6 = {
  x: 0,
  y: 360,
  w: 45,
  h: 45,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle7 = {
  x: 0,
  y: 380,
  w: 30,
  h: 55,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle8 = {
  x: -75,
  y: 275,
  w: 40,
  h: 95,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle9 = {
  x: 75,
  y: 275,
  w: 40,
  h: 95,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle10 = {
  x: 30,
  y: 300,
  w: 40,
  h: 25,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circle11 = {
  x: -30,
  y: 300,
  w: 40,
  h: 25,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let bearearleft = {
  x: -52,
  y: 275,
  w: 75,
  h: 75,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let bearearright = {
  x: 52,
  y: 275,
  w: 75,
  h: 75,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let smile = {
  x1: -100,
  y1: 250,
  x2: -30,
  y2: 350,
  x3: 30,
  y3: 350,
  x4: 100,
  y4: 250,
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
let traitray1 = {
  x1: 250,
  y1: 250,
  x2: 250,
  y2: 220,
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

let traitstick = {
  x1: 0,
  y1: 300,
  x2: 0,
  y2: 400,
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
let traitleftsideleaf = {
  x1: 0,
  y1: 250,
  x2: -30,
  y2: 350,
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
let traitrightsideleaf = {
  x1: 0,
  y1: 250,
  x2: 30,
  y2: 350,
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
let tri1 = {
  x1: 0,
  y1: 340,
  x2: 20,
  y2: 370,
  x3: -20,
  y3: 370,
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
let tri2 = {
  x1: -20,
  y1: 330,
  x2: 20,
  y2: 330,
  x3: 0,
  y3: 370,
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
let tri3 = {
  x1: 0,
  y1: 230,
  x2: 80,
  y2: 300,
  x3: -80,
  y3: 300,
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
let catearleft = {
  x1: -55,
  y1: 225,
  x2: -60,
  y2: 270,
  x3: -30,
  y3: 245,
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
let catearright = {
  x1: 55,
  y1: 225,
  x2: 60,
  y2: 270,
  x3: 30,
  y3: 245,
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
let whisker1 = {
  x1: -20,
  y1: 330,
  x2: -85,
  y2: 335,
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
let whisker2 = {
  x1: -20,
  y1: 340,
  x2: -80,
  y2: 365,
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
let whisker3 = {
  x1: 20,
  y1: 330,
  x2: 85,
  y2: 335,
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
let whisker4 = {
  x1: 20,
  y1: 340,
  x2: 80,
  y2: 365,
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
let donebutton = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
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
  } else if (state === "level1") {
    level1();
  } else if (state === "level2") {
    level2();
  } else if (state === "level3") {
    level3();
  } else if (state === "level4") {
    level4();
  } else if (state === "level5") {
    level5();
  } else if (state === "level6") {
    level6();
  } else if (state === "level7") {
    level7();
  } else if (state === "level8") {
    level8();
  } else if (state === "level9") {
    level9();
  } else if (state === "level10") {
    level10();
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
//Setting level1
function level1() {
  simulation();
  if (isMouseInside(circle.x, circle.y, circle.w, circle.h)) {
    level2();
  }
}
//Setting level2
function level2() {
  simulation();
  if (isMouseInside(circle.x, circle.y, circle.w, circle.h)) {
    level3();
  } else {
    closed();
  }
}
//Setting level3
function level3() {
  simulation();
  if (
    isMouseInside(
      triangletemplate.x1,
      triangletemplate.y1,
      triangletemplate.x2,
      triangletemplate.y2,
      triangletemplate.x3,
      triangletemplate.y3
    )
  ) {
    level4();
  } else {
    closed();
  }
}
//Setting level4
function level4() {
  simulation();
  if (isMouseInside(circle.x, circle.y, circle.w, circle.h)) {
    level5();
  } else {
    closed();
  }
}
//Setting level5
function level5() {
  simulation();
  if (isMouseInside(circle.x, circle.y, circle.w, circle.h)) {
    level6();
  } else {
    closed();
  }
}
//Setting level6
function level6() {
  simulation();
  if (
    isMouseInside(
      triangletemplate.x1,
      triangletemplate.y1,
      triangletemplate.x2,
      triangletemplate.y2,
      triangletemplate.x3,
      triangletemplate.y3
    )
  ) {
    level7();
  } else {
    closed();
  }
}
//Setting level7
function level7() {
  simulation();
  if (
    isMouseInside(
      triangletemplate.x1,
      triangletemplate.y1,
      triangletemplate.x2,
      triangletemplate.y2,
      triangletemplate.x3,
      triangletemplate.y3
    )
  ) {
    level8();
  } else {
    closed();
  }
}
//Setting level8
function level8() {
  simulation();
  if (isMouseInside(circle.x, circle.y, circle.w, circle.h)) {
    level9();
  } else {
    closed();
  }
}
//Setting level9
function level9() {
  simulation();
  if (isMouseInside(circle.x, circle.y, circle.w, circle.h)) {
    level10();
  } else {
    closed();
  }
}
//Setting level10
function level10() {
  simulation();
  if (isMouseInside()) {
    open();
  } else {
    closed();
  }
}
//Setting simulation
function simulation() {
  simulation1();
}
function simulation1() {
  if (mug.x < width / 2) {
    displaytable();
    move();
    trimove(tri3);
    traitmove(traitleftsideleaf);
    traitmove(traitrightsideleaf);
    smilemove();
    acceleration();
    smileacceleration();
    triacceleration(tri3);
    traitacceleration(traitleftsideleaf);
    traitacceleration(traitrightsideleaf);
    constraining();
    display();
    leaf();
  }
  displaydonebutton();
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
function circlemove(circle) {
  circle.x += circle.vx;
  circle.y += circle.vy;
}
function traitmove(trait) {
  trait.x1 += trait.vx;
  trait.y1 += trait.vy;
  trait.y2 += trait.vy;
  trait.x2 += trait.vx;
}
function trimove(tri) {
  tri.x1 += tri.vx;
  tri.y1 += tri.vy;
  tri.y2 += tri.vy;
  tri.x2 += tri.vx;
  tri.y3 += tri.vy;
  tri.x3 += tri.vx;
}
function catearmove(catear) {
  catear.x1 += catear.vx;
  catear.y1 += catear.vy;
  catear.y2 += catear.vy;
  catear.x2 += catear.vx;
  catear.y3 += catear.vy;
  catear.x3 += catear.vx;
}
function whiskermove(whisker) {
  whisker.x1 += whisker.vx;
  whisker.y1 += whisker.vy;
  whisker.y2 += whisker.vy;
  whisker.x2 += whisker.vx;
}
function bearearmove(bearear) {
  bearear.x += bearear.vx;
  bearear.y += bearear.vy;
}
function smilemove(smile) {
  smile.x1 += smile.vx;
  smile.y1 += smile.vy;
  smile.x2 += smile.vx;
  smile.y2 += smile.vy;
  smile.x3 += smile.vx;
  smile.y3 += smile.vy;
  smile.x4 += smile.vx;
  smile.y4 += smile.vy;
}
//Setting cup speed
function acceleration() {
  plate.x += plate.speed;
  shadow.x += shadow.speed;
  handle.x += handle.speed;
  mug.x += mug.speed;
  coffee.x += coffee.speed;
}
function circleacceleration(circle) {
  circle.x += circle.speed;
}
function smileacceleration(smile) {
  smile.x1 += smile.speed;
  smile.x2 += smile.speed;
  smile.x3 += smile.speed;
  smile.x4 += smile.speed;
}
function triacceleration(tri) {
  tri.x1 += tri.speed;
  tri.x2 += tri.speed;
  tri.x3 += tri.speed;
}
function catearacceleration(catear) {
  catear.x1 += catear.speed;
  catear.x2 += catear.speed;
  catear.x3 += catear.speed;
}
function bearearacceleration(bearear) {
  bearear.x += bearear.speed;
}
function whiskeracceleration(whisker) {
  whisker.x1 += whisker.speed;
  whisker.x2 += whisker.speed;
}
function traitacceleration(trait) {
  trait.x1 += trait.speed;
  trait.x2 += trait.speed;
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
//Display done button
function displaydonebutton() {
  push();
  noStroke();
  fill(0, 255, 0);
  ellipse((2 * width) / 2, (2 * height) / 2, donebutton.w, donebutton.h);
  pop();
}
//Display sun drawing
function sun() {
  push();
  noFill();
  stroke(circle.stroke.r, circle.stroke.g, circle.stroke.b);
  strokeWeight(circle.strokeWeight);
  ellipse(circle.x, height / 2, circle.w, circle.h);
  rays(ray1);
  pop();
}
function rays(ray) {
  line(ray.x1, ray.y1, ray.x2, ray.y2);
}
//Display smiley drawing
function face() {
  push();
  displaycirclecenter();
  displaycircle(circle2);
  displaycircle(circle3);
  displaycurve(smile1);
  pop();
}

//Display heart drawing
function love() {
  push();
  noFill();
  pop();
}
//Display cat drawing
function cat() {
  push();
  displaycirclecenter();
  displaycircle(circle2);
  displaycircle(circle3);
  displaycircle(circle4);
  displaytri(tri1);
  displayear(earleft);
  displayear(earright);
  displaywhisker(whisker1);
  displaywhisker(whisker2);
  displaywhisker(whisker3);
  displaywhisker(whisker4);
  pop();
}
//Display bear drawing
function bear() {
  push();
  displaycirclecenter();
  displaycircle(circle2);
  displaycircle(circle3);
  displaycircle(circle4);
  displaycircle(circle5);
  displaybearear(bearearleft);
  displaybearear(bearearright);
  pop();
}
//Display umbrella drawing
function umbrella() {
  push();
  displaytri(tri3);
  noFill();
  stroke(traitstick.stroke.r, traitstick.stroke.g, traitstick.stroke.b);
  strokeWeight(traitstick.strokeWeight);
  line(traitstick.x1, traitstick.y1, traitstick.x2, traitstick.y2);
  pop();
}
//Display leaf drawing
function leaf() {
  push();
  displaycurve(smile2);
  displaytrait(traitleftsideleaf);
  displaytrait(traitrightsideleaf);
  pop();
}
//Display bird drawing
function bird() {
  push();
  displaycirclecenter();
  displaycircle(circle10);
  displaycircle(circle11);
  displaytri(tri2);
  pop();
}
//Display dog drawing
function dog() {
  push();
  displaycirclecenter();
  displaycircle(circle2);
  displaycircle(circle3);
  displaycircle(circle4);
  displaycircle(circle6);
  displaycircle(circle7);
  displaycircle(circle8);
  displaycircle(circle9);
  pop();
}
//Display grape drawing
function grape() {
  push();
  noFill();
  pop();
}
function displaycirclecenter() {
  push();
  noFill();
  stroke(circle1.stroke.r, circle1.stroke.g, circle1.stroke.b);
  strokeWeight(circle1.strokeWeight);
  ellipse(circle1.x, height / 2, circle1.w, circle1.h);
  pop();
}
function displaycircle(circle) {
  push();
  noFill();
  stroke(circle.stroke.r, circle.stroke.g, circle.stroke.b);
  strokeWeight(circle.strokeWeight);
  ellipse(circle.x, circle.y, circle.w, circle.h);
  pop();
}
function displaybearear(bearear) {
  push();
  noFill();
  stroke(bearear.stroke.r, bearear.stroke.g, bearear.stroke.b);
  strokeWeight(bearear.strokeWeight);
  rotate(PI / 4);
  arc(bearear.x, bearear.y, bearear.w, bearear.h, PI + QUARTER_PI, TWO_PI);
  pop();
}
function displaycatear(catear) {
  push();
  noFill();
  stroke(catear.stroke.r, catear.stroke.g, catear.stroke.b);
  strokeWeight(catear.strokeWeight);
  triangle(catear.x1, catear.y1, catear.x2, catear.y2, catear.x3, catear.y3);
  pop();
}
function displaywhisker(whisker) {
  push();
  noFill();
  stroke(whisker.stroke.r, whisker.stroke.g, whisker.stroke.b);
  strokeWeight(whisker.strokeWeight);
  line(whisker.x1, whisker.y1, whisker.x2, whisker.y2);
  pop();
}
function displaytri(tri) {
  push();
  noFill();
  stroke(tri.stroke.r, tri.stroke.g, tri.stroke.b);
  strokeWeight(tri.strokeWeight);
  triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3);
  pop();
}
function displaycurve(smile) {
  push();
  noFill();
  stroke(smile.stroke.r, smile.stroke.g, smile.stroke.b);
  strokeWeight(smile.strokeWeight);
  curve(
    smile.x1,
    smile.y1,
    smile.x2,
    smile.y2,
    smile.x3,
    smile.y3,
    smile.x4,
    smile.y4
  );
  pop();
}
function displaytrait(trait) {
  push();
  noFill();
  stroke(trait.stroke.r, trait.stroke.g, trait.stroke.b);
  strokeWeight(trait.strokeWeight);
  line(trait.x1, trait.y1, trait.x2, trait.y2);
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
//Setting the good ending
function open() {
  push();
  image(success.image, windowWidth, windowHeight);
  background(success.image);
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  push();
  textSize(35);
  text("Customers ADORE your coffees!", width / 2, 450);
  pop();
  pop();
}
//Setting the bad ending
function closed() {
  image(failure.image, windowWidth, windowHeight);
  background(failure.image);
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("OH NO!", width / 2, 500);
  push();
  textSize(25);
  text("Coffeeccino is closing!", width / 2, 550);
  text("You will have to find another job...", width / 2, 600);
  pop();
  pop();
}
//Setting keys to change states
function keyPressed() {
  if (state === "title" && keyCode === 32) {
    state = "welcome";
  } else if (state === "welcome") {
    state = "level1";
  }
}
//Setting mouse pressed use
function mouseIsPressed() {
  let d = dist(mouseX, mouseY, circle.x, circle.y);
  if (d < circle.w / 2 + circle.h / 2) {
    circle.dragging = true;
  } else if (state === "simulation") {
    drawing();
  }
}
function mouseReleased() {
  circle.dragging = false;
}
function mouseDragged() {
  if (circle.dragging) {
    circle.x = mouseX;
    circle.y = mouseY;
  }
}

//Setting the drawing function
function drawing() {
  stroke(255);
  strokeWeight(3);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
//Setting erasing function
function letterPressed() {
  if (state === "simulation" && keyCode === 90) {
    erasing();
  }
}
function erasing() {
  if (letterPressed === true) {
    erase();
  }
}
function isMouseInside(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}
