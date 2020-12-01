class GoodEnding extends State {
  //Creating first good ending screen
  constructor(w, h, goodEndingImage, nextScene) {
    super(w, h, goodEndingImage, nextScene);
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.image = goodEndingImage;
    this.nextScene = nextScene;
    this.goodJob = "Good Job!\nYou found the magic petal!";
  }

  //Preloading background image for first good ending
  preload() {
    this.image.preload();
  }

  //Setting first good ending screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying first good ending screen
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(80);
    textAlign(LEFT, TOP);
    text(this.goodJob, 10, 50, windowWidth, windowHeight);

    push();
    textSize(50);
    text("Press Enter", width / 2, (2 * height) / 3);
    pop();
    pop();
  }

  //Setting keyPressed after first good ending screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      if (this.nextScene === 2) {
        currentState = new ChapterTwo0();
      } else if (this.nextScene === 3) {
        currentState = new ChapterThree0();
      } else if (this.nextScene === 4) {
        currentState = new ChapterFour0();
      } else if (this.nextScene === 5) {
        currentState = new ChapterFive0();
      } else if (this.nextScene === 6) {
        currentState = new LastChapter1(
          windowWidth,
          windowHeight,
          surpriseImage
        );
      }
      currentLine = 0;
    }
  }
}