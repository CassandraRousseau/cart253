class LastChapter3 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, surviveImage) {
    super(w, h, surviveImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = surviveImage;
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
    textSize(170);
    textAlign(CENTER, CENTER);
    text("'THIS IS THE END!!!'", width / 2, height / 2);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new LastLevel();
    }
  }
}
