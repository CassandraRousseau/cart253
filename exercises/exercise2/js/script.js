/**************************************************
Exercise 02: Dodge-em
Cassandra Rousseau
COVID-19, represented by a red circle, will move from the left side of
the canvas to the right at a random y position. Each time it reaches the
right side, it will reset to the left at a random y position. The user will
control their own circle with the mouse position. If the COVID-19 circle touches
the user circle, everything stops! In the background we see random static for visual
 flair and we don’t see the mouse cursor.
**************************************************/
let covid19 = {
  x: 0,
  y: 250,
  w: 150,
  h: 150,
  image: undefined,
  vx: 0,
  vy: 0,
  speed: 15,
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
let numStatic = 300;
//Loading images for simulation.
function preload() {
  covid19.image = loadImage("assets/images/covidicon.png");
  mask.image = loadImage("assets/images/bluemask.png");
}
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
// Creating COVID19 simulation.
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
  //Creating COVID19 movement
  noStroke();
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;
  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
  }
  //Modifying Covid19 tints
  if (covid19.y < height / 2) {
    tint(255, 225);
  } else {
    tint(200, 100, 100, 20);
  }
  //Dsiplay COVID19 image
  image(covid19.image, covid19.x, covid19.y, covid19.w, covid19.h);
  //Display mask image
  tint(mask.tint.r, mask.tint.g, mask.tint.b, mask.tint.alpha);
  image(mask.image, mask.x, mask.y, mask.w, mask.h);
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
