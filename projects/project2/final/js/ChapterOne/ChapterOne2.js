class ChapterOne2 extends State {
  //Creating the second cutscene of Chapter One
  constructor(w, h, encounterImage) {
    super(w, h, encounterImage);

    //Naming state
    this.name = "ChapterOne2";

    //Creating second cutscene dialog of Chapter One
    this.dialog6 = [
      "One day,",
      "She met an elderly",
      "The elder, shocked to see the weak girl, asks:",
      "'Poor Child! Why are you fragile?'",
      "The little girl shows her fading rose and responds:",
      "'I am ill madam, I need to find a solution to cure my disease...'",
      "'Oh dear! I can help you!'",
      "'But you have to be prepared, because the process might be dangerous'",
      "Press Enter",
    ];

    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = encounterImage;
  }

  //Preloading necessary images the second cutscene of Chapter One
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of Chapter One
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Chapter One
  display() {
    push();
    tint(255, 255, 255, 225);
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(80);
    textAlign(CENTER, BOTTOM);

    //Displaying second cutscene dialog of Chapter One
    let dialog = this.dialog6[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterOne3(windowWidth, windowHeight, mythImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog6.length && state === "ChapterOne2") {
        currentLine = this.dialog6.length - 1;
      }
    }
  }
}
