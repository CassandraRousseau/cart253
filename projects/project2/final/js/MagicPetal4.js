class MagicPetal4 {
  //Creating the magic petal for level 2
  constructor(magicPetalImage, mic) {
    this.x = width / 2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;
    this.maxWidth = 300;
    this.maxHeight = 300;
    this.state = "still";
    this.image = magicPetalImage;
    this.mic = mic;
    this.active = true;
  }

  //Setting he magic petal for level 2
  move() {
    push();

    // Check if magic petal is  moving based on screams
    if (clapping5) {
      this.state = "running";
    } else {
      this.state = "still";
    }

    //Setting when magic petal stops moving
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }

    //Setting magic petal movements
    this.x += this.vx;
    this.y += this.vy;
    pop();
  }

  //Displaying the magic petal based on screams
  display() {
    push();

    if (this.state === "running") {
      imageMode(CENTER);
      tint(255, 255, 255, this.alpha);
      image(magicPetalImage, this.x, this.y, this.w, this.h);
    }
    pop();
  }
}
