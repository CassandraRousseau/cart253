class MagicPetal extends Nature {
  //Creating the magic petal
  constructor(magicPetalImage, mic) {
    super(magicPetalImage, mic);
    this.x = width / 2;
    this.y = height / 2;
    this.maxWidth = 300;
    this.maxHeight = 300;
    this.growth = 2;
    this.image = magicPetalImage;
    this.mic = mic;
  }
  //Setting the magic petal
  move() {
    super.move();
    push();
    // Check if magic petal is  moving
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

  //Displaying the magic petal
  display() {
    super.display();
    push();
    if (this.state === "running") {
      imageMode(CENTER);
      tint(255, 255, 255, this.alpha);
      image(magicPetalImage, this.x, this.y, this.w, this.h);
    }
    pop();
  }
}
