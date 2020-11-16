class MagicPetalDownRight extends MagicPetal {
  //Creating the magic petal
  constructor(magicPetalDownRightImage, mic, alpha) {
    super(magicPetalDownRightImage, mic, alpha);
    this.x = width;
    this.y = height;
    this.movingSpeed = -0.25;
    this.image = magicPetalDownRightImage;
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
      image(magicPetalDownRightImage, this.x, this.y, this.w, this.h);
    }
    pop();
  }
}
