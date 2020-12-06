class Epilogue6 extends State {
  //Creating the sixth cutscene of Epilogue
  constructor(w, h, girlImage) {
    super(w, h, girlImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = girlImage;
  }

  //Preloading necessary images for the sixth cutscene of Epilogue
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the sixth cutscene of Epilogue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the sixth cutscene of Epilogue
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    textAlign(CENTER, TOP);
    text("Press Enter", width / 2, 10);
    pop();
  }

  //Setting keyPressed action after the sixth cutscene of Epilogue
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Epilogue7(windowWidth, windowHeight, smileImage);
    }
  }
}
