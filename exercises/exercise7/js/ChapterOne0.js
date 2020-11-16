class ChapterOne0 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "ChapterOne0";
    this.titleString3 = "Chapter One";
    this.subtitle2 = ["The Encounter", "Press Enter"];
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
    text(this.titleString3, width / 2, height / 2);

    push();
    textSize(45);
    let subtitle = this.subtitle2[currentLine];
    text(subtitle, width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterOne1();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.subtitle2.length && state === "ChapterOne0") {
        currentLine = this.subtitle2.length - 1;
      }
    }
  }
}
