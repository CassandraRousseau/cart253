class ChapterOne1 extends State {
  //Creating the first cutscene of Chapter One
  constructor() {
    super();
    this.name = "ChapterOne1";

    this.dialog5 = [
      "The little girl,",
      "Feeling more and more powerless each day,",
      "Searched desesperately a way to heal herself.",
      "Press Enter",
    ];
  }

  //Setting the  first cutscene of Chapter One
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the  first cutscene of Chapter One
  display() {
    push();
    background(255);
    textSize(45);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    let dialog = this.dialog5[currentLine];
    text(dialog, 10, 50, windowWidth, windowHeight);
  }

  //Setting keyPressed action after the  first cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterOne2(windowWidth, windowHeight, encounterImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog5.length && state === "ChapterOne1") {
        currentLine = this.dialog5.length - 1;
      }
    }
  }
}
