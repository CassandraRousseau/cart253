class ChapterFour4 extends State {
  //Creating the fourth cutscene of Chapter Four
  constructor() {
    super();

    //Naming state
    this.name = "ChapterFour4";

    //Creating fourth cutscene dialog of Chapter Four
    this.dialog13 = [
      "'Unfortunately..'",
      "'No scientist has found a remedy to heal this quite strange phenomenon...'",
      "'You only got two options'",
      "'Either you kill your daughter before she transforms completely...'",
      "'Or...'",
      "Press Enter",
    ];
  }
  //Setting the fourth cutscene of Chapter Four
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the fourth cutscene of Chapter Four
  display() {
    push();
    background(255);
    textSize(100);
    textAlign(CENTER, CENTER);

    //Displaying fourth cutscene dialog of Chapter Four
    let dialog = this.dialog13[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the fourth cutscene of Chapter Four
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterFour5(windowWidth, windowHeight, sleepImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog13.length && state === "ChapterFour4") {
        currentLine = this.dialog13.length - 1;
      }
    }
  }
}
