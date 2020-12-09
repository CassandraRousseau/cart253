class ChapterFour0 extends State {
  //Creating Chapter Four title screen
  constructor() {
    super();

    //Naming state
    this.name = "ChapterFour0";

    //Creating Chapter Four title
    this.titleString6 = "Chapter Four";

    //Creating Chapter Four subtitle
    this.subtitle5 = ["True Identity", "Press Enter"];
  }

  //Setting Chapter Four title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying Chapter Four title screen
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

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterFour1(windowWidth, windowHeight, visitImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.subtitle5.length && state === "ChapterFour0") {
        currentLine = this.subtitle5.length - 1;
      }
    }
  }
}
