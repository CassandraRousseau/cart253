/**************************************************
Project 02: Anything(Prototype)
Cassandra Rousseau
The prototype starts with the title screen, followed by the game instructions.
The level (simulation) starts with multiple leaves and petals flying through the air.
The user's purpose is to catch the magic petal (a white petal) through the wind before the
timer stops. If the user catches the petal, he won, but if time is out, it's game over...
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

//Setting all the setups for each states.
function setup() {
  createCanvas(windowWidth, windowHeight);

  noCursor();

  let title = new Title(windowWidth, windowHeight, titleImage);
  currentState = title;
}

// Setting the draw function for each states.
function draw() {
  currentState.draw();
}
//Setting all mouse inputs for each states
function mousePressed() {
  currentState.mousePressed();
}
//Setting all keyboard inputs for each states.
function keyPressed() {
  currentState.keyPressed();
}
