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
    textSize(45);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    let dialog = this.dialog1[currentLine];
    text(dialog, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Prologue2(windowWidth, windowHeight, girlImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog.length && state === "Prologue1") {
        currentLine = this.dialog1.length - 1;
      }
    }
  }
}
