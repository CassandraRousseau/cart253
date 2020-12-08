class Prologue1 extends State {
  //Creating the first cutscene of Prologue
  constructor() {
    super();

    //Naming state
    this.name = "Prologue1";

    //Creating first cutscene dialog of Prologue
    this.dialog1 = [
      "Once upon a time,(Press Spacebar)",
      "A little girl...(Press Enter)",
    ];
  }

  //Setting the first cutscene of Prologue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the first cutscene of Prologue
  display() {
    push();
    background(255);
    textSize(100);
    textAlign(CENTER, CENTER);

    //Displaying first cutscene dialog of Prologue
    let dialog = this.dialog1[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
  }

  //Setting keyPressed action after the first cutscene of Prologue
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Prologue2(windowWidth, windowHeight, girlImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog1.length && state === "Prologue1") {
        currentLine = this.dialog1.length - 1;
      }
    }
  }
}
