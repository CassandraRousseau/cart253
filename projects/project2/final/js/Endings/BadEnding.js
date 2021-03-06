class BadEnding extends State {
  //Creating bad ending screen
  constructor(w, h, badEndingImage, nextScene) {
    super(w, h, badEndingImage, nextScene);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = badEndingImage;
    this.nextScene = nextScene;
    this.over = "Game Over";
  }

  //Preloading background image for bad ending
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting bad ending screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying bad ending screen
  display() {
    push();
    image(this.image, this.x, this.y, this.width, this.height);
    textSize(85);
    textAlign(LEFT, TOP);
    text(this.over, 10, (2 * height) / 6, windowWidth, windowHeight);
    push();
    textSize(50);

    //Adding how user changes the state
    text("Press Enter to restart", 10, (3 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after bad ending screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      if (this.nextScene === 2) {
        currentState = new ChapterOne0();
      } else if (this.nextScene === 3) {
        currentState = new ChapterTwo0();
      } else if (this.nextScene === 4) {
        currentState = new ChapterThree0();
      } else if (this.nextScene === 5) {
        currentState = new ChapterFour0();
      } else if (this.nextScene === 6) {
        currentState = new ChapterFive0();
      }
    }
  }
}
