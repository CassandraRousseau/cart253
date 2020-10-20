/**************************************************
Exercise 4:The Age of Aquariums
Cassandra Rousseau

Picking flowers simulation. It starts with a title screen, followed by an instruction screen.
The goal is to pick (or not?) flowers in the garden. The player have to choose to pick all the flowers
(or not) before the end of the countdown. When time is out, a surprising ending will be revealed to the player depending
of his choice during the simulation...
**************************************************/
"use strict";
let intro = [
  "Each time you want to read the text, press Spacebar",
  "Hello kids!",
  "You like pretty things right?",
  "Why not picking some beautiful flowers?",
  "Pick all the flowers surronding in the garden!",
  "Press your mouse to pick a flower!",
  "Look at the countdown!",
  "If time is out,",
  "you will not be able to make a bouquet! ",
  "Have fun!(Press Enter once you finish to read)",
];

let right = [
  "Congrats!",
  "You made the right choice!",
  "Sounds pretty confusing right?",
  "Well, by not picking flowers,",
  "your showing that you are taking care of nature.",
  "Taking care of environment is a good quality!",
  "Take care of yourself and your surroundings. ",
  "Take care of the planet, we only have one!",
  "Press Enter to restart",
];

let wrong = [
  "Why did you pick flowers?",
  "By doing this, you destroy your ecosystem!",
  "Plants have to be nurture carefully!",
  "Not everything is about our own desires!",
  "Take care of yourself and your surroundings. ",
  "Take care of the planet, we only have one!",
  "Press Enter to restart",
];

let hand = {
  x: 0,
  y: 0,
  w: 350,
  h: 350,
  image: undefined,
};

let grass = {
  image: undefined,
};

let isFlowerEliminated;

let currentLine = 0;

let state = "title";

let images = [];

let flowers = [];

let numImages = 5;

let numFlowers = 20;

let displayImage;

let timer = 1000;

//Loading images for simulation(flowers and user's hand)
function preload() {
  hand.image = loadImage("assets/images/hand.png");
  grass.image = loadImage("assets/images/grass.png");

  for (let i = 0; i < numImages; i++) {
    let loadedImage = loadImage(`assets/images/flower-${i}.png`);

    images.push(loadedImage);
  }
}

//Setting flowers in simulation;creating the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numFlowers; i++) {
    let flower = createFlower(
      random(0, width),
      random(0, height),
      random(images)
    );

    flowers.push(flower);
  }

  noCursor();
}

//Setting flowers javascript object
function createFlower(x, y, flowerImage) {
  let flower = {
    x: x,
    y: y,
    w: 150,
    h: 150,
    vx: 0,
    vy: 0,
    speed: 4,
    image: flowerImage,
    tint: {
      r: 200,
      g: 200,
      b: 200,
      alpha: 255,
    },
  };

  return flower;
}

//Making the order of the simulation
function draw() {
  background(100, 245, 90);

  if (state === "title") {
    title();
  } else if (state === "instructions") {
    instructions();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "goodEnding") {
    goodEnding();
  } else if (state === "badEnding") {
    badEnding();
  } else if (state === "timeOut") {
    timeOut();
  }
}

//Setting simulation
function simulation() {
  displayGrass();
  for (let i = 0; i < flowers.length; i++) {
    let flower = flowers[i];
    moveFlower(flower);
    hiddenFlower(flower);
    colorFlower(flower);
    displayFlower(flower);
    displayHand();
  }

  timeCheck();
}

//Setting the title screen
function title() {
  push();
  textSize(105);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Lemonada");
  text("Pick the Flowers!", width / 2, height / 2);
  push();
  textSize(35);
  text("Press Enter to start", width / 2, (2 * height) / 3);
  pop();
  pop();
}

//Setting instruction screen
function instructions() {
  push();
  textSize(85);
  fill(225, 125, 125);
  textAlign(LEFT, TOP);
  textFont("Lemonada");

  let dialog1 = intro[currentLine];
  text(dialog1, 10, height / 2, windowWidth, windowHeight);
  pop();
}

//Setting time out screen
function timeOut() {
  push();
  textSize(85);
  fill(225, 125, 125);
  textFont("Lemonada");
  textAlign(LEFT, TOP);
  text("Time is out!", 10, height / 2, windowWidth, windowHeight);
  push();
  textSize(35);
  text("Press Enter to restart", 10, (2 * height) / 3);
  pop();
  pop();
}

//Setting good ending screen
function goodEnding() {
  push();
  textSize(85);
  fill(225, 125, 125);
  textFont("Lemonada");
  textAlign(LEFT, TOP);

  let dialog2 = right[currentLine];
  text(dialog2, 10, height / 2, windowWidth, windowHeight);
  pop();
}

//Setting bad ending screen
function badEnding() {
  push();
  background(0);
  textSize(85);
  fill(225, 125, 125);
  textFont("Lemonada");
  textAlign(LEFT, TOP);

  let dialog3 = wrong[currentLine];
  text(dialog3, 10, height / 2, windowWidth, windowHeight);
  pop();
}

//Setting flowers movements
function moveFlower(flower) {
  let dx = flower.x - mouseX;

  let dy = flower.y - mouseY;

  if (dx < 0) {
    flower.vx = -flower.speed;
  } else if (dx > 0) {
    flower.vx = flower.speed;
  }

  if (dy < 0) {
    flower.vy = -flower.speed;
  } else if (dy > 0) {
    flower.vy = flower.speed;
  }

  flower.x += flower.vx;
  flower.y += flower.vy;

  flower.x = constrain(flower.x, 0, width);
  flower.y = constrain(flower.y, 0, height);
}

//Setting timer in simulation
function timeCheck() {
  if (frameCount > timer && flowers.length === 0) {
    state = "badEnding";
    currentLine = 0;
  } else if (frameCount > timer && flowers.length <= 19) {
    state = "timeOut";
    currentLine = 0;
  } else if (frameCount > timer && flowers.length === 20) {
    state = "goodEnding";
    currentLine = 0;
  }
}
//Modifying flowers tints and opacity
function hiddenFlower(flower) {
  if (flower.y > height / 2) {
    flower.tint.r = 255;
    flower.tint.g = 255;
    flower.tint.b = 255;
    flower.tint.alpha = 255;
  } else {
    flower.tint.r = 100;
    flower.tint.g = 100;
    flower.tint.b = 100;
    flower.tint.alpha = 10;
  }
}

//Setting when flowers change colors
function colorFlower(flower) {
  flower.tint.r = map(flower.x, 0, width, random(125, 255), random(125, 255));
  flower.tint.g = map(flower.y, 0, height, random(125, 255), random(125, 255));
  flower.tint.b = map(flower.x, 0, width, random(125, 255), random(125, 255));
}

//Displaying grass background
function displayGrass() {
  push();
  image(grass.image, windowWidth, windowHeight);
  background(grass.image);
  pop();
}
//Displaying user hand
function displayHand() {
  push();
  imageMode(CENTER);
  image(hand.image, mouseX, mouseY, hand.w, hand.h);
  pop();
}

//Displaying flowers
function displayFlower(flower) {
  push();
  imageMode(CENTER);
  tint(flower.tint.r, flower.tint.g, flower.tint.b, flower.tint.alpha);
  image(flower.image, flower.x, flower.y, flower.w, flower.h);
  pop();
}

//Setting mouse pressed function; make flowers disappear
function mousePressed() {
  for (let i = 0; i < flowers.length; i++) {
    let flower = flowers[i];

    let d = dist(mouseX, mouseY, flower.x, flower.y);

    if (d < flower.w / 2 + flower.h / 2) {
      flowers.splice(i, 1);
      break;
    }
  }
}

//Setting key functions ; changing states and dialog lines
function keyPressed() {
  if (keyCode === 13) {
    if (state === "title") {
      state = "instructions";
    } else if (state === "instructions") {
      state = "simulation";
    } else if (state === "timeOut") {
      location.reload();
    } else if (state === "goodEnding") {
      location.reload();
    } else if (state === "badEnding") {
      location.reload();
    }
  }

  if (keyCode === 32) {
    currentLine = currentLine + 1;

    if (currentLine === intro.length && state === "instructions") {
      currentLine = intro.length - 1;
    } else if (currentLine === right.length && state === "goodEnding") {
      currentLine = right.length - 1;
    } else if (currentLine === wrong.length && state === "badEnding") {
      currentLine = wrong.length - 1;
    }
  }
}
