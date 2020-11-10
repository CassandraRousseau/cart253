class MagicPetal extends Nature {
  //Creating the magic petal
  constructor(x, y, magicPetalImage, mic) {
    super(x, y, magicPetalImage, mic);
    this.x = width / 2;
    this.y = height / 2;
    this.image = magicPetalImage;
    this.mic = mic;
    this.active = true;
  }
  //Setting the magic petal
  move() {
    super.move();
    let scream = mic.getLevel();
    // Check if right side rock is  moving
    if (scream > this.movingThreshold) {
      this.state = "running";
      // Right side rock is moving
      this.x += this.vx;
      this.y += this.vy;
    }
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }
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
