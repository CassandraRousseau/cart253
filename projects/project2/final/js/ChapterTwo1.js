class ChapterTwo1 extends State {
  //Creating the title screen
  constructor(w, h, lookingImage) {
    super(w, h, lookingImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = lookingImage;
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
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterTwo2();
      currentLine = 0;
    }
  }
}
