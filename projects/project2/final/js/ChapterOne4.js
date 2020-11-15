class ChapterOne4 extends State {
  //Creating the title screen
  constructor(w, h, pathImage) {
    super(w, h, pathImage);
    this.name = "ChapterOne4";
    this.dialog8 = [
      "I cannot help you to find the petals but I can tell you that the mage lives in the castle at the top of the mountain right here.",
      "I wish you the best luck to find these precious artifacts!",
      "Press Enter",
    ];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = pathImage;
  }

  //Preloading necessary images for title screen
  preload() {
    super.preload();
    this.image.preload();
  }
  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the title screen
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(115);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    text(this.dialog8, width / 2, height / 2);
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterOne5();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog8.length && state === "ChapterOne4") {
        currentLine = this.dialog8.length - 1;
      }
    }
  }
}
