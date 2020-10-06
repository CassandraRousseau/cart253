/**************************************************
Exercise 3: Love,actually
Cassandra Rousseau
The game open with a title screen. It's follows with an introduction page. When the simulation begins we see a cupid in darkness
surrounded by different type of hearts.They each move off in a random direction except for the cupid which is controlled
by the mouse. If the user eliminated all the heartbreaks surronding,the simulation ends with love triumphant!
If one of the heartbreak gots bigger than the edge of the canvas, the simulation ends in deep sadness.However, if the user shoot the
invisible heart, it will leads to an unknown ending...
**************************************************/
"use strict";
let intro =
  "Hello Cupid! \nYour misssion today is too fight against heartbreaks!\nSpread love by throwing arrows on these unfortunate couples!\nTo fly through the sky, move your mouse.To throw arrows, press the spacebar button.\nWatchout! Sadness spreads easily! Get rid of all the heartbreaks before it overwhelms the place!\nGood luck!";
let letter =
  "Dear Boss,\nI have the misfortune to announce you my departure.\nIt is time for me to leave and discover new horizons.\nThanks to all the organization members for the given experience during the past years.\nI will never forget my time spent with you.\nFarewell,\nCupid";
//
let heart1 = {
  x: 0,
  y: 0,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heart2 = {
  x: 0,
  y: 0,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heart3 = {
  x: 0,
  y: 0,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heart4 = {
  x: 0,
  y: 0,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heart5 = {
  x: 0,
  y: 0,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heartbreak1 = {
  x: 350,
  y: 250,
  w: 50,
  h: 50,
  growth: 1,
  vx: 0,
  vy: 0,
  speed: 0.5,
  image: undefined,
  active: true,
};
let heartbreak2 = {
  x: 350,
  y: 250,
  w: 50,
  h: 50,
  growth: 2,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
  active: true,
};
let heartbreak3 = {
  x: 350,
  y: 250,
  w: 50,
  h: 50,
  growth: 0.5,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined,
  active: true,
};
let heartbreak4 = {
  x: 350,
  y: 250,
  w: 50,
  h: 50,
  growth: 0.75,
  vx: 0,
  vy: 0,
  speed: 3,
  image: undefined,
  active: true,
};
let heartbreak5 = {
  x: 350,
  y: 250,
  w: 50,
  h: 50,
  growth: 3,
  vx: 0,
  vy: 0,
  speed: 0.75,
  image: undefined,
  active: true,
};
let cupid = {
  x: 250,
  y: 250,
  w: 300,
  h: 300,
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
  speed: 1,
  active: true,
  tint: {
    r: 100,
    g: 200,
    b: 205,
  },
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
let cloud = {
  x: 0,
  y: 0,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
//
let state = "title";
//
//Loading javascript objects
function preload() {
  cupid.image = loadImage("assets/images/cupid.png");
  heart1.image = loadImage("assets/images/heart.png");
  heart2.image = loadImage("assets/images/heart.png");
  heart3.image = loadImage("assets/images/heart.png");
  heart4.image = loadImage("assets/images/heart.png");
  heart5.image = loadImage("assets/images/heart.png");
  heartbreak1.image = loadImage("assets/images/heartbreak.png");
  heartbreak2.image = loadImage("assets/images/heartbreak.png");
  heartbreak3.image = loadImage("assets/images/heartbreak.png");
  heartbreak4.image = loadImage("assets/images/heartbreak.png");
  heartbreak5.image = loadImage("assets/images/heartbreak.png");
  invisibleheart.image = loadImage("assets/images/invisibleheart.png");
  cloud.image = loadImage("assets/images/cloud.png");
}
//
// Creating the canvas.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  //Setting hearts positions
  heart1.x = width / 3;
  heart2.x = (1 * width) / 3;
  heart3.x = (2 * width) / 3;
  invisibleheart.x = (1 * width) / 3;
  heartbreak1.x = (2 * width) / 3;
  heartbreak2.x = (1 * width) / 3;
  heartbreak3.x = width / 3;
  heartbreak4.x = (2 * width) / 3;
  heartbreak5.x = (1 * width) / 3;
  heart1.vx = random(-heart1.speed, heart1.speed);
  heart1.vy = random(-heart1.speed, heart1.speed);
  heart2.vx = random(-heart2.speed, heart2.speed);
  heart2.vy = random(-heart2.speed, heart2.speed);
  heart3.vx = random(-heart3.speed, heart3.speed);
  heart3.vy = random(-heart3.speed, heart3.speed);
  heart4.vx = random(-heart4.speed, heart4.speed);
  heart4.vy = random(-heart4.speed, heart4.speed);
  heart5.vx = random(-heart5.speed, heart5.speed);
  heart5.vy = random(-heart5.speed, heart5.speed);
  heartbreak1.vx = random(-heartbreak1.speed, heartbreak1.speed);
  heartbreak1.vy = random(-heartbreak1.speed, heartbreak1.speed);
  heartbreak2.vx = random(-heartbreak2.speed, heartbreak2.speed);
  heartbreak2.vy = random(-heartbreak2.speed, heartbreak2.speed);
  heartbreak3.vx = random(-heartbreak3.speed, heartbreak3.speed);
  heartbreak3.vy = random(-heartbreak3.speed, heartbreak3.speed);
  heartbreak4.vx = random(-heartbreak4.speed, heartbreak4.speed);
  heartbreak4.vy = random(-heartbreak4.speed, heartbreak4.speed);
  heartbreak5.vx = random(-heartbreak5.speed, heartbreak5.speed);
  heartbreak5.vy = random(-heartbreak5.speed, heartbreak5.speed);
  invisibleheart.vx = random(-invisibleheart.speed, invisibleheart.speed);
  invisibleheart.vy = random(-invisibleheart.speed, invisibleheart.speed);
}
//
//Creating the background.
function draw() {
  background(100, 200, 205);
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
  } else if (state === "quit") {
    quit();
  }
}
//
// Creating the simulation.
function simulation() {
  move();
  checkheartbreakEliminated();
  checkHeartbreakoverwhelm();
  invisibleheartTouched();
  display();
  constrainingPosition();
  growing();
  constrainingGrowth();
}
//
//Creating the title
function title() {
  push();
  textSize(105);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("CCSignLanguage");
  text("Cupidventure", width / 2, height / 2);
  push();
  textSize(35);
  text("Click your mouse to start", width / 2, 450);
  pop();
  pop();
}
//
//Creating the instructions
function instructions() {
  push();
  textSize(45);
  fill(255);
  textAlign(LEFT, TOP);
  textFont("CCSignLanguage");
  text(intro, 10, 50, windowWidth, windowHeight);
  pop();
}
//
//Creating the good ending
function love() {
  push();
  textSize(85);
  fill(225, 125, 125);
  textFont("CCSignLanguage");
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  push();
  textSize(45);
  text("Love is spread!", width / 2, 400);
  pop();
  pop();
}
//
//Creating the bad ending
function sadness() {
  push();
  textSize(90);
  fill(0);
  textFont("CCSignLanguage");
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  push();
  textSize(40);
  text("Heartbreaks conquered the world :'(", width / 2, 400);
  pop();
  pop();
}
//
//Creating the easter egg
function unknown() {
  push();
  background(0);
  textSize(45);
  fill(255);
  textAlign(LEFT, TOP);
  textFont("Consolas");
  text(letter, 0, 50, windowWidth, windowHeight);
  pop();
}
//
//Creating the unknown ending
function quit() {
  push();
  background(0);
  textSize(85);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Consolas");
  text("YOU QUIT YOUR JOB.", width / 2, height / 2);
  pop();
}
//
//Setting javascript objects movements
function move() {
  cupid.x = mouseX;
  cupid.y = mouseY;
  arrow.x += arrow.vx;
  arrow.y += arrow.vy;
  heart1.x += heart1.vx;
  heart1.y += heart1.vy;
  heart2.x += heart2.vx;
  heart2.y += heart2.vy;
  heart3.x += heart3.vx;
  heart3.y += heart3.vy;
  heart4.x += heart4.vx;
  heart4.y += heart4.vy;
  heart5.x += heart5.vx;
  heart5.y += heart5.vy;
  invisibleheart.x += invisibleheart.vx;
  invisibleheart.y += invisibleheart.vy;
  heartbreak1.x += heartbreak1.vx;
  heartbreak1.y += heartbreak1.vy;
  heartbreak2.x += heartbreak2.vx;
  heartbreak2.y += heartbreak2.vy;
  heartbreak3.x += heartbreak3.vx;
  heartbreak3.y += heartbreak3.vy;
  heartbreak4.x += heartbreak4.vx;
  heartbreak4.y += heartbreak4.vy;
  heartbreak5.x += heartbreak5.vx;
  heartbreak5.y += heartbreak5.vy;
}
//
//Checking if heartbreaks are all eliminated
function checkheartbreakEliminated() {
  isheartbreak1Eliminated();
  isheartbreak2Eliminated();
  isheartbreak3Eliminated();
  isheartbreak4Eliminated();
  isheartbreak5Eliminated();
  if (
    !heartbreak1.active &&
    !heartbreak2.active &&
    !heartbreak3.active &&
    !heartbreak4.active &&
    !heartbreak5.active
  ) {
    state = "love";
  }
}
//
//Setting the shooting effect for heartbreak1
function isheartbreak1Eliminated() {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, heartbreak1.x, heartbreak1.y);
  if (
    arrow.shooted &&
    heartbreak1.active &&
    d < arrow.w / 2 + heartbreak1.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Eliminated heartbreak1
    heartbreak1.active = false;
  }
}
//
//Setting the shooting effect for heartbreak2
function isheartbreak2Eliminated() {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, heartbreak2.x, heartbreak2.y);
  if (
    arrow.shooted &&
    heartbreak2.active &&
    d < arrow.w / 2 + heartbreak2.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Eliminated heartbreak2
    heartbreak2.active = false;
  }
}
//
//Setting the shooting effect for heartbreak3
function isheartbreak3Eliminated() {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, heartbreak3.x, heartbreak3.y);
  if (
    arrow.shooted &&
    heartbreak3.active &&
    d < arrow.w / 2 + heartbreak3.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Eliminated heartbreak3
    heartbreak3.active = false;
  }
}
//
//Setting the shooting effect for heartbreak4
function isheartbreak4Eliminated() {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, heartbreak4.x, heartbreak4.y);
  if (
    arrow.shooted &&
    heartbreak4.active &&
    d < arrow.w / 2 + heartbreak4.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Eliminated heartbreak4
    heartbreak4.active = false;
  }
}
//
//Setting the shooting effect for heartbreak5
function isheartbreak5Eliminated() {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, heartbreak5.x, heartbreak5.y);
  if (
    arrow.shooted &&
    heartbreak5.active &&
    d < arrow.w / 2 + heartbreak5.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Eliminated heartbreak5
    heartbreak5.active = false;
  }
}
//
//Checking if heartbreaks go outside the canvas.
function checkHeartbreakoverwhelm() {
  if (
    isHeartbreak1overwhelm() ||
    isHeartbreak2overwhelm() ||
    isHeartbreak3overwhelm() ||
    isHeartbreak4overwhelm() ||
    isHeartbreak5overwhelm()
  ) {
    state = "sadness";
  }
}
//
function isHeartbreak1overwhelm() {
  if (heartbreak1.w === width && heartbreak1.h === height) {
    return true;
  } else {
    return false;
  }
}
//
function isHeartbreak2overwhelm() {
  if (heartbreak2.w === width && heartbreak2.h === height) {
    return true;
  } else {
    return false;
  }
}
//
function isHeartbreak3overwhelm() {
  if (heartbreak3.w === width && heartbreak3.h === height) {
    return true;
  } else {
    return false;
  }
}
//
function isHeartbreak4overwhelm() {
  if (heartbreak4.w === width && heartbreak4.h === height) {
    return true;
  } else {
    return false;
  }
}
//
function isHeartbreak5overwhelm() {
  if (heartbreak5.w === width && heartbreak5.h === height) {
    return true;
  } else {
    return false;
  }
}
//
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
    state = "unknown";
  }
}
//
//Display images
function display() {
  displaycloud(150, 400, 300, 300);
  displaycloud(100, 100, 500, 300);
  displaycloud(1200, 300, 500, 500);
  displaycloud(600, 500, 500, 300);
  displaycloud(800, 100, 600, 300);
  displayheart();
  displaytherest();
  displayheartbreak();
}
//
//Display clouds
function displaycloud(x, y, w, h) {
  for (let i = 0; i < 1; i++) {
    // We can still use x and y as variables
    image(cloud.image, x, y, w, h);
    // Including changing x inside our loop
    x = x + 5;
  }
}
//
//Display hearts
function displayheart() {
  image(heart1.image, heart1.x, heart1.y, heart1.w, heart1.h);
  image(heart2.image, heart2.x, heart2.y, heart2.w, heart2.h);
  image(heart3.image, heart3.x, heart3.y, heart3.w, heart3.h);
  image(heart4.image, heart4.x, heart4.y, heart4.w, heart4.h);
  image(heart5.image, heart5.x, heart5.y, heart5.w, heart5.h);
}
//
//Setting when heartbreaks are displayed
function displayheartbreak() {
  if (heartbreak1.active) {
    imageMode(CENTER);
    image(
      heartbreak1.image,
      heartbreak1.x,
      heartbreak1.y,
      heartbreak1.w,
      heartbreak1.h
    );
  }
  if (heartbreak2.active) {
    imageMode(CENTER);
    image(
      heartbreak2.image,
      heartbreak2.x,
      heartbreak2.y,
      heartbreak2.w,
      heartbreak2.h
    );
  }
  if (heartbreak3.active) {
    imageMode(CENTER);
    image(
      heartbreak3.image,
      heartbreak3.x,
      heartbreak3.y,
      heartbreak3.w,
      heartbreak3.h
    );
  }
  if (heartbreak4.active) {
    imageMode(CENTER);
    image(
      heartbreak4.image,
      heartbreak4.x,
      heartbreak4.y,
      heartbreak4.w,
      heartbreak4.h
    );
  }
  if (heartbreak5.active) {
    imageMode(CENTER);
    image(
      heartbreak5.image,
      heartbreak5.x,
      heartbreak5.y,
      heartbreak5.w,
      heartbreak5.h
    );
  }
}
//
//Display the rest of javascript objects
function displaytherest() {
  push();
  imageMode(CENTER);
  image(cupid.image, mouseX, mouseY, cupid.w, cupid.h);
  pop();
  push();
  image(
    invisibleheart.image,
    invisibleheart.x,
    invisibleheart.y,
    invisibleheart.w,
    invisibleheart.h
  );
  pop();
  //Setting when arrow is displayed
  if (arrow.shooted) {
    rect(arrow.x, arrow.y, arrow.w, arrow.h, arrow.fill);
  }
}
//
//Constraining heartbreaks moving outside the canvas
function constrainingPosition() {
  heartbreak1.x = constrain(heartbreak1.x, 0, width);
  heartbreak1.y = constrain(heartbreak1.y, 0, height);
  heartbreak2.x = constrain(heartbreak2.x, 0, width);
  heartbreak2.y = constrain(heartbreak2.y, 0, height);
  heartbreak3.x = constrain(heartbreak3.x, 0, width);
  heartbreak3.y = constrain(heartbreak3.y, 0, height);
  heartbreak4.x = constrain(heartbreak4.x, 0, width);
  heartbreak4.y = constrain(heartbreak4.y, 0, height);
  heartbreak5.x = constrain(heartbreak5.x, 0, width);
  heartbreak5.y = constrain(heartbreak5.y, 0, height);
}
//
//Setting growing effect on heartbreaks
function growing() {
  heartbreak1.w += heartbreak1.growth;
  heartbreak1.h += heartbreak1.growth;
  heartbreak2.w += heartbreak2.growth;
  heartbreak2.h += heartbreak2.growth;
  heartbreak3.w += heartbreak3.growth;
  heartbreak3.h += heartbreak3.growth;
  heartbreak4.w += heartbreak4.growth;
  heartbreak4.h += heartbreak4.growth;
  heartbreak5.w += heartbreak5.growth;
  heartbreak5.h += heartbreak5.growth;
}
//
//Constraining heartbreaks growing outside the canvas
function constrainingGrowth() {
  heartbreak1.w = constrain(heartbreak1.w, 0, width);
  heartbreak1.h = constrain(heartbreak1.h, 0, height);
  heartbreak2.w = constrain(heartbreak2.w, 0, width);
  heartbreak2.h = constrain(heartbreak2.h, 0, height);
  heartbreak3.w = constrain(heartbreak3.w, 0, width);
  heartbreak3.h = constrain(heartbreak3.h, 0, height);
  heartbreak4.w = constrain(heartbreak4.w, 0, width);
  heartbreak4.h = constrain(heartbreak4.h, 0, height);
  heartbreak5.w = constrain(heartbreak5.w, 0, width);
  heartbreak5.h = constrain(heartbreak5.h, 0, height);
}
//
//Setting mouse commands
function mousePressed() {
  if (state === "title") {
    state = "instructions";
  } else if (state === "instructions") {
    state = "simulation";
  } else if (state === "unknown") {
    state = "quit";
  }
}
//
//Setting keys commands
function keyPressed() {
  if (!arrow.shooted && keyCode === 32) {
    arrow.shooted = true;
    arrow.x = cupid.x;
    arrow.y = cupid.y;
    arrow.vx = arrow.speed;
  }
}
