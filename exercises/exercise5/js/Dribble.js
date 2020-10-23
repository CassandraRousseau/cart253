class Dribble {
  constructor() {
    super();
    this.wrongBall =
      "What are you doing!?!?\nWe are not here to dribble and shoot!";
  }
  draw() {
    super.draw();
    this.display();
  }
  //Setting bad ending screen
  display() {
    //Setting time out screen
    push();
    textSize(85);
    fill(225, 125, 125);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text(this.wrongBall, 10, height / 2, windowWidth, windowHeight);
    push();
    textSize(35);
    text("Press Enter to restart", 10, (2 * height) / 3);
    pop();
    pop();
  }
  keyPressed() {
    if (keyCode === 13) {
      location.reload();
    }
  }
}
