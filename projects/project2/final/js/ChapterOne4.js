class ChapterOne4 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "ChapterOne4";
    this.dialog8 = [
      "I cannot help you to find the petals but I can tell you that the mage lives in the castle at the top of the mountain right here.",
      "I wish you the best luck to find these precious artifacts!",
      "And it was a this moment that the little girl started her perilous journey...",
      "Press Enter",
    ];
  }

  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the title screen
  display() {
    push();
    background(255);
    textSize(115);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    text(this.dialog8, width / 2, height / 2);
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Instructions1();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog8.length && state === "ChapterOne4") {
        currentLine = this.dialog8.length - 1;
      }
    }
  }
}
