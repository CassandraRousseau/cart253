/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
"use strict";
let currentState;
let gravityForce = 0.0025;
let timer;
let petals = [];
let numRedPetals = 20;
let petalImage;
let magicPetalImage;
// setup()
//
// Setting all the preloaded images
function preload() {
  magicPetalImage = loadImage("assets/images/magicPetal.png");
  petalImage = loadImage("assets/images/Petal.png");
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
