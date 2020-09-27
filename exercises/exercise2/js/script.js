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
  vx: 0,
  vy: 0,
  speed: 5,
};
let user = {
  x: 250,
  y: 250,
  w: 100,
  h: 50,
  fill: {
    r: 100,
    g: 100,
    b: 200,
  }
};
let circle={
  x:250,
  y:250,
  size:50,
  fill:255
};
let numStatic = 300;
// setup()
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
  let x=circle.x
  let y=circle.y
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(200, 100, 100);
    ellipse(x, y,circle.size);
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
    fill(255);
  } else {
    fill(200, 100, 100);
  }
}

//Creating catching effect
function mouseDragged() {
  user.x = mouseX;
  user.y = mouseY;
  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if (d < covid19.size / 2 + user.size / 2) {
    noLoop();
  }
  //Display COVID19
  ellipse(covid19.x, covid19.y, covid19.size);
  //Display user
  rect(user.x, user.y, user.w, user.h);
  if (user.x > width / 2) {
    fill(255);
  } else {
    fill(user.fill.r, user.fill.g, user.fill.b);
  }
}
