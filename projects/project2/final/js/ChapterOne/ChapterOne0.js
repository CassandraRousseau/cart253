class ChapterOne0 extends State {
  //Creating the Chapter One title screen
  constructor() {
    super();

    //Naming state
    this.name = "ChapterOne0";

    //Creating Chapter One title
    this.titleString3 = "Chapter One";

    //Creating Chapter One subtitle
    this.subtitle2 = ["The Encounter", "Press Enter"];
  }

  //Setting the Chapter One title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the Chapter One title screen
  display() {
    push();
    background(255);
    textSize(140);
    textAlign(CENTER, CENTER);
    text(this.titleString3, width / 2, height / 2);

    //Displaying the subtitle of Chapter One title screen
    push();
    textSize(55);
    let subtitle = this.subtitle2[currentLine];
    text(subtitle, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after Chapter One title screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterOne1();
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.subtitle2.length && state === "ChapterOne0") {
        currentLine = this.subtitle2.length - 1;
      }
    }
  }
}
