/**************************************************
Exercise 5: Juggle Garden
Cassandra Rousseau

Kicking a ball simulation.
**************************************************/
"use strict";
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
  background(100, 200, 255);
  if (state === "title") {
    let title = new Title();
  } else if (state === "instructions") {
    let instructions = new Instructions();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "goodEnding") {
    let goodEnding = new GoodEnding();
  } else if (state === "badEnding") {
    let badEnding = new BadEnding();
  }
}
//Setting simulation
function simulation() {
  knee.display();
  for (let i = 0; i < soccers.length; i++) {
    let soccer = soccers[i];
    if (soccer.active) {
      soccer.gravity(gravityForce);
      soccer.move();
      soccer.bounce(knee);
      soccer.display();
    }
  }
  for (let i = 0; i < basketballs.length; i++) {
    let basketball = basketballs[i];
    if (basketball.active) {
      basketball.gravity(gravityForce);
      basketball.move();
      basketball.bounce(knee);
      basketball.display();
    }
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
