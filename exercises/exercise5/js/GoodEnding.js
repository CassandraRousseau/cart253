class GoodEnding extends State {
  //Creating good ending screen
  constructor() {
    super();
    this.goodJob = "Good Job!\nSee you tomorrow player for another practice!";
  }
  //Setting good ending screen
  draw() {
    super.draw();
    this.display();
  }
  //Displaying good ending screen
  display() {
    push();
    textSize(85);
    fill(225, 125, 125);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text(this.goodJob, 10, height / 2, windowWidth, windowHeight);
    push();
    textSize(35);
    text("Press Enter to restart", width / 2, (2 * height) / 3);
    pop();
    pop();
  }
  //Setting keyPressed after good ending screen
  keyPressed() {
    super.keyPressed();
    if (keyCode === 13) {
      location.reload();
    }
  }
}
