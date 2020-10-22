/**************************************************
Exercise 5: Juggle Garden
Cassandra Rousseau

Kicking a ball simulation.
**************************************************/

"use strict";
let gravityForce = 0.0025;
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
    let title= new Title;
  } else if (state === "instructions") {
    let instructions=new Instructions;
  } else if (state === "simulation") {
    simulation();
  } else if (state === "goodEnding") {
  let goodEnding=new GoodEnding;
  } else if (state === "badEnding") {
    let badEnding=new BadEnding
  } else if (state === "timeOut") {
    timeOut();
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
  timeCheck();
}

//Setting time out screen
function timeOut() {
  push();
  textSize(85);
  fill(225, 125, 125);
  textFont("Lemonada");
  textAlign(LEFT, TOP);
  text("Time is out!", 10, height / 2, windowWidth, windowHeight);
  push();
  textSize(35);
  text("Press Enter to restart", 10, (2 * height) / 3);
  pop();
  pop();
}



//Setting timer in simulation
function timeCheck() {
  if (frameCount > timer && flowers.length === 0) {
    state = "badEnding";
    currentLine = 0;
  } else if (frameCount > timer && flowers.length <= 19) {
    state = "timeOut";
    currentLine = 0;
  } else if (frameCount > timer && flowers.length === 20) {
    state = "goodEnding";
    currentLine = 0;
  }
}
//Setting key functions ; changing states and dialog lines
function keyPressed() {
  knee.keyPressed();
title.keyPressed();
instructions.keyPressed();
goodEnding.keyPressed();
badEnding.keyPressed();
 if (state === "timeOut") {
      location.reload();
    }
  }
  if (keyCode === 32) {
    currentLine = currentLine + 1;

    if (currentLine === intro.length && state === "instructions") {
      currentLine = intro.length - 1;
    } else if (currentLine === right.length && state === "goodEnding") {
      currentLine = right.length - 1;
    } else if (currentLine === wrong.length && state === "badEnding") {
      currentLine = wrong.length - 1;
    }
  }
}
