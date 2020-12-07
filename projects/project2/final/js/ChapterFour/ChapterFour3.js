class ChapterFour3 extends State {
  //Creating the third cutscene of Chapter Four
  constructor(w, h, monsterImage) {
    super(w, h, monsterImage);
    this.name = "ChapterFour3";
    this.dialog12 = ["'She will become..'", "'A monster...'", "Press Enter"];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = monsterImage;
  }

  //Preloading necessary images the third cutscene of Chapter Four
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the third cutscene of Chapter Four
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the third cutscene of Chapter Four
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    textAlign(RIGHT, BOTTOM);

    let dialog = this.dialog12[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the third cutscene of Chapter Four
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterFour4();
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog12.length && state === "ChapterFour3") {
        currentLine = this.dialog12.length - 1;
      }
    }
  }
}
