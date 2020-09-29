/**************************************************
Template p5 project
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);
let hotCelsius = toCelsius(100);
console.log('100 degrees Farenheit is ${hotCelsius} degrees Celsius.');
let coldCelsius= toCelsius(10);
console.log('10 degrees Farenheit is ${coldCelsius} degrees Celsius.');
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);
}
function toCelsius(farenheit){
  let celsius =(farenheit-32)*5/9;
  return celsius;
}
