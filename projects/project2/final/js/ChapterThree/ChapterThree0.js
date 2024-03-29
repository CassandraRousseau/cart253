class ChapterThree0 extends State {
  //Creating the Chapter Three title screen
  constructor() {
    super();

    //Naming state
    this.name = "ChapterThree0";

    //Creating Chapter Three title
    this.titleString5 = "Chapter Three";

    //Creating Chapter Three subtitle
    this.subtitle4 = ["Heap of leaves", "Press Enter"];
  }

  //Setting the Chapter Three title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the Chapter Three title screen
  display() {
    push();
    background(255);
    textSize(140);
    textAlign(CENTER, CENTER);
    text(this.titleString5, width / 2, height / 2);

    //Displaying Chapter Three subtitle
    push();
    textSize(55);
    let subtitle = this.subtitle4[currentLine];
    text(subtitle, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after the Chapter Three title screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterThree1(windowWidth, windowHeight, bunchImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog5.length && state === "ChapterThree0") {
        currentLine = this.dialog5.length - 1;
      }
    }
  }
}
