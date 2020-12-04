class LastChapter1 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, surpriseImage) {
    super(w, h, surpriseImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = surpriseImage;
  }

  //Preloading necessary images for the first cutscene of Chapter Three
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the first cutscene of Chapter Three
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the first cutscene of Chapter Three
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    textAlign(RIGHT, TOP);
    text("Press Enter", (5 * width) / 6, 50);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new LastChapter2(windowWidth, windowHeight, evilImage);
    }
  }
}
