class ChapterTwo0 extends State {
  //Creating the Chapter Two title screen
  constructor() {
    super();

    //Naming state
    this.name = "ChapterTwo0";

    //Creating Chapter Two title
    this.titleString4 = "Chapter Two";

    //Creating Chapter Two subtitle
    this.subtitle3 = ["The Cave", "Press Enter"];
  }

  //Setting the Chapter Two title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the Chapter Two title screen
  display() {
    push();
    background(255);
    textSize(140);
    textAlign(CENTER, CENTER);
    text(this.titleString4, width / 2, height / 2);

    //Displaying Chapter Two subtitle
    push();
    textSize(55);
    let subtitle = this.subtitle3[currentLine];
    text(subtitle, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after the Chapter Two title screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterTwo1(windowWidth, windowHeight, lookingImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.subtitle2.length && state === "ChapterTwo0") {
        currentLine = this.subtitle2.length - 1;
      }
    }
  }
}
