class BallsFalling extends State {
  //Creating bad ending(all soccer balls are falling)screen
  constructor() {
    super();
    this.messUp =
      "What are you doing!?!?\nYou have to kick the balls,not let them fall!";
  }
  //Setting bad ending(all soccer balls are falling)screen
  draw() {
    super.draw();
    this.display();
  }
  //Displaying bad ending(all soccer balls are falling)screen
  display() {
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
  //Setting keyPressed action after bad ending(all soccer balls are falling)screen
  keyPressed() {
    super.keyPressed();
    if (keyCode === 13) {
      location.reload();
    }
  }
}