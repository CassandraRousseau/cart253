class ChapterTwo1 extends State {
  //Creating the first cutscene of Chapter Two
  constructor(w, h, lookingImage) {
    super(w, h, lookingImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = lookingImage;
  }

  //Preloading necessary images for the first cutscene of Chapter Two
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the first cutscene of Chapter Two
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the first cutscene of Chapter Two
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);

    //Adding how user changes the state
    textSize(55);
    textAlign(RIGHT, CENTER);
    text("Press Enter", width / 2, (5 * height) / 6);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Two
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterTwo2(windowWidth, windowHeight, holeImage);
    }
  }
}
