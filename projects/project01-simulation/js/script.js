/**************************************************
Project 01: Simulation
Cassandra Rousseau
Creating a barista simulation.The game opens with a cafe background and the title.
It's followed with the instructions state. Th goal of the user is to redraw the drawing of the template over the latte.
If the player do all the drawings correctly after each level, he's an accomplished barista!
However,if the user miss one of them in a level, the cafe goes bankrupt and it's game over...
**************************************************/
"use strict";

let instructions =
  "Hello new employee!\nWelcome to Coffeeccino!\nWe are glad to have you in our team!\nThis new cafe needs your talent to \ncreate succulent lattes!\nPress your mouse and drag it to make drawings on \nlatte\nFollow the templates to create beautiful artworks!\nOnce you're done, press the spacebar to give the order to the customer.\nBe artsy, have fun and good luck!";

let user = {
  x: 2500,
  y: 250,
  size: 225,
  strokeWeight: 10,
  drawing: false,
  stroke: {
    r: 255,
    g: 255,
    b: 255,
  },
};

let plate = {
  x: 0,
  y: 0,
  w: 550,
  h: 550,
  vx: 0,
  vy: 0,
  fill: {
    r: 255,
    g: 255,
    b: 255,
    speed: 3,
  },
};

let coffee = {
  x: 0,
  y: 0,
  w: 225,
  h: 225,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: {
    r: 143,
    g: 60,
    b: 0,
  },
};

let shadow = {
  x: 0,
  y: 0,
  w: 400,
  h: 400,
  stroke: 127,
  strokeWeight: 3,
  vx: 0,
  vy: 0,
  speed: 3,
};

let mug = {
  x: 0,
  y: 0,
  w: 300,
  h: 300,
  vx: 0,
  vy: 0,
  stroke: 127,
  strokeWeight: 3,
  speed: 3,
  fill: {
    r: 255,
    g: 255,
    b: 255,
  },
  state: "entering",
};

let handle = {
  x: 0,
  y: 0,
  w: 50,
  h: 200,
  tl: 5,
  tr: 5,
  vx: 0,
  vy: 0,
  speed: 3,
  stroke: 127,
  strokeWeight: 3,
  fill: {
    r: 255,
    g: 255,
    b: 255,
  },
};

let circle0 = {
  x: 0,
  y: 0,
  w: 125,
  h: 125,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle1 = {
  x: 0,
  y: 0,
  w: 145,
  h: 145,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle2 = {
  x: 28,
  y: 300,
  w: 35,
  h: 35,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle3 = {
  x: -28,
  y: 300,
  w: 35,
  h: 35,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle4 = {
  x: 0,
  y: 325,
  w: 30,
  h: 15,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle5 = {
  x: 0,
  y: 335,
  w: 70,
  h: 50,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let rectangle1 = {
  x: 0,
  y: 355,
  w: 25,
  h: 30,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle6 = {
  x: -40,
  y: 244,
  w: 15,
  h: 30,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle7 = {
  x: 40,
  y: 244,
  w: 15,
  h: 30,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle8 = {
  x: -40,
  y: 235,
  w: 35,
  h: 45,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle9 = {
  x: 40,
  y: 235,
  w: 35,
  h: 45,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle10 = {
  x: 33,
  y: 300,
  w: 40,
  h: 15,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle11 = {
  x: -33,
  y: 300,
  w: 40,
  h: 15,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle12 = {
  x: 64,
  y: 250,
  w: 35,
  h: 35,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle13 = {
  x: -64,
  y: 250,
  w: 35,
  h: 35,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let circle14 = {
  x: 0,
  y: 0,
  w: 130,
  h: 130,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  dragging: false,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let smile1 = {
  x1: -100,
  y1: 250,
  x2: -30,
  y2: 350,
  x3: 30,
  y3: 350,
  x4: 100,
  y4: 250,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitray1 = {
  x1: 0,
  y1: 210,
  x2: 0,
  y2: 240,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitray2 = {
  x1: 0,
  y1: 385,
  x2: 0,
  y2: 415,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitray3 = {
  x1: 73,
  y1: 315,
  x2: 100,
  y2: 315,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitray4 = {
  x1: -73,
  y1: 315,
  x2: -100,
  y2: 315,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitray5 = {
  x1: -70,
  y1: 235,
  x2: -50,
  y2: 260,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitray6 = {
  x1: 70,
  y1: 235,
  x2: 50,
  y2: 260,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitray7 = {
  x1: -70,
  y1: 380,
  x2: -50,
  y2: 365,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitray8 = {
  x1: 70,
  y1: 380,
  x2: 50,
  y2: 365,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitstick = {
  x1: 0,
  y1: 300,
  x2: 0,
  y2: 400,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitteeth = {
  x1: 0,
  y1: 341,
  x2: 0,
  y2: 369,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let tri1 = {
  x1: 0,
  y1: 340,
  x2: 20,
  y2: 370,
  x3: -20,
  y3: 370,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let tri2 = {
  x1: -25,
  y1: 330,
  x2: 25,
  y2: 330,
  x3: 0,
  y3: 370,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let tri3 = {
  x1: 0,
  y1: 230,
  x2: 80,
  y2: 300,
  x3: -80,
  y3: 300,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let tri4 = {
  x1: -55,
  y1: 225,
  x2: -60,
  y2: 270,
  x3: -30,
  y3: 245,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let tri5 = {
  x1: 55,
  y1: 225,
  x2: 60,
  y2: 270,
  x3: 30,
  y3: 245,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitwhisker1 = {
  x1: -20,
  y1: 330,
  x2: -85,
  y2: 335,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitwhisker2 = {
  x1: -20,
  y1: 340,
  x2: -80,
  y2: 365,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitwhisker3 = {
  x1: 20,
  y1: 330,
  x2: 85,
  y2: 335,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let traitwhisker4 = {
  x1: 20,
  y1: 340,
  x2: 80,
  y2: 365,
  vx: 0,
  vy: 0,
  speed: 3,
  strokeWeight: 3,
  stroke: {
    r: 0,
    g: 255,
    b: 0,
  },
};

let cafe = {
  image: undefined,
};

let table = {
  image: undefined,
};

let failure = {
  image: undefined,
};

let success = {
  image: undefined,
};

let music;

let state = "title";

//Loading images for simulation.
function preload() {
  music = loadSound("assets/sounds/volare.mp3");
  cafe.image = loadImage("assets/images/cafe.png");
  failure.image = loadImage("assets/images/failure.png");
  success.image = loadImage("assets/images/success.png");
  table.image = loadImage("assets/images/table.png");
}

// Creating the canvas.
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//Setting the states of the game
function draw() {
  if (state === "title") {
    title();
  } else if (state === "welcome") {
    welcome();
  } else if (state === "level1") {
    level1();
  } else if (state === "level2") {
    level2();
  } else if (state === "level3") {
    level3();
  } else if (state === "level4") {
    level4();
  } else if (state === "level5") {
    level5();
  } else if (state === "level6") {
    level6();
  } else if (state === "level7") {
    level7();
  } else if (state === "open") {
    open();
  } else if (state === "closed") {
    closed();
  }
}

//Setting level1
function level1() {
  simulation1();
}

//Setting level2
function level2() {
  simulation2();
}

//Setting level3
function level3() {
  simulation3();
}

//Setting level4
function level4() {
  simulation4();
}

//Setting level5
function level5() {
  simulation5();
}

//Setting level6
function level6() {
  simulation6();
}

//Setting level7
function level7() {
  simulation7();
}

//Setting simulation
function simulation(simulation) {
  if (state === "level1") {
    simulation1();
  } else if (state === "level2") {
    simulation2();
  } else if (state === "level3") {
    simulation3();
  } else if (state === "level4") {
    simulation4();
  } else if (state === "level5") {
    simulation5();
  } else if (state === "level6") {
    simulation6();
  } else if (state === "level7") {
    simulation7();
  }
}

//Setting the title
function title() {
  push();

  //Display cafe background
  image(cafe.image, windowWidth, windowHeight);
  background(cafe.image);

  //Display title
  textFont("Sansita Swashed");
  textSize(125);
  fill(255);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  text("Coffeeccino", width / 2, height / 2);
  pop();
  push();
  textFont("Sansita Swashed");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("Press Spacebar to start", width / 2, 450);
  pop();
}

//Setting the instructions
function welcome() {
  push();
  background(257, 255, 196);
  textSize(35);
  noStroke();
  fill(112, 26, 0);
  textFont("Lobster");
  textAlign(LEFT, TOP);
  text(instructions, 10, 50, windowWidth, windowHeight);
  pop();
}

//Setting the good ending
function open() {
  push();
  image(success.image, windowWidth, windowHeight);
  background(success.image);
  textFont("Sansita Swashed");
  textSize(85);
  stroke(0);
  strokeWeight(5);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Congratulations!", width / 2, height / 2);
  push();
  textSize(35);
  text("Customers ADORE your coffees!", width / 2, 450);
  pop();
  pop();
}

//Setting the bad ending
function closed() {
  push();
  music.pause;
  image(failure.image, windowWidth, windowHeight);
  background(failure.image);
  textFont("Bebas Neue");
  stroke(0);
  strokeWeight(5);
  textSize(65);
  fill(255);
  textAlign(CENTER, CENTER);
  text("OH NO!", width / 2, 500);
  push();
  textSize(25);
  text("Coffeeccino goes bankrupt!", width / 2, 550);
  text("You will have to find another job...", width / 2, 600);
  pop();
  pop();
}

//Setting simulation for level1
function simulation1() {
  //When mug enters the screen
  if (mug.state === "entering") {
    mug.speed = 3;
    trimove(tri3);
    traitmove(traitstick);
    acceleration();
    triacceleration(tri3);
    traitacceleration(traitstick);
    displaytable();
    display();
    umbrella();

    //When mug stops
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }

    simulationmessage1();
  }

  //When mug leaves the screen
  else if (mug.state === "leaving") {
    mug.speed = 3;
    trimove(tri3);
    traitmove(traitstick);
    acceleration();
    triacceleration(tri3);
    traitacceleration(traitstick);
    displaytable();
    display();
    umbrella();

    //When mug left the screen
    if (mug.x > windowWidth) {
      state = "level2";

      resetMug();
      resetUmbrella();
    }
  }
}

//Setting simulation for level2
function simulation2() {
  //When mug enters the screen
  if (mug.state === "entering") {
    mug.speed = 3;
    circlemove(circle0);
    traitmove(traitray1);
    traitmove(traitray2);
    traitmove(traitray2);
    traitmove(traitray3);
    traitmove(traitray4);
    traitmove(traitray5);
    traitmove(traitray6);
    traitmove(traitray7);
    traitmove(traitray8);
    acceleration();
    circleacceleration(circle0);
    traitacceleration(traitray1);
    traitacceleration(traitray2);
    traitacceleration(traitray3);
    traitacceleration(traitray4);
    traitacceleration(traitray5);
    traitacceleration(traitray6);
    traitacceleration(traitray7);
    traitacceleration(traitray8);
    displaytable();
    display();
    sun();

    //When mug stops
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }

    simulationmessage2();
  }

  //When mug leaves the screen
  else if (mug.state === "leaving") {
    mug.speed = 3;
    circlemove(circle0);
    traitmove(traitray1);
    traitmove(traitray2);
    traitmove(traitray2);
    traitmove(traitray3);
    traitmove(traitray4);
    traitmove(traitray5);
    traitmove(traitray6);
    traitmove(traitray7);
    traitmove(traitray8);
    acceleration();
    circleacceleration(circle0);
    traitacceleration(traitray1);
    traitacceleration(traitray2);
    traitacceleration(traitray3);
    traitacceleration(traitray4);
    traitacceleration(traitray5);
    traitacceleration(traitray6);
    traitacceleration(traitray7);
    traitacceleration(traitray8);
    displaytable();
    display();
    sun();

    //When mug left the screen
    if (mug.x > windowWidth) {
      state = "level3";

      resetMug();
      resetSun();
    }
  }
}

//Setting simulation for level3
function simulation3() {
  //When mug enters the screen
  if (mug.state === "entering") {
    mug.speed = 3;
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    smilemove(smile1);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    smileacceleration(smile1);
    displaytable();
    display();
    face();

    //When mug stops
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }

    simulationmessage3();
  }

  //When mug leaves the screen
  else if (mug.state === "leaving") {
    mug.speed = 3;
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    smilemove(smile1);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    smileacceleration(smile1);
    displaytable();
    display();
    face();

    //When mug left the screen
    if (mug.x > windowWidth) {
      state = "level4";

      resetMug();
      resetFace();
    }
  }
}

//Setting simulation for level4
function simulation4() {
  //When mug enters the screen
  if (mug.state === "entering") {
    mug.speed = 3;
    circlemove(circle1);
    circlemove(circle10);
    circlemove(circle11);
    trimove(tri2);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle10);
    circleacceleration(circle11);
    triacceleration(tri2);
    displaytable();
    display();
    bird();

    //When mug stops
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }

    simulationmessage4();
  }

  //When mug leaves the screen
  else if (mug.state === "leaving") {
    mug.speed = 3;
    circlemove(circle1);
    circlemove(circle10);
    circlemove(circle11);
    trimove(tri2);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle10);
    circleacceleration(circle11);
    triacceleration(tri2);
    displaytable();
    display();
    bird();

    //When mug left the screen
    if (mug.x > windowWidth) {
      state = "level5";

      resetMug();
      resetBird();
    }
  }
}

//Setting simulation for level5
function simulation5() {
  //When mug enters the screen
  if (mug.state === "entering") {
    mug.speed = 3;
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    circlemove(circle5);
    circlemove(circle12);
    circlemove(circle13);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    circleacceleration(circle5);
    circleacceleration(circle12);
    circleacceleration(circle13);
    displaytable();
    display();
    bear();

    //When mug stops
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }

    simulationmessage5();
  }

  //When mug leaves the screen
  else if (mug.state === "leaving") {
    mug.speed = 3;
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    circlemove(circle5);
    circlemove(circle12);
    circlemove(circle13);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    circleacceleration(circle5);
    circleacceleration(circle12);
    circleacceleration(circle13);
    displaytable();
    display();
    bear();

    //When mug left the screen
    if (mug.x > windowWidth) {
      state = "level6";

      resetMug();
      resetBear();
    }
  }
}

//Setting simulation for level6
function simulation6() {
  //When mug enters the screen
  if (mug.state === "entering") {
    mug.speed = 3;
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    trimove(tri1);
    trimove(tri4);
    trimove(tri5);
    traitmove(traitwhisker1);
    traitmove(traitwhisker2);
    traitmove(traitwhisker3);
    traitmove(traitwhisker4);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    triacceleration(tri1);
    triacceleration(tri4);
    triacceleration(tri5);
    traitacceleration(traitwhisker1);
    traitacceleration(traitwhisker2);
    traitacceleration(traitwhisker3);
    traitacceleration(traitwhisker4);
    displaytable();
    display();
    cat();

    //When mug stops
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }

    simulationmessage6();
  }

  //When mug leaves the screen
  else if (mug.state === "leaving") {
    mug.speed = 3;

    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    trimove(tri1);
    trimove(tri4);
    trimove(tri5);
    traitmove(traitwhisker1);
    traitmove(traitwhisker2);
    traitmove(traitwhisker3);
    traitmove(traitwhisker4);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    triacceleration(tri1);
    triacceleration(tri4);
    triacceleration(tri5);
    traitacceleration(traitwhisker1);
    traitacceleration(traitwhisker2);
    traitacceleration(traitwhisker3);
    traitacceleration(traitwhisker4);
    displaytable();
    display();
    cat();

    //When mug left the screen
    if (mug.x > windowWidth) {
      state = "level7";

      resetMug();
      resetCat();
    }
  }
}
//Setting simulation for level7
function simulation7() {
  //When mug enters the screen
  if (mug.state === "entering") {
    mug.speed = 3;
    circlemove(circle14);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    circlemove(circle6);
    circlemove(circle7);
    circlemove(circle8);
    circlemove(circle9);
    traitmove(traitteeth);
    traitmove(traitwhisker1);
    traitmove(traitwhisker2);
    traitmove(traitwhisker3);
    traitmove(traitwhisker4);
    rectanglemove(rectangle1);
    acceleration();
    circleacceleration(circle14);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    circleacceleration(circle6);
    circleacceleration(circle7);
    circleacceleration(circle8);
    circleacceleration(circle9);
    traitacceleration(traitteeth);
    traitacceleration(traitwhisker1);
    traitacceleration(traitwhisker2);
    traitacceleration(traitwhisker3);
    traitacceleration(traitwhisker4);
    rectangleacceleration(rectangle1);
    displaytable();
    display();
    rabbit();

    //When mug stops
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }

    simulationmessage7();
  }

  //When mug leaves the screen
  else if (mug.state === "leaving") {
    mug.speed = 3;
    circlemove(circle14);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    circlemove(circle6);
    circlemove(circle7);
    circlemove(circle8);
    circlemove(circle9);
    traitmove(traitwhisker1);
    traitmove(traitwhisker2);
    traitmove(traitwhisker3);
    traitmove(traitwhisker4);
    traitmove(traitteeth);
    rectanglemove(rectangle1);
    acceleration();
    circleacceleration(circle14);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    circleacceleration(circle6);
    circleacceleration(circle7);
    circleacceleration(circle8);
    circleacceleration(circle9);
    traitacceleration(traitwhisker1);
    traitacceleration(traitwhisker2);
    traitacceleration(traitwhisker3);
    traitacceleration(traitwhisker4);
    traitacceleration(traitteeth);
    rectangleacceleration(rectangle1);
    displaytable();
    display();
    rabbit();

    //When mug left the screen
    if (mug.x > windowWidth) {
      state = "open";
      resetMug();
      resetRabbit();
    }
  }
}

//Setting comment in level1
function simulationmessage1() {
  push();
  textFont("Sansita Swashed");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("Let's start with an umbrella drawing!", width / 2, 550);
  pop();
}

//Setting comment in level2
function simulationmessage2() {
  push();
  textFont("Sansita Swashed");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("Good job! Now, try to draw a sun!", width / 2, 550);
  pop();
}

//Setting comment in level3
function simulationmessage3() {
  push();
  textFont("Sansita Swashed");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("Great! Make people smile!", width / 2, 550);
  pop();
}

//Setting comment in level4
function simulationmessage4() {
  push();
  textFont("Sansita Swashed");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("Let's be friends with nature!", width / 2, 550);
  pop();
}

//Setting comment in level5
function simulationmessage5() {
  push();
  textFont("Sansita Swashed");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("I'm sure you can't resist to this adorable bear!", width / 2, 550);
  pop();
}

//Setting comment in level6
function simulationmessage6() {
  push();
  textFont("Sansita Swashed");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text("Let's do something a little more complex...", width / 2, 550);
  pop();
}

//Setting comment in level7
function simulationmessage7() {
  push();
  textFont("Sansita Swashed");
  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text(
    "Your shift is almost done! Give the best that you can!",
    width / 2,
    550
  );
  pop();
}

//Setting template circles movements
function circlemove(circle) {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

//Setting template circles movements
function rectanglemove(rectangle) {
  rectangle.x += rectangle.vx;
  rectangle.y += rectangle.vy;
}

//Setting template lines movements
function traitmove(trait) {
  trait.x1 += trait.vx;
  trait.y1 += trait.vy;
  trait.y2 += trait.vy;
  trait.x2 += trait.vx;
}

//Setting template triangles movements
function trimove(tri) {
  tri.x1 += tri.vx;
  tri.y1 += tri.vy;
  tri.y2 += tri.vy;
  tri.x2 += tri.vx;
  tri.y3 += tri.vy;
  tri.x3 += tri.vx;
}

//Setting template curves movements
function smilemove(smile) {
  smile.x1 += smile.vx;
  smile.y1 += smile.vy;
  smile.x2 += smile.vx;
  smile.y2 += smile.vy;
  smile.x3 += smile.vx;
  smile.y3 += smile.vy;
  smile.x4 += smile.vx;
  smile.y4 += smile.vy;
}

//Setting cup speed
function acceleration() {
  plate.x += plate.speed;
  shadow.x += shadow.speed;
  handle.x += handle.speed;
  mug.x += mug.speed;
  coffee.x += coffee.speed;
}

//Setting template circles speed
function circleacceleration(circle) {
  circle.x += circle.speed;
}

//Setting template circles speed
function rectangleacceleration(rectangle) {
  rectangle.x += rectangle.speed;
}

//Setting template curves speed
function smileacceleration(smile) {
  smile.x1 += smile.speed;
  smile.x2 += smile.speed;
  smile.x3 += smile.speed;
  smile.x4 += smile.speed;
}

//Setting template triangles speed
function triacceleration(tri) {
  tri.x1 += tri.speed;
  tri.x2 += tri.speed;
  tri.x3 += tri.speed;
}

//Setting template lines speed
function traitacceleration(trait) {
  trait.x1 += trait.speed;
  trait.x2 += trait.speed;
}

//Setting randomly if user succeed or not level1
function giveFeedback1() {
  let r = random();

  if (r < 0.7) {
    mug.state = "leaving";
  } else {
    state = "closed";
  }
}

//Setting randomly if user succeed or not level2
function giveFeedback2() {
  let r = random();

  if (r < 0.7) {
    mug.state = "leaving";
  } else {
    state = "closed";
  }
}

//Setting randomly if user succeed or not level3
function giveFeedback3() {
  let r = random();

  if (r < 0.7) {
    mug.state = "leaving";
  } else {
    state = "closed";
  }
}

//Setting randomly if user succeed or not level4
function giveFeedback4() {
  let r = random();

  if (r < 0.7) {
    mug.state = "leaving";
  } else {
    state = "closed";
  }
}

//Setting randomly if user succeed or not level5
function giveFeedback5() {
  let r = random();

  if (r < 0.7) {
    mug.state = "leaving";
  } else {
    state = "closed";
  }
}

//Setting randomly if user succeed or not level6
function giveFeedback6() {
  let r = random();

  if (r < 0.7) {
    mug.state = "leaving";
  } else {
    state = "closed";
  }
}

//Setting randomly if user succeed or not level7
function giveFeedback7() {
  let r = random();

  if (r < 0.7) {
    mug.state = "leaving";
  } else {
    state = "closed";
  }
}

//Setting reset function for the mug
function resetMug() {
  mug.x = 0;
  plate.x = 0;
  shadow.x = 0;
  handle.x = 0;
  coffee.x = 0;

  mug.state = "entering";
}

//Setting reset function for umbrella template
function resetUmbrella() {
  traitstick.x1 = 0;
  traitstick.x2 = 0;
  tri3.x1 = 0;
  tri3.x2 = 0;
  tri3.x3 = 0;
}

//Setting reset function for sun template
function resetSun() {
  circle0.x = 0;
  traitray1.x1 = 0;
  traitray1.x2 = 0;
  traitray2.x1 = 0;
  traitray2.x2 = 0;
  traitray3.x1 = 0;
  traitray3.x2 = 0;
  traitray4.x1 = 0;
  traitray4.x2 = 0;
  traitray5.x1 = 0;
  traitray5.x2 = 0;
  traitray6.x1 = 0;
  traitray6.x2 = 0;
  traitray7.x1 = 0;
  traitray7.x2 = 0;
  traitray8.x1 = 0;
  traitray8.x2 = 0;
}

//Setting reset function for face template
function resetFace() {
  circle1.x = 0;
  circle2.x = 28;
  circle3.x = -28;
  smile1.x1 = 0;
  smile1.x2 = 0;
  smile1.x3 = 0;
  smile1.x4 = 0;
}

//Setting reset function for bird template
function resetBird() {
  circle1.x = 0;
  circle10.x = 0;
  circle11.x = 0;
  tri2.x1 = 0;
  tri2.x2 = 0;
  tri2.x3 = 0;
}

//Setting reset function for bear template
function resetBear() {
  circle1.x = 0;
  circle2.x = 28;
  circle3.x = -28;
  circle4.x = 0;
  circle5.x = 0;
  circle12.x = 0;
  circle13.x = 0;
}

//Setting reset function for cat template
function resetCat() {
  circle1.x = 0;
  circle2.x = 28;
  circle3.x = -28;
  circle4.x = 0;
  tri1.x1 = 0;
  tri1.x2 = 0;
  tri1.x3 = 0;
  tri4.x1 = 0;
  tri4.x2 = 0;
  tri4.x3 = 0;
  tri5.x1 = 0;
  tri5.x2 = 0;
  tri5.x1 = 0;
  traitwhisker1.x1 = -20;
  traitwhisker1.x2 = -85;
  traitwhisker2.x1 = -20;
  traitwhisker2.x2 = -80;
  traitwhisker3.x1 = 20;
  traitwhisker3.x2 = 85;
  traitwhisker4.x1 = 20;
  traitwhisker4.x2 = 80;
}

//Setting reset function for rabbit template
function resetRabbit() {
  circle14.x = 0;
  circle2.x = 28;
  circle3.x = -28;
  circle4.x = 0;
  circle8.x = 0;
  circle9.x = 0;
  traitteeth.x1 = 0;
  traitteeth.x2 = 0;
  traitwhisker1.x1 = -20;
  traitwhisker1.x2 = -85;
  traitwhisker2.x1 = -20;
  traitwhisker2.x2 = -80;
  traitwhisker3.x1 = 20;
  traitwhisker3.x2 = 85;
  traitwhisker4.x1 = 20;
  traitwhisker4.x2 = 80;
  rectangle1.x = 0;
}

//Setting when mug is going off the screen
function mugLeave() {
  mug.state = "leaving";
}

//Diplaying the images
function display() {
  displayplate();
  displayshadow();
  displayhandle();
  displaymug();
  displaycoffee();
}

//Display umbrella drawing
function umbrella() {
  push();
  displaytri(tri3);
  noFill();
  stroke(traitstick.stroke.r, traitstick.stroke.g, traitstick.stroke.b);
  strokeWeight(traitstick.strokeWeight);
  line(traitstick.x1, traitstick.y1, traitstick.x2, traitstick.y2);
  pop();
}

//Display sun drawing
function sun() {
  push();
  displaycirclecenter(circle0);
  displaytrait(traitray1);
  displaytrait(traitray2);
  displaytrait(traitray3);
  displaytrait(traitray4);
  displaytrait(traitray5);
  displaytrait(traitray6);
  displaytrait(traitray7);
  displaytrait(traitray8);
  pop();
}

//Display face drawing
function face() {
  push();
  displaycirclecenter(circle1);
  displaycircle(circle2);
  displaycircle(circle3);
  displaycurve(smile1);
  pop();
}

//Display bird drawing
function bird() {
  push();
  displaycirclecenter(circle1);
  displaycircle(circle10);
  displaycircle(circle11);
  displaytri(tri2);
  pop();
}

//Display bear drawing
function bear() {
  push();
  displaycirclecenter(circle1);
  displaycircle(circle2);
  displaycircle(circle3);
  displaycircle(circle4);
  displaycircle(circle5);
  displaycircle(circle12);
  displaycircle(circle13);
  pop();
}

//Display cat drawing
function cat() {
  push();
  displaycirclecenter(circle1);
  displaycircle(circle2);
  displaycircle(circle3);
  displaycircle(circle4);
  displaytri(tri1);
  displaytri(tri4);
  displaytri(tri5);
  displaytrait(traitwhisker1);
  displaytrait(traitwhisker2);
  displaytrait(traitwhisker3);
  displaytrait(traitwhisker4);
  pop();
}

//Display rabbit drawing
function rabbit() {
  push();
  displaycirclecenter(circle14);
  displaycircle(circle2);
  displaycircle(circle3);
  displaycircle(circle4);
  displaycircle(circle6);
  displaycircle(circle7);
  displaycircle(circle8);
  displaycircle(circle9);
  displaytrait(traitwhisker1);
  displaytrait(traitwhisker2);
  displaytrait(traitwhisker3);
  displaytrait(traitwhisker4);
  displayrectangle(rectangle1);
  displaytrait(traitteeth);
  pop();
}

//Display table image
function displaytable() {
  push();
  image(table.image, windowWidth, windowHeight);
  background(table.image);
  pop();
}

//Display coffee cup
function displayplate() {
  push();
  fill(plate.fill.r, plate.fill.g, plate.fill.b);
  ellipse(plate.x, height / 2, plate.w, plate.h);
  pop();
}

//Display shadow
function displayshadow() {
  push();
  stroke(shadow.stroke);
  strokeWeight(shadow.strokeWeight);
  ellipse(shadow.x, height / 2, shadow.w, shadow.h);
  pop();
}

//Display handle
function displayhandle() {
  push();
  fill(handle.fill.r, handle.fill.g, handle.fill.b);
  stroke(handle.stroke);
  strokeWeight(handle.strokeWeight);
  rectMode(CORNER);
  rect(handle.x, height / 2, handle.w, handle.h, handle.tl, handle.tr);
  pop();
}

//Display mug
function displaymug() {
  push();
  fill(mug.fill.r, mug.fill.g, mug.fill.b);
  stroke(mug.stroke);
  strokeWeight(mug.strokeWeight);
  ellipse(mug.x, height / 2, mug.w, mug.h);
  pop();
}

//Display coffee
function displaycoffee() {
  push();
  fill(coffee.fill.r, coffee.fill.g, coffee.fill.b);
  ellipse(coffee.x, height / 2, coffee.w, coffee.h);
  pop();
}

//Display circle in the center of templates
function displaycirclecenter(circle) {
  push();
  noFill();
  stroke(circle.stroke.r, circle.stroke.g, circle.stroke.b);
  strokeWeight(circle.strokeWeight);
  ellipse(circle.x, height / 2, circle.w, circle.h);
  pop();
}

//Display template circles
function displaycircle(circle) {
  push();
  noFill();
  stroke(circle.stroke.r, circle.stroke.g, circle.stroke.b);
  strokeWeight(circle.strokeWeight);
  ellipse(circle.x, circle.y, circle.w, circle.h);
  pop();
}

//Display template rectangles
function displayrectangle(rectangle) {
  push();
  noFill();
  stroke(rectangle.stroke.r, rectangle.stroke.g, rectangle.stroke.b);
  strokeWeight(rectangle.strokeWeight);
  rectMode(CENTER);
  rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);
  pop();
}

//Display template triangles
function displaytri(tri) {
  push();
  noFill();
  stroke(tri.stroke.r, tri.stroke.g, tri.stroke.b);
  strokeWeight(tri.strokeWeight);
  triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3);
  pop();
}

//Display template curves
function displaycurve(smile) {
  push();
  noFill();
  stroke(smile.stroke.r, smile.stroke.g, smile.stroke.b);
  strokeWeight(smile.strokeWeight);
  curve(
    smile.x1,
    smile.y1,
    smile.x2,
    smile.y2,
    smile.x3,
    smile.y3,
    smile.x4,
    smile.y4
  );
  pop();
}

//Display template lines
function displaytrait(trait) {
  push();
  noFill();
  stroke(trait.stroke.r, trait.stroke.g, trait.stroke.b);
  strokeWeight(trait.strokeWeight);
  line(trait.x1, trait.y1, trait.x2, trait.y2);
  pop();
}

//Setting keys to change states
function keyPressed() {
  push();
  tryMusic();
  // Settins when space is pressed
  if (keyCode === 32) {
    if (state === "title") {
      state = "welcome";
    } else if (state === "welcome") {
      state = "level1";
    } else if (state === "level1") {
      giveFeedback1();
    } else if (state === "level2") {
      giveFeedback2();
    } else if (state === "level3") {
      giveFeedback3();
    } else if (state === "level4") {
      giveFeedback4();
    } else if (state === "level5") {
      giveFeedback5();
    } else if (state === "level6") {
      giveFeedback6();
    } else if (state === "level7") {
      giveFeedback7();
    }
  }

  pop();
}

//Setting mouse pressed use
function mouseIsPressed() {
  let d = dist(mouseX, mouseY, windowWidth, windowHeight);
  if (d < user.size / 2) {
    user.drawing = true;
  }
}

//Setting mouse released use
function mouseReleased() {
  user.drawing = false;
}

//Setting the drawing function
function mouseDragged() {
  if (user.drawing) {
    user.x = mouseX;
    user.y = mouseY;
  } else if (mouseIsPressed === true) {
    stroke(user.stroke.r, user.stroke.g, user.stroke.b);
    strokeWeight(user.strokeWeight);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

//Setting when to check if music is playing
function tryMusic() {
  if (!music.isPlaying()) {
    music.loop();
  }
}
