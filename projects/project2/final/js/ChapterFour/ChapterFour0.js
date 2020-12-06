class ChapterFour0 extends State {
  //Creating the Chapter Four title screen
  constructor() {
    super();
    this.name = "ChapterFour0";
    this.titleString6 = "Chapter Four";
    this.subtitle5 = ["Real Identity", "Press Enter"];
  }

  //Setting the Chapter Four title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the Chapter Four title screen
  display() {
    push();
    background(255);
    textSize(140);
    textAlign(CENTER, CENTER);
    text(this.titleString6, width / 2, height / 2);

    //Displaying the subtitle of Chapter Four title screen
    push();
    textSize(55);
    let subtitle = this.subtitle5[currentLine];
    text(subtitle, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after Chapter Four title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterFour1(windowWidth, windowHeight, visitImage);
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.subtitle5.length && state === "ChapterFour0") {
        currentLine = this.subtitle5.length - 1;
      }
    }
  }
}
