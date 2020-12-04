class ChapterOne5 extends State {
  //Creating the fifth cutscene of Chapter One
  constructor(w, h, beginningImage) {
    super(w, h, beginningImage);
    this.name = "ChapterOne5";

    this.dialog9 = [
      "And it was a this moment that the little girl started her perilous journey...",
      "Press Enter",
    ];

    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = beginningImage;
  }

  //Preloading necessary images for the fifth cutscene of Chapter One
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the fifth cutscene of Chapter One
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the fifth cutscene of Chapter One
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    textAlign(CENTER, TOP);

    let dialog = this.dialog9[currentLine];
    text(dialog, 0, 125, windowWidth, windowHeight);
  }

  //Setting keyPressed action after the fifth cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Instructions1();
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog9.length && state === "ChapterOne5") {
        currentLine = this.dialog9.length - 1;
      }
    }
  }
}
