/**************************************************
Exercise 1:I like to move it move it!
Cassandra Rousseau
Creating Solar system.Two circles come in from either side of the screen.Left circle (Jupiter) grows bigger
and changes colors from red to white while moving to the right;right circle (Mars) changes colors from purple to yellow
and shrinks while moving to the left until it disappears.A yellow circle (Saturn) is at the bottom left corner accompanied by
a shaking ring. The circle is gradually covered up by an orange shadow. The canvas backgound (universe)
is covered with points(stars) and his color changed gradually from black to blue while the left circle is moving to the right.
A colorful spaceship is following the computer mouse.
**************************************************/
let bg ={
  r:0,
  g:0,
  b:0,
};
let circle1 ={
  x:100,
  y:200,
size:100,
r:255,
g:100,
b:10,
alpha:225,
speed:0.75,
growth:1,
};
let circle2={
x:500,
y:100,
size:150,
r:200,
g:155,
b:10,
alpha:225,
speed:-1,
growth:-0.25,
};

let arc1={
  y:725,
  w:900,
  h:675,
  start:0,
  stop:180,
  speed:-25,
};
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
  alpha:255,
};
let oval1 = {
  x:0,
  y: 500,
  w: 0,
  h: 0,
  r: 200,
  g: 100,
  b: 0,
  growth:1,
};
let oval2={
  w:195,
  h:100,
  r:225,
  g:125,
  b:0,
};
let rectangle1={
  w:80,
  h:145,
  tl:5,
  tr:5,
  r:0,
  g:215,
  b:215,
};
let rectangle2={
  w:195,
  h:45,
  tl:5,
  tr:5,
  r:0,
  g:215,
  b:215,
};
// setup()
//
// Creating the canvas.
function setup() {
createCanvas(500,500);
stroke(255,150);
strokeWeight(8);
}

// draw()
//
//Creating the solar system
function draw() {
//Background(universe)
background(bg.r,bg.g,bg.b);
bg.b= map (circle1.x,250,width,0,225);
//Stars
point(300,200);
point(200,300);
point(500,30);
point(400,150);
point(100,250);
point(150,100);
point(350,450);
point(450,350);
point(75,300);
point(250,75);
point(475,500);
point(500,200);
point(0,200);
point(0,30);

//Jupiter(left circle)
fill(circle1.r,circle1.g,circle1.b,circle1.alpha);
circle1.g= map (circle1.x,250,width,0,255);
circle1.b = map (circle1.x,250,width,0,255);
ellipse(circle1.x,circle1.y,circle1.size);
circle1.x+=circle1.speed;
circle1.size+=circle1.growth;
circle1.size=constrain(circle1.size,0,150);
//Mars(right circle)
fill(circle2.r,circle2.g,circle2.b);
circle2.b = map (circle1.x,500,250,0,150);
ellipse(circle2.x,circle2.y,circle2.size);
circle2.x+=circle2.speed;
circle2.y= constrain(circle2.y,0,250);
circle2.x= constrain (circle2.x,0,width);
circle2.size+=circle2.growth;
circle2.size=constrain(circle2.size,0,100);
//Saturn ring
push();
noFill();
stroke(255,255);
strokeWeight(15);
arc1.x=random(0,20);
ellipse(arc1.x,arc1.y,arc1.w,arc1.h,arc1.start,arc1.stop);
arc1.x+=arc1.speed;
pop();
//Saturn(bottom left circle)
push();
blendMode(HARD_LIGHT);
fill(arc2.r,arc2.g,arc2.b);
ellipse(arc2.x,arc2.y,arc2.w,arc2.h,arc2.start,arc2.stop);
//Saturn shadow
noStroke();
fill(oval1.r, oval1.g, oval1.b);
ellipse(oval1.x, oval1.y, oval1.w, oval1.h);
oval1.w += oval1.growth;
oval1.w = constrain(oval1.w, 0, 500);
oval1.h += oval1.growth;
oval1.h = constrain(oval1.h, 0, 500);
pop();
//Spaceship
fill(oval2.r,oval2.g,oval2.b);
ellipse(mouseX,mouseY,oval2.w,oval2.h);
oval2.r= map(mouseX,0,mouseY,10,225);
//Spaceship cockpit
push();
noStroke();
fill(rectangle1.r,rectangle1.g,rectangle1.b);
rectangle1.b= map(mouseX,0,mouseY,10,225);
rect(mouseX,mouseY,rectangle1.w,rectangle1.h,rectangle1.tl,rectangle1.tr);
pop();
rectMode(CENTER);
//Hiding cockpit on spaceship
push();
noStroke();
fill(oval2.r,oval2.g,oval2.b);
ellipse(mouseX,mouseY,oval2.w,oval2.h);
oval2.r= map(mouseX,0,mouseY,10,225);
pop();
//Spaceship's windows
fill(rectangle2.r,rectangle2.g,rectangle2.b);
rectangle2.g= map(mouseX,0,mouseY,10,225);
rect(mouseX,mouseY,rectangle2.w,rectangle2.h,rectangle2.tl,rectangle2.tr);
}
