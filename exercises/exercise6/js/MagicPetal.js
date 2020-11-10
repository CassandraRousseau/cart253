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
