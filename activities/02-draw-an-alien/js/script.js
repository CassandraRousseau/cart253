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
background(255, 127, 127);

//Draw th body
noStroke();
ellipseMode(CENTER);
fill(127, 127, 127);
ellipse(300, 300, 100, 100);

//Draw th head
fill(100, 100, 100);
ellipse(300, 250, 75, 150);

//Draw the eyes
fill(0,0,0);
ellipse(275, 225, 25, 10);
ellipse(325, 225, 25, 10);

//Draw the nostrils
circle(285, 275, 10);
circle(315, 275, 10);

//Draw the mouth
stroke(255, 0, 0);
strokeWeight(4);
rectMode(CENTER);
rect(300, 300, 75, 10);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
