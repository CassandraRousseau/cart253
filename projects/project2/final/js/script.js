/**************************************************
Project 02: Anything(Prototype)
Cassandra Rousseau
The prototype starts with a note screen, followed by the title screen. Once the user starts the game, the
prologue and first chapter cutscenes start.The story is about a little girl suffering of a curse.
She has a rose instead of a heart. If her rose dies,she will die too.
She learned that she has to collect five magic petals to cure her curse.
The levels (simulation) start. In the first level, the user has to catch
the first magic petal through the wind.In the second level,the user has to scream inside a cave in order to make appear 4
the second magic petal. In the third level, the user has to find the third magic petal under a bunch of leaves and petals.
In the fourth level, the user has to create a magic petal by clapping his hands.In the fifth level, the user has to find
the last magic petal inside a castle. In the last level, the user has to take back the petal that a rose monster took from
the character. The user's purpose is to catch all the magic petals (a white petal) before the
timer stops. If the user catches the petal, he won, but if time is out, it's game over...
**************************************************/
"use strict";

let currentState;

let currentLine = 0;

let ost;

let pageSFX;

let title;

let instructions1;

let instructions2;

let instructions3;

let instructions4;

let instructions5;

let level1;

let level2;

let level3;

let level4;

let level5;

let badEnding;

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

let clap;

let clapping1 = false;

let clapping2 = false;

let clapping3 = false;

let clapping4 = false;

let clapping5 = false;

let clapThreshold1 = 0.05;

let clapThreshold2 = 0.1;

let clapThreshold3 = 0.15;

let clapThreshold4 = 0.2;

let clapThreshold5 = 0.25;

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

let numMagicPetalUpLeft = 1;

let numMagicPetalUpRight = 1;

let numMagicPetalDownLeft = 1;

let numMagicPetalDownRight = 1;

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

let visitImage;

let doctorImage;

let monsterImage;

let sleepImage;

let lakeImage;

let waterImage;

let destinationImage;

let enterImage;

let roomImage;

let surpriseImage;

let evilImage;

let surviveImage;

let catchImage;

let hitImage;

let unconsciousImage;

let fleeImage;

let meetingImage;

let smileImage;

let castleImage;

let skyImage;

let leafImage;

let redPetalImage;

let caveImage;

let rockImage;

let thornImage;

let magicPetalImage;

let magicPetalUpLeftImage;

let magicPetalUpRightImage;

let magicPetalDownLeftImage;

let magicPetalDownRightImage;

let badEndingImage;

let deathImage;

let goodEndingImage;

// Setting all the preloaded images
function preload() {
  ost = loadSound("assets/sounds/FFVII.mp3");
  pageSFX = loadSound("assets/sounds/pageFlip.mp3");
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
  visitImage = loadImage("assets/images/ephemeralVisit.png");
  doctorImage = loadImage("assets/images/ephemeralDoctor.png");
  monsterImage = loadImage("assets/images/ephemeralMonster.png");
  sleepImage = loadImage("assets/images/ephemeralSleep.png");
  lakeImage = loadImage("assets/images/ephemeralLake.png");
  waterImage = loadImage("assets/images/ephemeralWater.png");
  destinationImage = loadImage("assets/images/ephemeralDestination.png");
  enterImage = loadImage("assets/images/ephemeralEnter.png");
  roomImage = loadImage("assets/images/ephemeralRoom.png");
  curiousImage = loadImage("assets/images/ephemeralCurious.png");
  surpriseImage = loadImage("assets/images/ephemeralSurprise.png");
  evilImage = loadImage("assets/images/ephemeralEvil.png");
  surviveImage = loadImage("assets/images/ephemeralSurvive.png");
  surpriseImage = loadImage("assets/images/ephemeralSurprise.png");
  catchImage = loadImage("assets/images/ephemeralCatch.png");
  hitImage = loadImage("assets/images/ephemeralHit.png");
  unconsciousImage = loadImage("assets/images/ephemeralUnconscious.png");
  fleeImage = loadImage("assets/images/ephemeralFlee.png");
  meetingImage = loadImage("assets/images/ephemeralMeeting.png");
  smileImage = loadImage("assets/images/ephemeralSmile.png");
  skyImage = loadImage("assets/images/ephemeralSky.png");
  caveImage = loadImage("assets/images/ephemeralCave.png");
  castleImage = loadImage("assets/images/ephemeralCastle.png");
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
  deathImage = loadImage("assets/images/ephemeralDeath.png");
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
  let title = new Note();
  currentState = title;
}

// Setting the draw function for each states.
function draw() {
  currentState.draw();

  //Setting how loud user's screams have to be during the level
  scream = mic.getLevel();
  clap = mic.getLevel();
  if (scream > screamThreshold) {
    screaming = true;
  } else {
    screaming = false;
  }
  //Setting how loud user's claps have to be during the level
  if (clap > clapThreshold1 && !clapping1) {
    clapping1 = true;
  } else if (clap > clapThreshold2 && !clapping2) {
    clapping2 = true;
  } else if (clap > clapThreshold3 && !clapping3) {
    clapping3 = true;
  } else if (clap > clapThreshold4 && !clapping4) {
    clapping4 = true;
  } else if (clap > clapThreshold5 && !clapping5) {
    clapping5 = true;
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
