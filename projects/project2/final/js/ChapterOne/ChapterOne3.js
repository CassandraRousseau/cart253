class ChapterOne3 extends State {
  //Creating the third cutscene of Chapter One
  constructor(w, h, mythImage) {
    super(w, h, mythImage);

    //Naming state
    this.name = "ChapterOne3";

    //Creating third cutscene dialog of Chapter One
    this.dialog7 = [
      "'A myth tells that five magic petals exist in the forest'",
      "'These five magic petals can cure any disease or curse!'",
      "'You have to collect these five petals and meet the mage of the forest to make the magic operates.'",
      "Press Enter",
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

    //Displaying third cutscene dialog of Chapter One
    let dialog = this.dialog7[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
  }

  //Setting keyPressed action after the third cutscene of Chapter One
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterOne4(windowWidth, windowHeight, pathImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog7.length && state === "ChapterOne3") {
        currentLine = this.dialog7.length - 1;
      }
    }
  }
}
