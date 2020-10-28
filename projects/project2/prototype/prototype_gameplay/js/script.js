/**************************************************
Project 02: Anything(Prototype)
Cassandra Rousseau
Here is a description of this template p5 project.
**************************************************/
"use strict";
let currentState;
let title;
let instructions1;
let level1;
let badEnding;
let goodEnding;
let timer;
let petals = [];
let numRedPetals = 20;
let titleImage;
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
  let title = new Title(windowWidth, windowHeight, titleImage);
  currentState = title;
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
