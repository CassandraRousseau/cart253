class ChapterFour5 extends State {
  //Creating the fifth cutscene of Chapter Four
  constructor(w, h, sleepImage) {
    super(w, h, sleepImage);

    //Naming state
    this.name = "ChapterFour5";
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = sleepImage;
  }

  //Preloading necessary images the fifth cutscene of Chapter Four
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the fifth cutscene of Chapter Four
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the fifth cutscene of Chapter Four
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);

    //Adding how user changes the state
    textSize(55);
    textAlign(CENTER, BOTTOM);
    text("Press Enter", 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the fifth cutscene of Chapter Four
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterFour6(windowWidth, windowHeight, lakeImage);
    }
  }
}
