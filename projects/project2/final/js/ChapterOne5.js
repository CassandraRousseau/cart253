class ChapterOne5 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "ChapterOne5";
    this.dialog9 = [
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
    text(this.dialog9, width / 2, height / 2);
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

      if (currentLine === this.dialog9.length && state === "ChapterOne5") {
        currentLine = this.dialog9.length - 1;
      }
    }
  }
}
