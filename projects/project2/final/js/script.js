/**************************************************
Project 02: Anything(Prototype)
Cassandra Rousseau
The prototype starts with the title screen, followed by the prologue and first chapter cutscenes of the game.
The story tells that a little girl is suffering of a curse.She has a rose instead of a heart.
If her rose dies,she will die too.She learnes that she has to collect five magic petals to cure her curse.
The first three levels (simulation) start. In the first level, the user has to catch
the first magic petal through the wind.In the second level,the user has to scream inside a cave in order to make appear 4
the second magic petal. In the third level, the user has to find the third maic petal under a bunch of leaves and petals
The user's purpose is to catch the magic petal (a white petal) before the
timer stops. If the user catches the petal, he won, but if time is out, it's game over...
**************************************************/
"use strict";

let currentState;

let currentLine = 0;

let title;

let instructions1;

let level1;

let level2;

let level3;

let badEnding;

let goodEnding1;

let goodEnding2;

let goodEnding3;

let timer;

let sky;

let user;

let leaf1;

let leaf2;

let redPetal1;

let redPetal2;

let magicPetal1;

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

let numMagicPetals = 1;

let numRedPetals1 = 10;

let numRedPetals2 = 500;

let numLeaves1 = 10;

let numLeaves2 = 500;

let numRocksLeft = 1;

let numRocksRight = 1;

let numThornsLeft = 1;

let numThornsRight = 1;

let titleImage;

let girlImage;

let zoomImage;

let encounterImage;

let mythImage;

let pathImage;

let beginningImage;

let lookingImage;

let holeImage;

let bunchImage;

let curiousImage;

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
  girlImage = loadImage("assets/images/ephemeralGirl.png");
  zoomImage = loadImage("assets/images/ephemeralZoom.png");
  encounterImage = loadImage("assets/images/ephemeralEncounter.png");
  mythImage = loadImage("assets/images/ephemeralMyth.png");
  pathImage = loadImage("assets/images/ephemeralPath.png");
  beginningImage = loadImage("assets/images/ephemeralBeginning.png");
  lookingImage = loadImage("assets/images/ephemeralLooking.png");
  holeImage = loadImage("assets/images/ephemeralHole.png");
  bunchImage = loadImage("assets/images/ephemeralBunch.png");
  curiousImage = loadImage("assets/images/ephemeralCurious.png");
  skyImage = loadImage("assets/images/ephemeralSky.png");
  caveImage = loadImage("assets/images/ephemeralCave.png");
  magicPetalImage = loadImage("assets/images/magicPetal.png");
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

  //Setting the first state
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
