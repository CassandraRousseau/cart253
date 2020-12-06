class ChapterFive3 extends State {
  //Creating the third cutscene of Chapter Five
  constructor(w, h, roomImage) {
    super(w, h, roomImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = roomImage;
  }

  //Preloading necessary images for the third cutscene of Chapter Five
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the third cutscene of Chapter Five
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the third cutscene of Chapter Five
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    textAlign(LEFT, TOP);
    text("Press Enter", 10, 50);
    pop();
  }

  //Setting keyPressed action after the third cutscene of Chapter Five
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Instructions5();
    }
  }
}
