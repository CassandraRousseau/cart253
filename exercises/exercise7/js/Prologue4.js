class Prologue4 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "Prologue4";
    this.dialog4 = [
      "She will die too.",
      "Unfortunately,",
      "Her rose started to fade",
      "Slowly,",
      "Surely...",
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
    textSize(45);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    let dialog = this.dialog4[currentLine];
    text(dialog, 10, 50, windowWidth, windowHeight);
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterOne0();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog4.length && state === "Prologue4") {
        currentLine = this.dialog4.length - 1;
      }
    }
  }
}
