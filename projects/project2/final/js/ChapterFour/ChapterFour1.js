class ChapterFour1 extends State {
  //Creating the psecond cutscene of Chapter One
  constructor(w, h, visitImage) {
    super(w, h, visitImage);
    this.name = "ChapterFour1";
    this.dialog10 = [
      "'Doctor, what kind of disease our baby has?'",
      "'Unfortunately..'",
      "'The poor child is not ill...'",
      "'She is cursed...'",
      "'Cursed?!?!'",
    ];

    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = visitImage;
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
    textSize(60);
    textAlign(CENTER, TOP);

    let dialog = this.dialog10[currentLine];
    text(dialog, 0, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterFour2(windowWidth, windowHeight, doctorImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog10.length && state === "ChapterFour1") {
        currentLine = this.dialog10.length - 1;
      }
    }
  }
}
