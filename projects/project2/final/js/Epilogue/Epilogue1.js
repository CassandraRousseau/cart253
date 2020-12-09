class Epilogue1 extends State {
  //Creating the first cutscene of Epilogue
  constructor(w, h, catchImage) {
    super(w, h, catchImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = catchImage;
  }

  //Preloading necessary images for the first cutscene of Epilogue
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the first cutscene of Epilogue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the first cutscene of Epilogue
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);

    //Adding how user changes the state
    textSize(55);
    textAlign(CENTER, TOP);
    text("Press Enter", width / 2, 50);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Epilogue
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Epilogue2(windowWidth, windowHeight, hitImage);
    }
  }
}
