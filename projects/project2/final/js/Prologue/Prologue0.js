class Prologue0 extends State {
  //Creating the Prologue title screen
  constructor() {
    super();
    //Naming state
    this.name = "Prologue0";

    //Creating title of prologue
    this.titleString2 = "Prologue";

    //Creating subtitle of prologue
    this.subtitle1 = [
      "To read the text, press Spacebar",
      "To turn a page,press Enter",
    ];
  }

  //Setting the Prologue title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the Prologue title screen
  display() {
    push();
    background(255);
    textSize(140);
    textAlign(CENTER, CENTER);
    text(this.titleString2, width / 2, height / 2);

    //Displaying prologue subtitle
    push();
    textSize(55);
    let subtitle = this.subtitle1[currentLine];
    text(subtitle, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after the Prologue title screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Prologue1();
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.subtitle1.length && state === "Prologue0") {
        currentLine = this.subtitle1.length - 1;
      }
    }
  }
}
