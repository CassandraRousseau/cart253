/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
"use strict";
let currentState;
let gravityForce = 0.0025;
let timer;
let soccers = [];
let basketballs = [];
let numSoccers = 3;
let numBasketballs = 3;
let kneeImage;
let soccerImage;
let basketballImage;
// setup()
//
// Setting all the preloaded images
function preload() {
  currentState.preload();
}
//Setting all the setups for each state.
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentState = new Title();
}

// draw()
//
// Setting the draw function for each state.
function draw() {
  currentState.draw();
}

//Setting all key functions for each state.
function keyPressed() {
  currentState.keyPressed();
}
