class ChapterOne4 extends State {
  //Creating the fourth cutscene of Chapter One
  constructor(w, h, pathImage) {
    super(w, h, pathImage);

    //Naming state
    this.name = "ChapterOne4";

    //Creating fourth cutscene dialog of Chapter One
    this.dialog8 = [
      "'I cannot help you to find these petals but I can tell you that the mage lives in the castle at the top of the mountain right here.'",
      "'I wish you the best luck to find these precious artifacts!'",
      "Press Enter",
    ];

    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = pathImage;
  }

  //Preloading necessary images for the fourth cutscene of Chapter One
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the fourth cutscene of Chapter One
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    textAlign(CENTER, TOP);

    //Displaying fourth cutscene dialog of Chapter One
    let dialog = this.dialog8[currentLine];
    text(dialog, 0, 100, windowWidth, windowHeight);
  }

  //Setting keyPressed action after the fourth cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterOne5(windowWidth, windowHeight, beginningImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog8.length && state === "ChapterOne4") {
        currentLine = this.dialog8.length - 1;
      }
    }
  }
}
