class ChapterFour4 extends State {
  //Creating the fourth cutscene of Chapter Four
  constructor() {
    super();
    this.name = "ChapterFour4";
    this.dialog13 = [
      "'Unfortunately..'",
      "'No scientist have found a remedy yet to heal this quite strange phenomenon...'",
      "'You only got two options'",
      "'Either you kill your daughter before she metamorphoses...'",
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

    let dialog = this.dialog13[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the fourth cutscene of Chapter Four
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterFour5(windowWidth, windowHeight, sleepImage);
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog13.length && state === "ChapterFour4") {
        currentLine = this.dialog13.length - 1;
      }
    }
  }
}
