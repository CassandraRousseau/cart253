class ChapterFive0 extends State {
  //Creating the Chapter Five title screen
  constructor() {
    super();
    this.name = "ChapterFive0";
    this.titleString5 = "Chapter Five";
    this.subtitle4 = ["Last destination", "Press Enter"];
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

    if (keyCode === 13) {
      currentState = new ChapterFive1(
        windowWidth,
        windowHeight,
        destinationImage
      );
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog5.length && state === "ChapterFive0") {
        currentLine = this.dialog5.length - 1;
      }
    }
  }
}
