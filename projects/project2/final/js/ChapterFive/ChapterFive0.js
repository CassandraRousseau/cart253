class ChapterFive0 extends State {
  //Creating the Chapter Five title screen
  constructor() {
    super();

    //Naming state
    this.name = "ChapterFive0";

    //Creating Chapter Five title
    this.titleString5 = "Chapter Five";

    //Creating Chapter Five subtitle
    this.subtitle4 = ["Final destination", "Press Enter"];
  }

  //Setting the Chapter Five title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the Chapter Five title screen
  display() {
    push();
    background(255);
    textSize(140);
    textAlign(CENTER, CENTER);
    text(this.titleString5, width / 2, height / 2);

    push();
    textSize(55);
    let subtitle = this.subtitle4[currentLine];
    text(subtitle, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after the Chapter Five title screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterFive1(
        windowWidth,
        windowHeight,
        destinationImage
      );
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog5.length && state === "ChapterFive0") {
        currentLine = this.dialog5.length - 1;
      }
    }
  }
}
