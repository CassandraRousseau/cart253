/**************************************************
Exercise 5: Juggle Garden
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/

"use strict";
let gravityForce = 0.0025;
let knee;
let soccers = [];
let numSoccers = 3;
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
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(100, 200, 255);
  knee.move();
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
}
