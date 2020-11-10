class MagicPetal extends Nature {
  //Creating the magic petal
  constructor(magicPetalImage, mic) {
    super(magicPetalImage, mic);
    this.x = width / 2;
    this.y = height / 2;
    this.image = magicPetalImage;
    this.mic = mic;
  }
  //Setting the magic petal
  move() {
    super.move();
    let scream = mic.getLevel();
    // Check if magic petal is  moving
    if (scream > this.movingThreshold) {
      this.state = "running";
    }
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }
    this.x += this.vx;
    this.y += this.vy;
  }

  //Displaying the magic petal
  display() {
    super.display();
    push();
    if (this.state === "running") {
      imageMode(CENTER);
      tint(this.alpha);
      image(magicPetalImage, this.x, this.y, this.w, this.h);
    }
    pop();
  }
}
