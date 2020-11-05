/**************************************************
Activity 09:Sound activity
Cassandra Rousseau

The canvas will start blank and the user can add moving circles by clicking.
As a circle moves it will emit a tone based on its distance from the centre of the canvas.
 When a circle touches the edges of the canvas it will bounce, and play a note!
**************************************************/
let balls = [];
let notes = ["F3", "G3", "Ab4", "Bb4", "C4", "Db4", "Eb4", "F4"];
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);
  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
  function mousePressed() {
    createBall(mouseX, mouseY);
  }

  function createBall(x, y) {
    let note = random(notes);
    let ball = new Ball(x, y, note);
    balls.push(ball);
  }
}
