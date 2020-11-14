class Prologue1 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "Prologue1";
    this.dialog1 = [
      "Once upon a time,(Press Spacebar)",
      "A little girl...(Press Enter)",
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
    text(this.dialog1, width / 2, height / 2);
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Prologue2();
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
