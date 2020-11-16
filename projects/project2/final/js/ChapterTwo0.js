class ChapterTwo0 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "ChapterTwo0";
    this.titleString4 = "Chapter Two";
    this.subtitle3 = ["The Cave", "Press Enter"];
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
    text(this.titleString3, width / 2, height / 2);

    push();
    textSize(45);
    text(this.subtitle2, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterTwo1();
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
