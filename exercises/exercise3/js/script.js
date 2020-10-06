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
  x: 100,
  y: 100,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heart2 = {
  x: 200,
  y: 200,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heart3 = {
  x: 300,
  y: 300,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heart4 = {
  x: 400,
  y: 400,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heart5 = {
  x: 500,
  y: 500,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  speed: 1,
  image: undefined,
};
let heartbreak1 = {
  x: 100,
  y: 100,
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
  x: 200,
  y: 200,
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
  x: 300,
  y: 300,
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
  x: 400,
  y: 400,
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
  x: 500,
  y: 500,
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
  heart4.x = (1 * width) / 3;
  heart5.x = width / 3;
  invisibleheart.x = (1 * width) / 3;
  heartbreak1.x = (2 * width) / 3;
  heartbreak2.x = (1 * width) / 3;
  heartbreak3.x = width / 3;
  heartbreak4.x = (2 * width) / 3;
  heartbreak5.x = (1 * width) / 3;
  //Setting random hearts direction
  setHeartspeed(heart1);
  setHeartspeed(heart2);
  setHeartspeed(heart3);
  setHeartspeed(heart4);
  setHeartspeed(heart5);
  setHeartbreakspeed(heartbreak1);
  setHeartbreakspeed(heartbreak2);
  setHeartbreakspeed(heartbreak3);
  setHeartbreakspeed(heartbreak4);
  setHeartbreakspeed(heartbreak5);
  invisibleheart.vx = random(-invisibleheart.speed, invisibleheart.speed);
  invisibleheart.vy = random(-invisibleheart.speed, invisibleheart.speed);
}
//
//Setting hearts speed
function setHeartspeed(heart) {
  heart.vx = random(-heart.speed, heart.speed);
  heart.vy = random(-heart.speed, heart.speed);
}
//
//Setting heartbreaks positions
function setHeartbreakspeed(heartbreak) {
  heartbreak.vx = random(-heartbreak.speed, heartbreak.speed);
  heartbreak.vy = random(-heartbreak.speed, heartbreak.speed);
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
  cupidmove();
  arrowmove();
  heartmove(heart1);
  heartmove(heart2);
  heartmove(heart3);
  heartmove(heart4);
  heartmove(heart5);
  invisibleheartmove();
  heartbreakmove(heartbreak1);
  heartbreakmove(heartbreak2);
  heartbreakmove(heartbreak3);
  heartbreakmove(heartbreak4);
  heartbreakmove(heartbreak5);
  checkheartbreakEliminated();
  checkHeartbreakoverwhelm();
  invisibleheartTouched();
  display();
  constrainingPosition(heartbreak1);
  constrainingPosition(heartbreak2);
  constrainingPosition(heartbreak3);
  constrainingPosition(heartbreak4);
  constrainingPosition(heartbreak5);
  growing(heartbreak1);
  growing(heartbreak2);
  growing(heartbreak3);
  growing(heartbreak4);
  growing(heartbreak5);
  constrainingGrowth(heartbreak1);
  constrainingGrowth(heartbreak2);
  constrainingGrowth(heartbreak3);
  constrainingGrowth(heartbreak4);
  constrainingGrowth(heartbreak5);
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
  text("Sadness conquered the world :'(", width / 2, 400);
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
//Setting cupid movements
function cupidmove() {
  cupid.x = mouseX;
  cupid.y = mouseY;
}
//
//Setting arrow movements
function arrowmove() {
  arrow.x += arrow.vx;
  arrow.y += arrow.vy;
}
//
//Setting hearts movements
function heartmove(heart) {
  heart.x += heart.vx;
  heart.y += heart.vy;
}
//
//Setting invisible heart movements
function invisibleheartmove() {
  invisibleheart.x += invisibleheart.vx;
  invisibleheart.y += invisibleheart.vy;
}
//
//Setting heartbreaks movements
function heartbreakmove(heartbreak) {
  heartbreak.x += heartbreak.vx;
  heartbreak.y += heartbreak.vy;
}
//
//Checking if heartbreaks are all eliminated
function checkheartbreakEliminated() {
  isheartbreakEliminated(heartbreak1);
  isheartbreakEliminated(heartbreak2);
  isheartbreakEliminated(heartbreak3);
  isheartbreakEliminated(heartbreak4);
  isheartbreakEliminated(heartbreak5);
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
//Setting the shooting effect for heartbreaks
function isheartbreakEliminated(heartbreak) {
  if (arrow.x > width) {
    arrow.shooted = false;
  }
  let d = dist(arrow.x, arrow.y, heartbreak.x, heartbreak.y);
  if (
    arrow.shooted &&
    heartbreak.active &&
    d < arrow.w / 2 + heartbreak.w / 2
  ) {
    // Stop the arrow
    arrow.shooted = false;
    // Eliminated heartbreak1
    heartbreak.active = false;
  }
}
//
//Checking if heartbreaks go outside the canvas.
function checkHeartbreakoverwhelm() {
  if (
    isHeartbreakoverwhelm(heartbreak1) ||
    isHeartbreakoverwhelm(heartbreak2) ||
    isHeartbreakoverwhelm(heartbreak3) ||
    isHeartbreakoverwhelm(heartbreak4) ||
    isHeartbreakoverwhelm(heartbreak5)
  ) {
    state = "sadness";
  }
}
//Setting when checking if heartbreaks go outside the canvas
function isHeartbreakoverwhelm(heartbreak) {
  if (heartbreak.w === width && heartbreak.h === height) {
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
  displayheart(heart1);
  displayheart(heart2);
  displayheart(heart3);
  displayheart(heart4);
  displayheart(heart5);
  displaytherest();
  displayheartbreak(heartbreak1);
  displayheartbreak(heartbreak2);
  displayheartbreak(heartbreak3);
  displayheartbreak(heartbreak4);
  displayheartbreak(heartbreak5);
}
//
//Display clouds
function displaycloud(x, y, w, h) {
  for (let i = 0; i < 1; i++) {
    image(cloud.image, x, y, w, h);
    x = x + 5;
  }
}
//
//Display hearts
function displayheart(heart) {
  image(heart.image, heart.x, heart.y, heart.w, heart.h);
}
//
//Setting when heartbreaks are displayed
function displayheartbreak(heartbreak) {
  if (heartbreak.active) {
    imageMode(CENTER);
    image(
      heartbreak.image,
      heartbreak.x,
      heartbreak.y,
      heartbreak.w,
      heartbreak.h
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
function constrainingPosition(heartbreak) {
  heartbreak.x = constrain(heartbreak.x, 0, width);
  heartbreak.y = constrain(heartbreak.y, 0, height);
}
//
//Setting growing effect on heartbreaks
function growing(heartbreak) {
  heartbreak.w += heartbreak.growth;
  heartbreak.h += heartbreak.growth;
}
//
//Constraining heartbreaks growing outside the canvas
function constrainingGrowth(heartbreak) {
  heartbreak.w = constrain(heartbreak.w, 0, width);
  heartbreak.h = constrain(heartbreak.h, 0, height);
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
