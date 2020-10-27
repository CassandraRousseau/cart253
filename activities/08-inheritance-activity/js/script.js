"use strict";
/**************************************************
Activity 08:Inheritance
Cassandra Rousseau

The user will control a circular pedestrian at the bottom of the canvas.
Cars, trucks, and motorcycles will be moving left and right across the canvas.
If the pedestrian collides with any of the vehicles, they die.
If they make it to the other side, they succeeded. Just like life!
**************************************************/
let pedestrian;
let vehicles = [];
let numCars = 10;
let numTrucks = 10;
let numMotorcycles = 5;
let currentState = "title";
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);
  let x = width / 2;
  let y = height;
  let pedestrian = new Pedestrian(x, y);
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, 400);
    let car = new Car(x, y);
    vehicles.push(car);
  }
  for (let i = 0; i < numTrucks; i++) {
    let x = random(0, width);
    let y = random(0, 400);
    let truck = new Truck(x, y);
    vehicles.push(truck);
  }
  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, 400);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcyle);
  }
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    let r = random(0, 1);
    if (r < 0.5) {
      if (r === true) {
        vehicle.vx = -vehicle.speed;
      } else {
        vehicle.vx = vehicle.speed;
      }
    }
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(100, 255, 200);
  if (currentState === "title") {
    title();
  } else if (currentState === "simulation") {
    simulation();
  } else if (currentState === "success") {
  } else if (currentState === "dead") {
  }
}
function title() {
  displayText("Pedestrian Palaver");
}
function simulation() {
  displayText();
  pedestrian.handleInput();
  pedestrian.move();
  pedestrian.display();
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }
  if (pedestrian.alive === false) {
    currentState = "dead";
  }
  if (pedestrian.y < 0) {
    currentState = "success";
  }
}
function success() {
  displayText("You crossed the road!");
}
function dead() {
  displayText("You died!");
}
function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text(string, width / 2, height / 2);
  pop();
}
function keyPressed() {
  if (currentState === "title") {
    currentState = "simulation";
  }
}
