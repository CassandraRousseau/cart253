/**************************************************
Exercise 5: Juggle Garden
Cassandra Rousseau

Kicking a ball simulation.
**************************************************/
"use strict";
let currentState;
// setup()
//
// Description of setup() goes here.
function preload() {
  currentState.preload();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentState = new Title();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  currentState.draw();
}

//Setting key functions ; changing states and dialog lines
function keyPressed() {
  currentState.keyPressed();
}
