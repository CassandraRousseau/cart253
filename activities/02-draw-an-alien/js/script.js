/**************************************************
Drawing an Alien Activity
Cassandra Rousseau

Creation of an alien.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {

//Set the backgroud in pink
createCanvas(640, 480);
background(255, 100, 150);

//Draw th body
noStroke();
ellipseMode(CENTER);
fill(127);
ellipse(320, 470, 250, 200);

//Draw th head
fill(100);
ellipse(320, 250, 175, 270);

//Draw the eyes
fill(0);
ellipse(280, 225, 50, 115);
ellipse(360, 225, 50, 115);

//Draw the nostrils
circle(305, 300, 10);
circle(335, 300, 10);

//Draw the mouth
stroke(255, 0, 0);
strokeWeight(5);
rectMode(CENTER);
rect(320, 345, 90, 10);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
