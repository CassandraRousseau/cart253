class ChapterFive3 extends State {
  //Creating the second cutscene of Chapter Three
  constructor(w, h, roomImage) {
    super(w, h, roomImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = roomImage;
  }

  //Preloading necessary images for the second cutscene of Chapter Three
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of Chapter Three
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Chapter Three
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    textAlign(LEFT, TOP);
    text("Press Enter", 10, 50);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Instructions5();
      currentLine = 0;
    }
  }
}
