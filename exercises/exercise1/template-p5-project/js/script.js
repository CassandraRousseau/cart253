/**************************************************
Exercise 1:I like to move it move it!
Cassandra Rousseau
Creating a part of the Solar system
**************************************************/
let bg ={
  r:0,
  g:0,
  b:0,
};
let circle1 ={
size:100,
r:100,
g:200,
b:0,
alpha:200,
speed:1,
growth:1,
};
let circle2={
x:500,
y:100,
size:50,
r:0,
g:0,
b:255,
alpha:225,
speed:-1,
growth:-0.5,
};

let arc1={
  x:10,
  y:700,
  w:900,
  h:700,
  start:0,
  stop:180,
}
let arc2 ={
  x:0,
  y:500,
  w:500,
  h:500,
  start:0,
  stop:180,
  r:200,
  g:200,
  b:0,
  alpha:255};
// setup()
//
// Creating the canvas.
function setup() {
createCanvas(500,500);
stroke(255);
strokeWeight(10);
}

// draw()
//
//Creating the animation
function draw() {
//background
background(bg.r,bg.g,bg.b);
bg.b= map (circle1.size,100,width,0,225);
//Left circle
ellipse(mouseX,mouseY,circle1.size);
fill(circle1.r,circle1.g,circle1.b, circle1.alpha);
circle1.b= map(mouseX,0,mouseY,10,225);
circle1.x+=circle1.speed;
circle1.size+=circle1.growth;
circle1.size=constrain(circle1.size,0,200);
//Right circle
ellipse(circle2.x,circle2.y,circle2.size);
fill(circle2.r,circle2.g,circle.b);
circle2.x+=circle2.speed;
circle2.y= constrain(circle2.y,0,250);
circle2.x= constrain (circle2.x,0,width);
circle2.size+=circle2.growth;
circle2.size=constrain(circle2.size,0,100);
//arc
ellipse(arc1.x,arc1.y,arc1.w,arc1.h,arc1.start,arc1.stop);
//arc
ellipse(arc2.x,arc2.y,arc2.w,arc2.h,arc2.start,arc2.stop);
fill(arc2.r,arc2.g,arc2.b);
}
