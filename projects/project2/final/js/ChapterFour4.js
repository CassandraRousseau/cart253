class ChapterFour4 extends State {
  //Creating the psecond cutscene of Chapter One
  constructor() {
    super();
    this.name = "ChapterFour4";
    this.dialog13 = [
      "'Unfortunately..'",
      "'No scientist have found a remedy yet to heal this quite strange phenomenon...'",
      "You only got two options",
      "'Either you kill your daughter before she metamorphoses...'",
      "'Or...'",
    ];
  }
  //Setting the second cutscene of Chapter One
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Chapter One
  display() {
    push();
    background(255);
    textSize(45);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");

    let dialog = this.dialog13[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterFour5(windowWidth, windowHeight, sleepImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog13.length && state === "ChapterFour4") {
        currentLine = this.dialog13.length - 1;
      }
    }
  }
}
