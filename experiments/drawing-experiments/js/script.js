/**************************************************
Drawing Experiments
Cassandra Rousseau

Experimenting with P5's color and drawing functions
Currently draws a face
**************************************************/

// setup()
//
// Draws a face on a canvas.
function setup() {
createCanvas(500, 500);

//Set the background to mint
background(191, 255, 199);

//Draw a flesh-colored head
fill(250, 200, 200);//the flesh color
ellipse(250, 250, 200, 200);// the head

//Draw the eyes
fill(0, 0, 255);
ellipse(200, 250, 30, 30);
ellipse(300, 250, 30, 30);

//Draw the mouth
strokeWeight(10);
line(200, 300, 300, 300);

}

// draw()
//
// Does nothing.
function draw() {

}
