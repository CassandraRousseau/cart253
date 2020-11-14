class MagicPetalDownLeft extends MagicPetal {
  //Creating the magic petal
  constructor(magicPetalDownLeftImage, mic, alpha) {
    super(magicPetalDownLeftImage, mic, alpha);
    this.x = 0;
    this.y = height / 2;
    this.movingSpeed = -0.25;
    this.image = magicPetalDownLeftImage;
    this.mic = mic;
  }

  //Setting the magic petal
  move() {
    super.move();
    push();
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
      image(magicPetalDownLeftImage, this.x, this.y, this.w, this.h);
    }
    pop();
  }
}
