class Epilogue6 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, girlImage) {
    super(w, h, girlImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = girlImage;
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
    textAlign(CENTER, TOP);
    text("Press Enter", width / 2, 10);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Epilogue7(windowWidth, windowHeight, smileImage);
      currentLine = 0;
    }
  }
}
