class RockLeft extends Nature {
  //Creating the left side rock
  constructor(rockImage, mic, alpha) {
    super(rockImage, alpha);
    this.x = width / 3;
    this.y = (3 * height) / 4;
    this.maxWidth = 600;
    this.maxHeight = 600;
    this.growth = 6;
    this.image = rockImage;
    this.mic = mic;
  }
  //Moving left side rock
  move() {
    super.move();
    push();
    // Check if magic petal is  moving
    if (screaming) {
      this.state = "running";
      this.vx = this.movingSpeed;
    } else {
      this.state = "still";
    }

    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }
    this.x -= this.vx;
    this.y -= this.vy;
    pop();
  }

  //Displaying the left side rock
  display() {
    super.display();
    push();
    if (this.state === "running") {
      imageMode(CENTER);
      translate(-50, 50);
      tint(255, 255, 255, this.alpha);
      image(rockImage, this.x, this.y, this.w, this.h);
    }

    pop();
  }
}
