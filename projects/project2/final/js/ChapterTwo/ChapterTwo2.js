class ChapterTwo2 extends State {
  //Creating the second cutscene of Chapter Two
  constructor(w, h, holeImage) {
    super(w, h, holeImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = holeImage;
  }

  //Preloading necessary images for the second cutscene of Chapter Two
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of Chapter Two
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Chapter Two
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    textAlign(LEFT, CENTER);
    text("Press Enter", width / 2, (5 * height) / 6);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter Two
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Instructions2();
    }
  }
}
