class MagicPetalDownRight extends MagicPetal {
  //Creating the magic petal
  constructor(magicPetalDownRightImage, mic, alpha) {
    super(magicPetalDownRightImage, mic, alpha);
    this.x = width;
    this.y = height;
    this.movingSpeed = 0.25;
    this.image = magicPetalDownRightImage;
    this.mic = mic;
  }

  //Setting the magic petal
  move() {
    super.move();
    push();
    // Check if magic petal is  moving based on screams
    if (clapping4) {
      this.state = "running";
      this.vx += this.movingSpeed;
      this.vy += this.movingSpeed;
    } else {
      this.state = "still";
    }
    //Setting when magic petal stops moving
    if (this.x <= width / 2 && this.y <= height / 2) {
      this.vx = this.stop;
      this.vy = this.stop;
      this.x = width / 2;
      this.y = height / 2;
    }
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