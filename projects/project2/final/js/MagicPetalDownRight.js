class MagicPetalDownRight extends MagicPetal {
  //Creating the magic petal
  constructor(magicPetalDownRightImage, mic) {
    super(magicPetalDownRightImage, mic);
    this.x = width;
    this.y = height;
    this.maxWidth = 300;
    this.maxHeight = 300;
    this.growthWidth = 2;
    this.growthHeight = 2;
    this.image = magicPetalDownRightImage;
    this.mic = mic;
  }

  //Setting the magic petal
  move() {
    super.move();
    push();

    // Check if magic petal is  moving based on screams
    if (screaming) {
      this.state = "running";
    } else {
      this.state = "still";
    }

    //Setting when magic petal stops moving
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }

    //Setting magic petal movements
    this.x += this.vx;
    this.y += this.vy;
    pop();
  }

  //Displaying the magic petal based on screams
  display() {
    super.display();
    push();

    if (this.state === "running") {
      imageMode(CENTER);
      tint(255, 255, 255, this.alpha);
      image(magicPetalDownRightImage, this.x, this.y, this.w, this.h);
    }
    pop();
  }
}
