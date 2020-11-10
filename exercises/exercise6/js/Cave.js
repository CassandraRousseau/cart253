class Cave extends Nature {
  //Creating nature elements
  constructor(caveImage, mic) {
    super(caveImage, mic);
    this.x = width / 2;
    this.y = height / 2;
    this.maxWidth = windowWidth;
    this.maxHeight = windowHeight;
    this.growthWidth = 15;
    this.growthHeight = 10;
    this.image = caveImage;
    this.mic = mic;
  }

  //Setting the magic petal
  move() {
    super.move();
    push();
    if (screaming) {
      this.state = "running";
    } else {
      this.state = "still";
    }
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }
    this.x += this.vx;
    this.y += this.vy;
    pop();
  }

  //Displaying sky background
  display() {
    super.display();
    if (this.state === "running") {
      imageMode(CENTER);
      tint(255, 255, 255, this.alpha);
      image(caveImage, this.x, this.y, this.w, this.h);
    }
  }
}
