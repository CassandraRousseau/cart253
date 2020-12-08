class Prologue4 extends State {
  //Creating the fourth cutscene of Prologue
  constructor() {
    super();

    //Naming state
    this.name = "Prologue4";

    //Creating fourth cutscene dialog of Prologue
    this.dialog4 = [
      "She will die too.",
      "Unfortunately,",
      "Her rose started to fade",
      "Slowly,",
      "Surely...",
      "Press Enter",
    ];
  }

  //Setting the fourth cutscene of Prologue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the fourth cutscene of Prologue
  display() {
    push();
    background(255);
    textSize(100);
    textAlign(CENTER, CENTER);

    //Displaying fourth cutscene dialog of Prologue
    let dialog = this.dialog4[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
  }

  //Setting keyPressed action after the fourth cutscene of Prologue
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterOne0();
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog4.length && state === "Prologue4") {
        currentLine = this.dialog4.length - 1;
      }
    }
  }
}
