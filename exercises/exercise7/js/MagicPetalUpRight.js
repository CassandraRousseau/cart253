class MagicPetalUpRight extends MagicPetal {
  //Creating the magic petal
  constructor(magicPetalUpRightImage, mic, alpha) {
    super(magicPetalUpRightImage, mic, alpha);
    this.x = width;
    this.y = 0;
    this.movingSpeed = 0.25;
    this.image = magicPetalUpRightImage;
    this.mic = mic;
  }

  //Setting the magic petal
  move() {
    super.move();
    push();
    //Setting magic petal movements
    this.x -= this.vx;
    this.y -= this.vy;
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
