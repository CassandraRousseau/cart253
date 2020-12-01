class ChapterTwo0 extends State {
  //Creating the Chapter Two title screen
  constructor() {
    super();
    this.name = "ChapterTwo0";
    this.titleString4 = "Chapter Two";
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

    if (keyCode === 13) {
      currentState = new ChapterTwo1(windowWidth, windowHeight, lookingImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.subtitle2.length && state === "ChapterTwo0") {
        currentLine = this.subtitle2.length - 1;
      }
    }
  }
}
