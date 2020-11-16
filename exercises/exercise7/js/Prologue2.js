class Prologue2 extends State {
  //Creating the title screen

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
    textSize(45);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    let dialog = this.dialog2[currentLine];
    text(dialog, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Prologue3(windowWidth, windowHeight, zoomImage);
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog2.length && state === "Prologue2") {
        currentLine = this.dialog2.length - 1;
      }
    }
  }
}
