class BallsFalling {
  constructor() {
    super();
    this.messUp =
      "What ar    super();e you doing!?!?\nYou have to kick the ball,not let it fall!";
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
    text(this.messUp, 10, height / 2, windowWidth, windowHeight);
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
