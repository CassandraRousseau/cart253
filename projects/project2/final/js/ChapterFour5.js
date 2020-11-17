class ChapterFour5 extends State {
  //Creating the psecond cutscene of Chapter One
  constructor(w, h, sleepImage) {
    super(w, h, sleepImage);
    this.name = "ChapterFour5";
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = sleepImage;
  }

  //Preloading necessary images the second cutscene of Chapter One
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of Chapter One
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Chapter One
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(45);
    fill(0);
    textAlign(CENTER, BOTTOM);
    textFont("Fredericka the Great");
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterFour6(windowWidth, windowHeight, lakeImage);
      currentLine = 0;
    }
  }
}
