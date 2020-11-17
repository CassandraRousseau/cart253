class ChapterFive0 extends State {
  //Creating the Chapter Three title screen
  constructor() {
    super();
    this.name = "ChapterFive0";
    this.titleString5 = "Chapter Five";
    this.subtitle4 = ["Last destination", "Press Enter"];
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
    textSize(115);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    text(this.titleString5, width / 2, height / 2);

    push();
    textSize(45);
    let subtitle = this.subtitle4[currentLine];
    text(subtitle, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after the Chapter Three title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterFive1(
        windowWidth,
        windowHeight,
        destinationImage
      );
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog5.length && state === "ChapterFive0") {
        currentLine = this.dialog5.length - 1;
      }
    }
  }
}
