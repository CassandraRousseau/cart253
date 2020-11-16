class Prologue3 extends State {
  //Creating the title screen

  constructor(w, h, zoomImage) {
    super(w, h, zoomImage);
    this.name = "Prologue3";
    this.dialog3 = [
      "A rose replaced her heart.",
      "If her rose dies...",
      "Press Enter",
    ];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = zoomImage;
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
    textAlign(CENTER, BOTTOM);
    textFont("Fredericka the Great");
    let dialog = this.dialog3[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Prologue4();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog3.length && state === "Prologue3") {
        currentLine = this.dialog3.length - 1;
      }
    }
  }
}
