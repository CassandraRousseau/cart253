class ChapterOne1 extends State {
  //Creating the title screen
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

  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the title screen
  display() {
    push();
    background(255);
    textSize(115);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    text(this.dialog5, width / 2, height / 2);
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterOne2();
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
