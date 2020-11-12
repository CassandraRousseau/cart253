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

let level2;

let level3;

let badEnding;

let goodEnding;

let timer;

let sky;

let user;

let leaf;

let leaf2;

let redPetal;

let redPetal2;

let magicPetal;

let magicPetal2;

let magicPetal3;

let plants = [];

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

let numRedPetals = 10;

let numRedPetals2 = 500;

let numLeaves = 10;

let numLeaves2 = 500;

let numRocksLeft = 1;

let numRocksRight = 1;

let numThornsLeft = 1;

let numThornsRight = 1;

let titleImage;

let girlImage;

let skyImage;

let leafImage;

let redPetalImage;

let caveImage;

let rockImage;

let thornImage;

let magicPetalImage;

let badEndingImage;

let goodEndingImage;

// Setting all the preloaded images
function preload() {
  titleImage = loadImage("assets/images/ephemeralTitle.png");
  titleImage = loadImage("assets/images/ephemeralGirl.png");
  skyImage = loadImage("assets/images/ephemeralSky.png");
  caveImage = loadImage("assets/images/ephemeralCave.png");
  magicPetalImage = loadImage("assets/images/magicPetal.png");
  magicPetalUpLeftImage = loadImage("assets/images/magicPetalUpLeft.png");
  magicPetalUpRightImage = loadImage("assets/images/magicPetalUpRight.png");
  magicPetalDownLeftImage = loadImage("assets/images/magicPetalDownLeft.png");
  magicPetalDownRightImage = loadImage("assets/images/magicPetalDownRight.png");
  redPetalImage = loadImage("assets/images/redPetal.png");
  leafImage = loadImage("assets/images/leaf.png");
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
