class ChapterFour6 extends State {
  //Creating the sixth cutscene of Chapter Four
  constructor(w, h, lakeImage) {
    super(w, h, lakeImage);
    this.name = "ChapterFour6";
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = lakeImage;
  }

  //Preloading necessary images the sixth cutscene of Chapter Four
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the sixth cutscene of Chapter Four
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the sixth cutscene of Chapter Four
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    fill(0);
    textAlign(CENTER, BOTTOM);
    text("Press Enter", 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the sixth cutscene of Chapter Four
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Instructions4();
    }
  }
}
