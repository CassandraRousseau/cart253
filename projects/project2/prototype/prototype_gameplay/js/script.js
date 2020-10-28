/**************************************************
Project 02: Anything(Prototype)
Cassandra Rousseau
Here is a description of this template p5 project.
**************************************************/
"use strict";
let currentState;
let titleImage;
let timer;
let petals = [];
let numRedPetals = 20;
let petalImage;
let magicPetalImage;
let badEndingImage;
let goodEndingImage;
// setup()
//
// Setting all the preloaded images
function preload() {
  titleImage = loadImage("assets/images/ephemeralTitle.png");
  magicPetalImage = loadImage("assets/images/magicPetal.png");
  petalImage = loadImage("assets/images/Petal.png");
  badEndingImage = loadImage("assets/images/ephemeralGameOver.png");
  goodEndingImage = loadImage("assets/images/ephemeralFoundPetal.png");
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
