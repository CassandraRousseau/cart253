class Title extends State {
  constructor() {
    super();
    this.titleString = "Kick the Ball!";
  }
  draw() {
    super.draw();
    this.display();
  }
  //Setting the title screen
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
  keyPressed() {
    super.keyPressed();
    if (keyCode === 13) {
        state = "instructions";
      }
      currentState= new Instructions();
    }
  }
}
