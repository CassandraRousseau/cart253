/**************************************************
Exercise 5: Juggle Garden
Cassandra Rousseau

Kicking a ball simulation. The user is a soccer player whose practice is kicking constantly a soccer ball.
The game starts with a title, followed by game instructions.During the simulation, user have to move the knee
 leftand right to catch the ball and making it bounce. User have to keep the ball bouncing until the timer ends.
 If he cathes a basketball ball or makes all the soccer balls fall it's game over.
**************************************************/
"use strict";
let currentState;
let gravityForce = 0.0025;
let timer;
let soccers = [];
let basketballs = [];
let numSoccers = 3;
let numBasketballs = 3;
let kneeImage;
let soccerImage;
let basketballImage;
// setup()
//
// Setting all the preloaded images
//Setting all the setups for each state.
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentState = new Title();
}

// draw()
//
// Setting the draw function for each state.
function draw() {
  currentState.draw();
}

//Setting all key functions for each state.
function keyPressed() {
  currentState.keyPressed();
}
