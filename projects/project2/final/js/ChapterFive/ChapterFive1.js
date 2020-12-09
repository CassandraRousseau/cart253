class ChapterFive1 extends State {
  //Creating the first cutscene of Chapter Five
  constructor(w, h, destinationImage) {
    super(w, h, destinationImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = destinationImage;
  }

  //Preloading necessary images for the first cutscene of Chapter Five
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the first cutscene of Chapter Five
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the first cutscene of Chapter Five
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    textAlign(CENTER, CENTER);
    text("Press Enter", width / 2, (5 * height) / 6);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Five
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterFive2(windowWidth, windowHeight, enterImage);
    }
  }
}
