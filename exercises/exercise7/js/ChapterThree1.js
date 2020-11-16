class ChapterThree1 extends State {
  //Creating the title screen
  constructor(w, h, bunchImage) {
    super(w, h, bunchImage);
    this.name = "ChapterThree1";
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = bunchImage;
  }
  //Preloading necessary images for title screen
  preload() {
    super.preload();
    this.image.preload();
  }
  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the title screen
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

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterThree2(w, h, curiousImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog5.length && state === "ChapterThree1") {
        currentLine = this.dialog5.length - 1;
      }
    }
  }
}
