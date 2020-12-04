class Prologue2 extends State {
  //Creating the second cutscene of Prologue
  constructor(w, h, girlImage) {
    super(w, h, girlImage);
    this.name = "Prologue2";

    this.dialog2 = [
      "A little girl... different from other children.",
      "This little girl was cursed",
      "Press Enter",
    ];

    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = girlImage;
  }

  //Preloading necessary images for the second cutscene of Prologue
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of Prologue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Prologue
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    textAlign(CENTER, TOP);

    let dialog = this.dialog2[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Prologue
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Prologue3(windowWidth, windowHeight, zoomImage);
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog2.length && state === "Prologue2") {
        currentLine = this.dialog2.length - 1;
      }
    }
  }
}
