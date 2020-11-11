/**************************************************
Exercise 6:Make Some Noise
Cassandra Rousseau
The prototype starts with the title screen, followed by the game instructions.
The level (simulation) starts in a dark cave.The user's purpose is to scream until he reaches the magic petal
 (a white petal) before the timer stops.User's screams allow to move the nature elements and the magic petal
 to appear on the screen If the user catches the petal, he won, but if the time is out, it's game over...
**************************************************/
"use strict";

let currentState;

let title;

let instructions;

let level;

let badEnding;

let goodEnding;

let timer;

let user;

let cave;

let magicPetal;

let mic;

let rockLeft;

let rockRight;

let thornLeft;

let thornRight;

let scream;

let screaming = false;

let screamThreshold = 0.1;

let natures = [];

let numCaves = 1;

let numMagicPetals = 1;

let numRocksLeft = 1;

let numRocksRight = 1;

let numThornsLeft = 1;

let numThornsRight = 1;

let titleImage;

let caveImage;

let rockImage;

let thornImage;

let magicPetalImage;

let badEndingImage;

let goodEndingImage;

// Setting all the preloaded images
function preload() {
  titleImage = loadImage("assets/images/ephemeralTitle.png");
  caveImage = loadImage("assets/images/ephemeralCave.png");
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

  //Setting the microphone input
  mic = new p5.AudioIn();
  mic.start();

  //Setting the title screen as the first screen of the game
  let title = new Title(windowWidth, windowHeight, titleImage);
  currentState = title;
}

// Setting the draw function for each states.
function draw() {
  currentState.draw();

  //Setting how loud user's screams have to be during the level
  scream = mic.getLevel();

  if (scream > screamThreshold) {
    screaming = true;
  } else {
    screaming = false;
  }
}
//Setting all mouse inputs for each states
function mousePressed() {
  currentState.mousePressed();
}
//Setting all keyboard inputs for each states.
function keyPressed() {
  currentState.keyPressed();
}
