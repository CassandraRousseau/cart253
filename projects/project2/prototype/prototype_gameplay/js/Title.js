class Title extends State {
  //Creating the title screen
  constructor(w, h, titleImage) {
    super();
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.image = titleImage;
    this.titleString = "Ephemeral";
  }
  preload() {
    super.preload();
    this.image = loadImage("assets/images/ephemeralTitle.png");
  }
  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }
  //Displaying the title screen
  display() {
    push();
    image(this.image, this.x, this.y, windowWidth, windowHeight);
    background(this.image);
    textSize(105);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Lemonada");
    text(this.titleString, width / 2, height / 2);
    push();
    textSize(35);
    text("Press Enter to start", width / 2, (2 * height) / 3);
    pop();
    pop();
  }
  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();
    if (keyCode === 13) {
      currentState = new Instructions();
    }
  }
}
