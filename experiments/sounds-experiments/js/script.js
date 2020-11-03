/**************************************************
Sound experiments
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
"use strict";
let barkSFX;
function preload() {
  barkSFX = loadSound("assets/sounds/bark.wav");
}
function setup() {
  createCanvas(600, 600);
  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  let newRate = map(mouseX, 0, width, -3, 3);
  barkSFX.rate(newRate);
}
function mousePressed() {
  barkSFX.play();
}
