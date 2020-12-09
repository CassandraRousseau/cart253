class ChapterFive2 extends State {
  //Creating the second cutscene of Chapter Five
  constructor(w, h, enterImage) {
    super(w, h, enterImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = enterImage;
  }

  //Preloading necessary images for the second cutscene of Chapter Five
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of Chapter Five
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Chapter Five
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    textAlign(RIGHT, BOTTOM);
    text("Press Enter", width / 4, height);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter Five
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterFive3(windowWidth, windowHeight, roomImage);
    }
  }
}
