class ChapterOne3 extends State {
  //Creating the third cutscene of Chapter One
  constructor(w, h, mythImage) {
    super(w, h, mythImage);
    this.name = "ChapterOne3";

    this.dialog7 = [
      "A myth tells that five magic petals exist in this forest",
      "These five magic petals can cure any disease or curse!",
      "You have to collect these five petals and meet the mage of the forest in order that the magic operates.",
      "Press Enter",
      "I cannot help you to find the petals but I can tell you that the mage lives in the castle at the top of the mountain right here.",
      "I wish you the best luck to find these precious artifacts!",
      "And it was a this moment that the little girl started her perilous journey...",
    ];

    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = mythImage;
  }

  //Preloading necessary images for the third cutscene of Chapter One
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the third cutscene of Chapter One
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the third cutscene of Chapter One
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    textAlign(CENTER, BOTTOM);

    let dialog = this.dialog7[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
  }

  //Setting keyPressed action after the third cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterOne4(windowWidth, windowHeight, pathImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog7.length && state === "ChapterOne3") {
        currentLine = this.dialog7.length - 1;
      }
    }
  }
}
