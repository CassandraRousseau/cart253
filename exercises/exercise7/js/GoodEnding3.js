class GoodEnding3 extends State {
  //Creating third good ending screen
  constructor(w, h, goodEndingImage) {
    super(w, h, goodEndingImage);
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.image = goodEndingImage;
    this.goodJob = "Good Job!\nYou found the third magic petal!";
  }

  //Preloading background image for third good ending
  preload() {
    this.image.preload();
  }

  //Setting third good ending screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying third good ending screen
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(55);
    fill(0);
    textFont("Fredericka the Great");
    textAlign(LEFT, TOP);
    text(this.goodJob, 10, 50, windowWidth, windowHeight);

    push();
    textSize(35);
    text("Press Enter", width / 2, (2 * height) / 3);
    pop();
    pop();
  }

  //Setting keyPressed after third good ending screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      location.reload();
    }
  }
}
