class ChapterThree2 extends State {
  //Creating the second cutscene of Chapter Three
  constructor(w, h, curiousImage) {
    super(w, h, curiousImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = curiousImage;
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

    //Adding how user changes the state
    textSize(55);
    textAlign(RIGHT, CENTER);
    text("Press Enter", width / 2, (5 * height) / 6);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Instructions3();
    }
  }
}
