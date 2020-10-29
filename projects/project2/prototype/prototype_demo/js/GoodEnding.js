class GoodEnding extends State {
  //Creating good ending screen
  constructor(w, h, goodEndingImage) {
    super(goodEndingImage);
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.image = goodEndingImage;
    this.goodJob = "Good Job!\nYou found the first magic petal!";
  }

  //Preloading background image for good ending
  preload() {
    this.image.preload();
  }

  //Setting good ending screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying good ending screen
  display() {
    push();
    image(this.image, this.x, this.y, windowWidth, windowHeight);
    background(this.image);
    textSize(55);
    fill(0);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text(this.goodJob, 10, 50, windowWidth, windowHeight);
    push();
    textSize(35);
    text("Press Enter to restart", width / 2, (2 * height) / 3);
    pop();
    pop();
  }

  //Setting keyPressed after good ending screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      location.reload();
    }
  }
}
