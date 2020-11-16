class Prologue0 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "Prologue0";
    this.titleString2 = "Prologue";
    this.subtitle1 = [
      "To read the text, press Spacebar",
      "To turn a page,press Enter",
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
    text(this.titleString2, width / 2, height / 2);

    push();
    textSize(45);
    text(this.subtitle1, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Prologue1();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.subtitle1.length && state === "Prologue0") {
        currentLine = this.subtitle1.length - 1;
      }
    }
  }
}
