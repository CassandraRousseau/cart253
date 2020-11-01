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

let sky;

let user;

let leaf;

let redPetal;

let magicPetal;

let plants = [];

let numRedPetals = 10;

let numLeaves = 10;

let titleImage;

let skyImage;

let leafImage;

let redPetalImage;

let magicPetalImage;

let badEndingImage;

let goodEndingImage;

// Setting all the preloaded images
function preload() {
  titleImage = loadImage("assets/images/ephemeralTitle.png");
  skyImage = loadImage("assets/images/ephemeralSky.png");
  magicPetalImage = loadImage("assets/images/magicPetal.png");
  redPetalImage = loadImage("assets/images/redPetal.png");
  leafImage = loadImage("assets/images/leaf.png");
  badEndingImage = loadImage("assets/images/ephemeralGameOver.png");
  goodEndingImage = loadImage("assets/images/ephemeralFoundPetal.png");
}

//Setting all the setups for each state.
function setup() {
  createCanvas(windowWidth, windowHeight);

  noCursor();

  let title = new Title(windowWidth, windowHeight, titleImage);
  currentState = title;
}

// Setting the draw function for each state.
function draw() {
  currentState.draw();
}
function mousePressed() {
  currentState.mousePressed();
}
//Setting all key functions for each state.
function keyPressed() {
  currentState.keyPressed();
}
