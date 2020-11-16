class ChapterOne3 extends State {
  //Creating the title screen
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
    textSize(115);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    text(this.dialog7, width / 2, height / 2);
  }

  //Setting keyPressed action after title screen
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
