class Prologue1 extends State {
  //Creating the first cutscene of Prologue
  constructor() {
    super();
    this.name = "Prologue1";

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
    textSize(45);
    textAlign(CENTER, CENTER);

    let dialog = this.dialog1[currentLine];
    text(dialog, 10, 50, windowWidth, windowHeight);
  }

  //Setting keyPressed action after the first cutscene of Prologue
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Prologue2(windowWidth, windowHeight, girlImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog1.length && state === "Prologue1") {
        currentLine = this.dialog1.length - 1;
      }
    }
  }
}
