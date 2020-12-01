class Cave extends Nature {
  //Creating the cave for level2
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

  //Moving the cave in level2
  move() {
    super.move();

    push();

    //Setting cave movements based on screams
    if (screaming) {
      this.state = "running";
    } else {
      this.state = "still";
    }

    //Setting when cave stops moving
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }

    //Setting cave movements
    this.x += this.vx;
    this.y += this.vy;

    pop();
  }

  //Displaying cave background based on screams
  display() {
    super.display();

    if (this.state === "running") {
      imageMode(CENTER);
      tint(255, 255, 255, this.alpha);
      image(caveImage, this.x, this.y, this.w, this.h);
    }
  }
}
