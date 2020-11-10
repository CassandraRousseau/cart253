class MagicPetal {
  //Creating the magic petal
  constructor(x, y, magicPetalImage) {
    this.x = x;
    this.y = y;
    this.w = 0;
    this.h = 0;
    this.growth = 0.25;
    this.growthThresold = 0.1;
    this.state = "still";
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.image = magicPetalImage;
    this.active = true;
  }
  //Preloading images of the magic petal
  preload() {
    this.image.preload();
  }

  //Setting the magic petal
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  //Growing my magic petal (making it bigger)
  growing() {
    push();
    let scream = mic.getLevel();
    if (scream > this.growthThreshold) {
      this.state = "running";
      this.w += this.growth;
      this.h += this.growth;
    }
    this.w = constrain(this.w, 0, 500);
    this.h = constrain(this.h, 0, 500);
    pop();
  }
  //Displaying the magic petal
  display() {
    push();
    if (this.state === "running") {
      imageMode(CENTER);
      image(magicPetalImage, width / 2, height / 2, this.w, this.h);
    }

    pop();
  }
}
