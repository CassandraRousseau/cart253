class Epilogue2 extends State {
  //Creating the second cutscene of Epilogue
  constructor(w, h, hitImage) {
    super(w, h, hitImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = hitImage;
  }

  //Preloading necessary images for the second cutscene of Epilogue
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of Epilogue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Epilogue
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);

    //Adding how user changes the state
    textSize(60);
    textAlign(CENTER, CENTER);
    text("Press Enter", width / 2, (7 * height) / 8);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Epilogue
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Epilogue3(windowWidth, windowHeight, unconsciousImage);
    }
  }
}
