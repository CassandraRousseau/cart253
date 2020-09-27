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
  size: 100,
  image: undefined,
  vx: 0,
  vy: 0,
  speed: 5,
};
let mask = {
  x: 250,
  y: 250,
  size: 100,
  image: undefined,
  tint: {
    r: 100,
    g: 100,
    b: 200,
  },
};
let numStatic = 300;
// setup()
function preload() {
  covid19.image = loadimage("assets/images/covidicon.png");
  mask.image = loadimage("assets/images/bluemask.png");
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
// Creating the COVID19 simulation.
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
  if (covid19.y < height / 2) {
    tint(255);
  } else {
    tint(200, 100, 100);
  }
  image(covid19.image, covid19.x, covid.y, covid19.size);
  tint(mask.tint.r, mask.tint.g, mask.tint.b);
  image(mack.image, mask.x, mask.y, mask.size);
}
//Creating catching effect
function mouseDragged() {
  mask.x = mouseX;
  mask.y = mouseY;
  let d = dist(mask.x, mask.y, covid19.x, covid19.y);
  if (d < covid19.size / 2 + mask.size / 2) {
    noLoop();
  }
  //Modifying user fill
  if (mask.x > width / 2) {
    mask.fill.r = 255;
    mask.fill.g = 255;
    mask.fill.b = 255;
  } else {
    mask.fill.r = 100;
    mask.fill.g = 100;
    mask.fill.b = 200;
  }
}
