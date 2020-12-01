class ChapterFour3 extends State {
  //Creating the psecond cutscene of Chapter One
  constructor(w, h, monsterImage) {
    super(w, h, monsterImage);
    this.name = "ChapterFour3";
    this.dialog12 = ["She will become..", "A monster..."];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = monsterImage;
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

    let dialog = this.dialog12[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterFour4();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog12.length && state === "ChapterFour3") {
        currentLine = this.dialog12.length - 1;
      }
    }
  }
}
