class Epilogue1 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, catchImage) {
    super(w, h, catchImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = catchImage;
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
    fill(0);
    textSize(45);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    text("Press Enter", width / 2, (5 * height) / 6);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Epilogue2(windowWidth, windowHeight, hitImage);
      currentLine = 0;
    }
  }
}
