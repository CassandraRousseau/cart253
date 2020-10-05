/**************************************************
Exercise 3: Love,actually
Cassandra Rousseau
We will open with a title screen. When the simulation begins we see two circles in darkness,
they each move off in a random direction. If they touch each other,the simulation ends with love triumphant!
If one goes off the edge of the canvas, the simulation ends in deep sadness.
**************************************************/
"use strict";
let heart = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined,
};
let heartbreak = {
  x: 350,
  y: 250,
  w: 50,
  h: 50,
  growth: 1,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined,
  active: true,
};
let cupid = {
  x: 250,
  y: 250,
  w: 200,
  h: 200,
  image: undefined,
};
let invisibleheart = {
  x: 350,
  y: 250,
  w: 100,
  h: 100,
  image: undefined,
  vx: 0,
  vy: 0,
  speed: 2,
  active: true,
};
let arrow = {
  x: -100,
  y: -100,
  w: 50,
  h: 20,
  fill: 255,
  vx: 0,
  vy: 0,
  speed: 20,
  shooted: false,
};

let state = "title";
//Loading my javascript objects
function preload() {
  heartbreak.image = loadImage("assets/images/heartbreak.png");
  cupid.image = loadImage("assets/images/cupid.png");
  heart.image = loadImage("assets/images/heart.png");
  invisibleheart.image = loadImage("assets/images/invisibleheart.png");
}
// setup()
//
// Creating the canvas.
function setup() {
  createCanvas(windowWidth, windowHeight);
  //Setting hearts positions
  heart.x = width / 3;
  heart.x = (2 * -width) / 3;
  heartbreak.x = (2 * width) / 3;
  heart.vx = random(-heart.speed, heart.speed);
  heart.vy = random(-heart.speed, heart.speed);
  heartbreak.vx = random(-heartbreak.speed, heartbreak.speed);
  heartbreak.vy = random(-heartbreak.speed, heartbreak.speed);
  invisibleheart.vx = random(-invisibleheart.speed, invisibleheart.speed);
  invisibleheart.vy = random(-invisibleheart.speed, invisibleheart.speed);
}

// draw()
//
//Creating the background.
function draw() {
  background(0);
  //Making the order of the simulation
  if (state === "title") {
    title();
  } else if (state === "instructions") {
    instructions();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "love") {
    love();
  } else if (state === "sadness") {
    sadness();
  } else if (state === "unknown") {
    unknown();
  }
}
// Creating the simulation.
function simulation() {
  move();
  checkHeartbreakoverwhelm();
  heartbreakEliminated();
  growing();
  display();
}
//Creating the title
function title() {
  push();
  textSize(85);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("CCSignLanguage");
  text("Cupidventure", width / 2, height / 2);
  heartbreakEliminated;
  pop();
}
//Creating the instructions
function instructions() {
  push();
  textSize(35);
  fill(200, 100, 100);
  textAlign(LEFT, TOP);
  textFont("CCSignLanguage");
  text("Hello Cupid!", 0, 50);
  text("Your misssion today is too fight against heartbreaks!", 0, 150);
  text("Spread love by throwing arrows on these unfortunate couples! ", 0, 200);
  text(
    "To fly through the city, move your mouse.To throw arrows, click on the left side ",
    0,
    300
  );
  text("of your mouse.", 0, 350);
  text(
    "Watchout! Sadness spreads easily! Get rid of all the heartbreaks before it overwhelms",
    0,
    450
  );
  text("the place! Good luck!", 0, 500);
  pop();
}
//Creating the good ending
function love() {
  push();
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  text("Love is spread!", width / 2, (2 * height) / 2);
  pop();
}
//Creating the bad ending
function sadness() {
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  pop();
}
//Creating the easter egg
function unknown() {
  push();
  textSize(35);
  fill(255);
  textAlign(LEFT, TOP);
  textFont("Consolas");
  text("Dear Boss,", 0, 50);
  text("I have the misfortune to announce you my departure.", 0, 150);
  text("It is time for me to go and discover new horizons.", 0, 200);
  text(
    "Thanks to all the members of the organization for the gained knowledge during the past years, ",
    0,
    300
  );
  text("I will never forget my experience within this community ", 0, 450);
  text("Farewell,", 0, 500);
  text("Cupid", 0, 550);
  pop();
}
//Creating the unknown ending
function quit() {
  push();
  textSize(85);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Consolas");
  text("YOU QUIT YOUR JOB.", 0, 200);
  pop();
}
function move() {
  //Setting circles movements
  cupid.x = mouseX;
  cupid.y = mouseY;
  arrow.x += arrow.vx;
  arrow.y += arrow.vy;
  heart.x += heart.vx;
  heart.y += heart.vy;
  invisibleheart.x += invisibleheart.vx;
  invisibleheart.y += invisibleheart.vy;
  heartbreak.x += heartbreak.vx;
  heartbreak.y += heartbreak.vy;
}
//Setting the shooting effect
function heartbreakEliminated() {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, heartbreak.x, heartbreak.y);
  if (arrow.shooted & heartbreak.active && d < arrow.w / 2 + heartbreak.w / 2) {
    // Stop the arrow
    arrow.shooted = false;
    // Eliminated heartbreak
    heartbreak.active = false;
  }
}
//Setting shooting on invisible heart
function invisibleheartTouched() {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, invisibleheart.x, invisibleheart.y);
  if (
    arrow.shooted & invisibleheart.active &&
    d < arrow.w / 2 + invisibleheart.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Touched invisibleheart
    invisibleheart.active = false;
  }
}
function checkinvisibleheartTouched() {
  if (invisibleheartTouched()) {
    state = "unknown";
  }
}
function checkHeartbreakoverwhelm() {
  //Checking if heartbreak go outside the canvas.
  if (isHeartbreakoverwhelm()) {
    state = "sadness";
  }
}
function isHeartbreakoverwhelm() {
  if (heartbreak.w > width && heartbreak.h > height) {
    return true;
  } else {
    return false;
  }
}
//Setting growing effect of heartbreak
function growing() {
  heartbreak.w += heartbreak.growth;
  heartbreak.h += heartbreak.growth;
}
function display() {
  //Display images
  image(cupid.image, mouseX, mouseY, cupid.w, cupid.h);
  image(heart.image, heart.x, heart.y, heart.w, heart.h);
  image(
    invisibleheart.image,
    invisibleheart.x,
    invisibleheart.y,
    invisibleheart.w,
    invisibleheart.h
  );
  //Setting when arrow or heartbreak are displayed
  if (arrow.shooted) {
    rect(arrow.x, arrow.y, arrow.w, arrow.h, arrow.fill);
  }
  if (heartbreak.active) {
    image(
      heartbreak.image,
      heartbreak.x,
      heartbreak.y,
      heartbreak.w,
      heartbreak.h
    );
  }
}

function mousePressed() {
  if (state === "title") {
    state = "instructions";
  } else if (state === "instructions") {
    state = "simulation";
  } else if (state === "unknown") {
    state = "quit";
  }
}
function mouseClicked() {
  if (!arrow.shooted) {
    arrow.shooted = true;
    arrow.x = cupid.x;
    arrow.y = cupid.y;
    arrow.vx = arrow.speed;
  }
}
