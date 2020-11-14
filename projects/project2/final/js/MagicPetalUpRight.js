class MagicPetalUpRight extends MagicPetal {
  //Creating the magic petal
  constructor(magicPetalUpRightImage, mic,alpha) {
    super(magicPetalUpRightImage, mic,alpha);
    this.x = width;
    this.y = 0;

    this.image = magicPetalUpRightImage;
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
    if () {
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
      image(magicPetalUpRightImage, this.x, this.y, this.w, this.h);
    }
    pop();
  }
}
