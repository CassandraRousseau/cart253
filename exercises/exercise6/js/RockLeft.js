class RockLeft extends Nature {
  //Creating the left side rock
  constructor(rockImage, mic, alpha) {
    super(rockImage, alpha);
    this.x = width / 3;
    this.y = (3 * height) / 4;
    this.maxWidth = 600;
    this.maxHeight = 600;
    this.growth = 4;
    this.image = rockImage;
    this.mic = mic;
  }
  //Moving left side rock
  move() {
    super.move();
    push();
    let scream = mic.getLevel();
    // Check if left side rock is moving
    if (scream > this.movingThreshold) {
      this.state = "running";
      // left side rock is moving
      this.vx = this.movingSpeed;
    }
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }
    this.x -= this.vx;
    this.y -= this.vy;
    this.x = constrain(this.vx, this.x, width);
    pop();
  }

  //Displaying the left side rock
  display() {
    super.display();
    push();
    if (this.state === "running") {
      imageMode(CENTER);
      tint(this.alpha);
      image(rockImage, this.x, this.y, this.w, this.h);
    }

    pop();
  }
}
