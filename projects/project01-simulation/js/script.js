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
  "Hello new employee!\n Welcome to Coffeeccino!\nWe are glad to have you in our team!\nThis new cafe needs your talent to \ncreate succulent lattes!\nPress your mouse and drag it to make drawings on \nlatte\nFollow the guidelines to create beautiful artworks!\nBe artsy, have fun and good luck!";

let user = {
  x: 0,
  y: 0,
  size: 10,
  stroke: 255,
  strokeWeight: 3,
  drawing: false,
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
  state: "entering", //3 POSSIBLE STATE 'entering' 'center' 'leaving' 'left'//
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
let circle6 = {
  x: 0,
  y: 360,
  w: 45,
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
let circle7 = {
  x: 0,
  y: 380,
  w: 30,
  h: 55,
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
  x: -75,
  y: 275,
  w: 40,
  h: 95,
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
  x: 75,
  y: 275,
  w: 40,
  h: 95,
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
  x: 30,
  y: 300,
  w: 40,
  h: 25,
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
  x: -30,
  y: 300,
  w: 40,
  h: 25,
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
let bearearleft = {
  x: -52,
  y: 275,
  w: 75,
  h: 75,
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
let bearearright = {
  x: 52,
  y: 275,
  w: 75,
  h: 75,
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
let smile2 = {
  x1: -175,
  y1: 275,
  x2: -40,
  y2: 375,
  x3: 40,
  y3: 375,
  x4: 175,
  y4: 275,
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
  x1: -20,
  y1: 330,
  x2: 20,
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
let donebutton = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
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
let state = "title";
//Loading images for simulation.
function preload() {
  cafe.image = loadImage("assets/images/cafe.png");
  failure.image = loadImage("assets/images/failure.png");
  success.image = loadImage("assets/images/success.png");
  table.image = loadImage("assets/images/table.png");
}
// setup()
//
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
//Setting the title
function title() {
  push();
  //Display cafe background
  image(cafe.image, windowWidth, windowHeight);
  background(cafe.image);
  //Display title
  textFont("CCSignLanguage");
  textSize(125);
  fill(255);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  text("Coffeeccino", width / 2, height / 2);
  pop();
  push();
  textFont("CCSignLanguage");
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
  fill(112, 26, 0);
  textFont("Blambot Pro BB");
  textAlign(LEFT, TOP);
  text(instructions, 10, 50, windowWidth, windowHeight);
  pop();
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
    simualtion4();
  } else if (state === "level5") {
    simulation5();
  } else if (state === "level6") {
    simulation6();
  } else if (state === "level7") {
    simulation7();
  }
}
//Setting simulation for level1
function simulation1() {
  if (mug.state === "entering") {
    mug.speed = 3;
    move();
    trimove(tri3);
    traitmove(traitstick);
    acceleration();
    triacceleration(tri3);
    traitacceleration(traitstick);
    displaytable();
    display();
    umbrella();
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
      verification1();
    }
  } else if (mug.state === "leaveing") {
    mug.speed = 3;
    move();
    trimove(tri3);
    traitmove(traitstick);
    acceleration();
    triacceleration(tri3);
    traitacceleration(traitstick);
    displaytable();
    display();
    umbrella();
    if (mug.x > windowWidth) {
      //LEAVE LEVEL OR...//
      mug.state = "left";
    }
  }
}
//Setting simulation for level2
function simulation2() {
  if (mug.state === "entering") {
    mug.speed = 3;
    move();
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
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }
  } else if (mug.state === "leaveing") {
    mug.speed = 3;
    move();
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
    if (mug.x > windowWidth) {
      //LEAVE LEVEL OR...//
      mug.state = "left";
      verification2();
    }
  }
}
//Setting simulation for level3
function simulation3() {
  if (mug.state === "entering") {
    mug.speed = 3;
    move();
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
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }
  } else if (mug.state === "leaveing") {
    mug.speed = 3;
    move();
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
    if (mug.x > windowWidth) {
      //LEAVE LEVEL OR...//
      mug.state = "left";
      verification3();
    }
  }
}

//Setting simulation for level4
function simulation4() {
  if (mug.state === "entering") {
    mug.speed = 3;
    move();
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
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }
  } else if (mug.state === "leaveing") {
    mug.speed = 3;
    move();
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
    if (mug.x > windowWidth) {
      //LEAVE LEVEL OR...//
      mug.state = "left";
      verification4();
    }
  }
}

//Setting simulation for level5
function simulation5() {
  if (mug.state === "entering") {
    mug.speed = 3;
    move();
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    circlemove(circle5);
    bearearmove(bearearleft);
    bearearmove(bearearright);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    circleacceleration(circle5);
    bearearacceleration(bearearleft);
    bearearacceleration(bearearright);
    displaytable();
    display();
    bear();
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }
  } else if (mug.state === "leaveing") {
    mug.speed = 3;
    move();
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    circlemove(circle5);
    bearearmove(bearearleft);
    bearearmove(bearearright);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    circleacceleration(circle5);
    bearearacceleration(bearearleft);
    bearearacceleration(bearearright);
    displaytable();
    display();
    bear();
    if (mug.x > windowWidth) {
      //LEAVE LEVEL OR...//
      mug.state = "left";
      verification5();
    }
  }
}
//Setting simulation for level6
function simulation6() {
  if (mug.state === "entering") {
    mug.speed = 3;
    move();
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
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }
  } else if (mug.state === "leaveing") {
    mug.speed = 3;
    move();
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
    if (mug.x > windowWidth) {
      //LEAVE LEVEL OR...//
      mug.state = "left";
      verification6();
    }
  }
}
//Setting simulation for level7
function simulation7() {
  if (mug.state === "entering") {
    mug.speed = 3;
    move();
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    circlemove(circle6);
    circlemove(circle7);
    circlemove(circle8);
    circlemove(circle9);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    circleacceleration(circle6);
    circleacceleration(circle7);
    circleacceleration(circle8);
    circleacceleration(circle9);
    displaytable();
    display();
    dog();
    if (mug.x >= width / 2) {
      mug.x = width / 2;
      mug.state = "center";
      mug.speed = 0;
    }
  } else if (mug.state === "leaveing") {
    mug.speed = 3;
    move();
    circlemove(circle1);
    circlemove(circle2);
    circlemove(circle3);
    circlemove(circle4);
    circlemove(circle6);
    circlemove(circle7);
    circlemove(circle8);
    circlemove(circle9);
    acceleration();
    circleacceleration(circle1);
    circleacceleration(circle2);
    circleacceleration(circle3);
    circleacceleration(circle4);
    circleacceleration(circle6);
    circleacceleration(circle7);
    circleacceleration(circle8);
    circleacceleration(circle9);
    displaytable();
    display();
    dog();
    if (mug.x > windowWidth) {
      //LEAVE LEVEL OR...//
      mug.state = "left";
      verification7();
    }
  }
}
function displaytable() {
  push();
  //Display table image
  image(table.image, windowWidth, windowHeight);
  background(table.image);
  pop();
}
//Setting coffee cup movement
function move() {
  plate.x += plate.vx;
  plate.y += plate.vy;
  shadow.x += shadow.vx;
  shadow.y += shadow.vy;
  handle.x += handle.vx;
  handle.y += handle.vy;
  mug.x += mug.vx;
  mug.y += mug.vy;
  coffee.x += coffee.vx;
  coffee.y += coffee.vy;
}
//Setting template circles movements
function circlemove(circle) {
  circle.x += circle.vx;
  circle.y += circle.vy;
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
//Setting template bear ears movements
function bearearmove(bearear) {
  bearear.x += bearear.vx;
  bearear.y += bearear.vy;
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
//Setting template bear ears speed
function bearearacceleration(bearear) {
  bearear.x += bearear.speed;
}
//Setting template lines speed
function traitacceleration(trait) {
  trait.x1 += trait.speed;
  trait.x2 += trait.speed;
}
//Diplaying the images
function display() {
  displayplate();
  displayshadow();
  displayhandle();
  displaymug();
  displaycoffee();
}
function displayplate() {
  //Display coffee cup
  push();
  fill(plate.fill.r, plate.fill.g, plate.fill.b);
  ellipse(plate.x, height / 2, plate.w, plate.h);
  pop();
}
function displayshadow() {
  //Display shadow
  push();
  stroke(shadow.stroke);
  strokeWeight(shadow.strokeWeight);
  ellipse(shadow.x, height / 2, shadow.w, shadow.h);
  pop();
}
function displayhandle() {
  //Display handle
  push();
  fill(handle.fill.r, handle.fill.g, handle.fill.b);
  stroke(handle.stroke);
  strokeWeight(handle.strokeWeight);
  rectMode(CORNER);
  rect(handle.x, height / 2, handle.w, handle.h, handle.tl, handle.tr);
  pop();
}
function displaymug() {
  //Display mug
  push();
  fill(mug.fill.r, mug.fill.g, mug.fill.b);
  stroke(mug.stroke);
  strokeWeight(mug.strokeWeight);
  ellipse(mug.x, height / 2, mug.w, mug.h);
  pop();
}
function displaycoffee() {
  //Display coffee
  push();
  fill(coffee.fill.r, coffee.fill.g, coffee.fill.b);
  ellipse(coffee.x, height / 2, coffee.w, coffee.h);
  pop();
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
//Display smiley drawing
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
  displaybearear(bearearleft);
  displaybearear(bearearright);
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
//Display dog drawing
function dog() {
  push();
  displaycirclecenter(circle1);
  displaycircle(circle2);
  displaycircle(circle3);
  displaycircle(circle4);
  displaycircle(circle6);
  displaycircle(circle7);
  displaycircle(circle8);
  displaycircle(circle9);
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
//Display template bear ears
function displaybearear(bearear) {
  push();
  noFill();
  stroke(bearear.stroke.r, bearear.stroke.g, bearear.stroke.b);
  strokeWeight(bearear.strokeWeight);
  rotate(PI / 4);
  arc(bearear.x, bearear.y, bearear.w, bearear.h, PI + QUARTER_PI, TWO_PI);
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

//Setting the good ending
function open() {
  push();
  image(success.image, windowWidth, windowHeight);
  background(success.image);
  textSize(65);
  fill(200, 100, 100);
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
  image(failure.image, windowWidth, windowHeight);
  background(failure.image);
  push();
  textSize(65);
  fill(100, 100, 200);
  textAlign(CENTER, CENTER);
  text("OH NO!", width / 2, 500);
  push();
  textSize(25);
  text("Coffeeccino goes bankrupt!", width / 2, 550);
  text("You will have to find another job...", width / 2, 600);
  pop();
  pop();
}
//Setting keys to change states
function keyPressed() {
  if (state === "title" && keyCode === 32) {
    state = "welcome";
  } else if (state === "welcome") {
    state = "level1";
  } else if (state === "level1" && keyCode === 13) {
    mug.speed = 3;
  } else if (state === "level2") {
    if (keyCode === 13) {
      mug.speed = 3;
    }
  } else if (state === "level3") {
    if (keyCode === 13) {
      mug.speed = 3;
    }
  } else if (state === "level4") {
    if (keyCode === 13) {
      mug.speed = 3;
    }
  } else if (state === "level5") {
    if (keyCode === 13) {
      mug.speed = 3;
    }
  } else if (state === "level6") {
    if (keyCode === 13) {
      mug.speed = 3;
    }
  } else if (state === "level7") {
    if (keyCode === 13) {
      mug.speed = 3;
    }
  }
}
//Setting when checking is drawing is made correctly in level1
function verification1() {
  if (mug.x > windowWidth) {
    checkisMouseOutsidelevel1();
    checkisMouseInsidelevel1();
  }
}
//Setting when checking is drawing is made correctly in level2
function verification2() {
  if (mug.x > windowWidth) {
    checkisMouseOutsidelevel2();
    checkisMouseInsidelevel2();
  }
}
//Setting when checking is drawing is made correctly in level3
function verification3() {
  if (mug.x > windowWidth) {
    checkisMouseOutsidelevel3();
    checkisMouseInsidelevel3();
  }
}
//Setting when checking is drawing is made correctly in level4
function verification4() {
  if (mug.x > windowWidth) {
    checkisMouseOutsidelevel4();
    checkisMouseInsidelevel4();
  }
}
//Setting when checking is drawing is made correctly in level5
function verification5() {
  if (mug.x > windowWidth) {
    checkisMouseOutsidelevel5();
    checkisMouseInsidelevel5();
  }
}
//Setting when checking is drawing is made correctly in level6
function verification6() {
  if (mug.x > windowWidth) {
    checkisMouseOutsidelevel6();
    checkisMouseInsidelevel6();
  }
}
//Setting when checking is drawing is made correctly in level7
function verification7() {
  if (mug.x > windowWidth) {
    checkisMouseOutsidelevel7();
    checkisMouseInsidelevel7();
  }
}

//Setting mouse pressed use
function mouseIsPressed() {
  let d = dist(mouseX, mouseY, user.x, user.y);
  if (d < user.size / 2) {
    user.drawing = true;
  }
}
function mouseReleased() {
  user.drawing = false;
}

//Setting the drawing function
function mouseDragged() {
  if (user.drawing) {
    stroke(user.stroke);
    strokeWeight(user.strokeWeight);
    user.x = mouseX;
    user.y = mouseY;
  } else if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
//Checking if drawing is inside template in level1
function checkisMouseInsidelevel1() {
  if (isMouseInsidetri(tri3) && isMouseInsidetrait(traitstick)) {
    state = "level2";
  }
}
//Checking if drawing is inside template in level2
function checkisMouseInsidelevel2() {
  if (
    isMouseInsidecircle(circle0) &&
    isMouseInsidetrait(traitray1) &&
    isMouseInsidetrait(traitray2) &&
    isMouseInsidetrait(traitray3) &&
    isMouseInsidetrait(traitray4) &&
    isMouseInsidetrait(traitray5) &&
    isMouseInsidetrait(traitray6) &&
    isMouseInsidetrait(traitray7) &&
    isMouseInsidetrait(traitray8)
  ) {
    state = "level3";
  }
}
//Checking if drawing is inside template in level3
function checkisMouseInsidelevel3() {
  if (
    isMouseInsidecircle(circle1) &&
    isMouseInsidecircle(circle2) &&
    isMouseInsidecircle(circle3) &&
    isMouseInsidecurve(smile1)
  ) {
    state = "level4";
  }
}
//Checking if drawing is inside template in level4
function checkisMouseInsidelevel4() {
  if (
    isMouseInsidecircle(circle1) &&
    isMouseInsidecircle(circle10) &&
    isMouseInsidecircle(circle11) &&
    isMouseInsidetri(tri2)
  ) {
    state = "level5";
  }
}
//Checking if drawing is inside template in level5
function checkisMouseInsidelevel5() {
  if (
    isMouseInsidecircle(circle1) &&
    isMouseInsidecircle(circle2) &&
    isMouseInsidecircle(circle3) &&
    isMouseInsidecircle(circle4) &&
    isMouseInsidecircle(circle5) &&
    isMouseInsidebearear(bearearleft) &&
    isMouseInsidebearear(bearearright)
  ) {
    state = "level6";
  }
}
//Checking if drawing is inside template in level6
function checkisMouseInsidelevel6() {
  if (
    isMouseInsidecircle(circle1) &&
    isMouseInsidecircle(circle2) &&
    isMouseInsidecircle(circle3) &&
    isMouseInsidecircle(circle4) &&
    isMouseInsidetri(tri1) &&
    isMouseInsidetri(tri4) &&
    isMouseInsidetri(tri5) &&
    isMouseInsidetrait(traitwhisker1) &&
    isMouseInsidetrait(traitwhisker2) &&
    isMouseInsidetrait(traitwhisker3) &&
    isMouseInsidetrait(traitwhisker4)
  ) {
    state = "level7";
  }
}
//Checking if drawing is inside template in level7
function checkisMouseInsidelevel7() {
  if (
    isMouseInsidecircle(circle1) &&
    isMouseInsidecircle(circle2) &&
    isMouseInsidecircle(circle3) &&
    isMouseInsidecircle(circle4) &&
    isMouseInsidecircle(circle6) &&
    isMouseInsidecircle(circle7) &&
    isMouseInsidecircle(circle8) &&
    isMouseInsidecircle(circle9)
  ) {
    state = "open";
  }
}
//Checking if drawing is outside template in level1
function checkisMouseOutsidelevel1() {
  if (isMouseOutsidetri(tri3) && isMouseOutsidetrait(traitstick)) {
    state = "closed";
  }
}
//Checking if drawing is outside template in level2
function checkisMouseOutsidelevel2() {
  if (
    isMouseOutsidecircle(circle0) &&
    isMouseOutsidetrait(traitray1) &&
    isMouseOutsidetrait(traitray2) &&
    isMouseOutsidetrait(traitray3) &&
    isMouseOutsidetrait(traitray4) &&
    isMouseOutsidetrait(traitray5) &&
    isMouseOutsidetrait(traitray6) &&
    isMouseOutsidetrait(traitray7) &&
    isMouseOutsidetrait(traitray8)
  ) {
    state = "closed";
  }
}
//Checking if drawing is outside template in level3
function checkisMouseOutsidelevel3() {
  if (
    isMouseOutsidecircle(circle1) &&
    isMouseOutsidecircle(circle2) &&
    isMouseOutsidecircle(circle3) &&
    isMouseOutsidecurve(smile1)
  ) {
    state = "closed";
  }
}
//Checking if drawing is outside template in level4
function checkisMouseOutsidelevel4() {
  if (
    isMouseOutsidecircle(circle1) &&
    isMouseOutsidecircle(circle10) &&
    isMouseOutsidecircle(circle11) &&
    isMouseOutsidetri(tri2)
  ) {
    state = "closed";
  }
}
//Checking if drawing is outside template in level5
function checkisMouseOutsidelevel5() {
  if (
    isMouseOutsidecircle(circle1) &&
    isMouseOutsidecircle(circle2) &&
    isMouseOutsidecircle(circle3) &&
    isMouseOutsidecircle(circle4) &&
    isMouseOutsidecircle(circle5) &&
    isMouseOutsidebearear(bearearleft) &&
    isMouseOutsidebearear(bearearright)
  ) {
    state = "closed";
  }
}
//Checking if drawing is outside template in level6
function checkisMouseOutsidelevel6() {
  if (
    isMouseOutsidecircle(circle1) &&
    isMouseOutsidecircle(circle2) &&
    isMouseOutsidecircle(circle3) &&
    isMouseOutsidecircle(circle4) &&
    isMouseOutsidetri(tri1) &&
    isMouseOutsidetri(tri4) &&
    isMouseOutsidetri(tri5) &&
    isMouseOutsidetrait(traitwhisker1) &&
    isMouseOutsidetrait(traitwhisker2) &&
    isMouseOutsidetrait(traitwhisker3) &&
    isMouseOutsidetrait(traitwhisker4)
  ) {
    state = "closed";
  }
}
//Checking if drawing is outside template in level7
function checkisMouseOutsidelevel7() {
  if (
    isMouseOutsidecircle(circle1) &&
    isMouseOutsidecircle(circle2) &&
    isMouseOutsidecircle(circle3) &&
    isMouseOutsidecircle(circle4) &&
    isMouseOutsidecircle(circle6) &&
    isMouseOutsidecircle(circle7) &&
    isMouseOutsidecircle(circle8) &&
    isMouseOutsidecircle(circle9)
  ) {
    state = "closed";
  }
}
//Checking if drawings follow the circles templates
function isMouseInsidecircle(circle) {
  if (
    mouseX > circle.x &&
    mouseX < circle.x + circle.w &&
    mouseY > circle.y &&
    mouseY < circle.y + circle.h
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings follow the bear ears templates
function isMouseInsidebearear(bearear) {
  if (
    mouseX > bearaear.x &&
    mouseX < bearaear.x + bearaear.w &&
    mouseY > bearaear.y &&
    mouseY < bearaear.y + bearaear.h
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings follow the lines templates
function isMouseInsidetrait(trait) {
  if (
    mouseX > trait.x1 &&
    mouseX < trait.x1 + trait.x2 &&
    mouseY > trait.y1 &&
    mouseY < trait.y1 + trait.y2
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings follow the triangles templates
function isMouseInsidetri(tri) {
  if (
    mouseX > tri.x1 &&
    mouseX < tri.x1 + tri.x2 + tri.x3 &&
    mouseY > tri.y1 &&
    mouseY < tri.y1 + tri.y2 + tri.y3
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings follow the curves templates
function isMouseInsidecurve(smile) {
  if (
    mouseX > smile.x1 &&
    mouseX < smile.x1 + smile.x2 + smile.x3 + smile.x4 &&
    mouseY > smile.y1 &&
    mouseY < smile.y1 + smile.y2 + smile.y3 + smile.y4
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings don't follow the circles templates
function isMouseOutsidecircle(circle) {
  if (
    mouseX < circle.x &&
    mouseX > circle.x + circle.w &&
    mouseY < circle.y &&
    mouseY > circle.y + circle.h
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings don't follow the bear ears templates
function isMouseOutsidebearear(bearear) {
  if (
    mouseX < bearaear.x &&
    mouseX > bearaear.x + bearaear.w &&
    mouseY < bearaear.y &&
    mouseY > bearaear.y + bearaear.h
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings don't follow the lines templates
function isMouseOutsidetrait(trait) {
  if (
    mouseX < trait.x1 &&
    mouseX > trait.x1 + trait.x2 &&
    mouseY < trait.y1 &&
    mouseY > trait.y1 + trait.y2
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings don't follow the triangles templates
function isMouseOutsidetri(tri) {
  if (
    mouseX < tri.x1 &&
    mouseX > tri.x1 + tri.x2 + tri.x3 &&
    mouseY < tri.y1 &&
    mouseY > tri.y1 + tri.y2 + tri.y3
  ) {
    return true;
  } else {
    return false;
  }
}
//Checking if drawings don't follow the curves templates
function isMouseOutsidecurve(smile) {
  if (
    mouseX < smile.x1 &&
    mouseX > smile.x1 + smile.x2 + smile.x3 + smile.x4 &&
    mouseY < smile.y1 &&
    mouseY > smile.y1 + smile.y2 + smile.y3 + smile.y4
  ) {
    return true;
  } else {
    return false;
  }
}
