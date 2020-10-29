class BadEnding extends State {
  //Creating bad ending screen

  constructor(badEndingImage) {
    super(badEndingImage);
    this.x = 0;
    this.y = 0;
    this.image = badEndingImage;
    this.over = "Game Over";
  }

  //Preloading background image for bad ending
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting bad ending screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying bad ending screen
  display() {
    push();
    image(this.image, this.x, this.y, windowWidth, windowHeight);
    background(this.image);
    textSize(85);
    fill(0);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text(this.over, 10, height / 2, windowWidth, windowHeight);
    push();
    textSize(35);
    text("Press Enter to restart", 10, (2 * height) / 3);
    pop();
    pop();
  }

  //Setting keyPressed action after bad ending screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      location.reload();
    }
  }
}
