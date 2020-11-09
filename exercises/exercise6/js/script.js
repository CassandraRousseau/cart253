/**************************************************
Exercise 6:Make Some Noise
Cassandra Rousseau
The prototype starts with the title screen, followed by the game instructions.
The level (simulation) starts with multiple leaves and petals flying through the air.
The user's purpose is to scream until he reaches the magic petal (a white petal) before the
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

let user;

let magicPetal;

let mic;

let rockLeft;

let rockRight;

let thornLeft;

let thornRight;

let plants = [];

let numRocksLeft = 1;

let numRocksRight = 1;

let numThornsLeft = 1;

let numThornsRight = 1;

let titleImage;

let skyImage;

let rockImage;

let thornImage;

let magicPetalImage;

let badEndingImage;

let goodEndingImage;

// Setting all the preloaded images
function preload() {
  titleImage = loadImage("assets/images/ephemeralTitle.png");
  skyImage = loadImage("assets/images/ephemeralSky.png");
  magicPetalImage = loadImage("assets/images/magicPetal.png");
  rockImage = loadImage("assets/images/rock.png");
  thornImage = loadImage("assets/images/thorn.png");
  badEndingImage = loadImage("assets/images/ephemeralGameOver.png");
  goodEndingImage = loadImage("assets/images/ephemeralFoundPetal.png");
}

//Setting all the setups for each states.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  mic = new p5.AudioIn();
  mic.start();
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
