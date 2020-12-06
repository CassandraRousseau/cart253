class DeathEnding extends State {
  //Creating death ending screen
  constructor(w, h, deathImage) {
    super(w, h, deathImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = deathImage;
    this.over = "Game Over";
  }

  //Preloading background image for death ending
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting death ending screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying death ending screen
  display() {
    push();
    image(this.image, this.x, this.y, this.width, this.height);
    textSize(85);
    text(this.over, width / 12, (4 * height) / 6, windowWidth, windowHeight);
    push();
    textSize(55);
    text("Press Enter to restart", width / 12, (6 * height) / 7);
    pop();
    pop();
  }

  //Setting keyPressed action after death ending screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      location.reload();
    }
  }
}
