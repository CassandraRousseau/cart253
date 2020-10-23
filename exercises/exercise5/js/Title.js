class Title extends State {
  //Creating the title screen
  constructor() {
    super();
    this.titleString = "Kick the Ball!";
  }
  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }
  //Displaying the title screen
  display() {
    push();
    textSize(105);
    fill(255);
    textAlign(CENTER, CENTER);
    textFont("Lemonada");
    text(this.titleString, width / 2, height / 2);
    push();
    textSize(35);
    text("Press Enter to start", width / 2, (2 * height) / 3);
    pop();
    pop();
  }
  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();
    if (keyCode === 13) {
      currentState = new Instructions();
    }
  }
}
