/**************************************************
Activity 03: Moving Pictures
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
let bg ={
  r:0,
  g:0,
  b:0,
};
let circle1 ={
x:0,
y:250,
size:100,
fill:255,
alpha:200,};
let circle2={
x:500,
y:250,
size:50,
fill:255,
alpha:225,

};
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);
noStroke();
}

// draw()
//
//
function draw() {
//background
bg(bg.r,bg.g,bg.b);
bg.r+=1;
//circle1
fill(circle1.fill, circle1.alpha);
ellipse(circle1.x,circle1.y,circle1.size)



}
