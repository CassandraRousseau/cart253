/**************************************************
Exercise 5: Juggle Garden
Cassandra Rousseau

Kicking a ball simulation.
**************************************************/
"use strict";
let intro =
  "Good morning player!\nToday for your practice you will kick repeatively the soccer ball!\nCatch the falling balls and kick them to not let them fall apart.\nClick on the left and right arrows to move your knee.\nDon't forget! You have to keep the ryhthm until time is out!\nGood Luck!";
let goodJob = "Good Job!\nSee you tomorrow player for another practice!";
let messUp =
  "What are you doing!?!?\nYou have to kick the ball,not let it fall!";
let wrongBall = "What are you doing!?!?\nWe are not here to dribble and shoot!";
let gravityForce = 0.0025;
let title;
let instructions;
let goodEnding;
let badEnding;
let timer;
let knee;
let soccers = [];
let basketballs = [];
let numSoccers = 3;
let numBasketballs = 3;
// setup()
//
// Description of setup() goes here.
function preload() {
  soccer.preload();
  basketball.preload();
  knee.preload();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  knee = new Knee(300, 300);
  for (let i = 0; i < numSoccers; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let soccer = new Soccer(x, y);
    soccers.push(soccer);
  }
  for (let i = 0; i < numBasketballs; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let basketball = new Basketball(x, y);
    basketballs.push(basketball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  if (state === "title") {
    let title = new Title();
  } else if (state === "instructions") {
    let instructions = new Instructions();
  } else if (state === "simulation") {
    let simulation = new Simulation();
  } else if (state === "goodEnding") {
    let goodEnding = new GoodEnding();
  } else if (state === "badEnding") {
    let badEnding = new BadEnding();
  }
}

//Setting key functions ; changing states and dialog lines
function keyPressed() {
  knee.keyPressed();
  title.keyPressed();
  instructions.keyPressed();
  goodEnding.keyPressed();
  badEnding.keyPressed();
}
