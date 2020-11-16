class ChapterThree0 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "ChapterThree0";
    this.titleString5 = "Chapter Three";
    this.subtitle4 = ["Bunch of leaves", "Press Enter"];
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
      currentState = new ChapterThree1(windowWidth, windowHeight, bunchImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog5.length && state === "ChapterThree0") {
        currentLine = this.dialog5.length - 1;
      }
    }
  }
}
