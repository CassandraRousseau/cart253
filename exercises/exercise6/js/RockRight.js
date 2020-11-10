class RockRight extends Nature {
  //Creating the right side rock
  constructor(rockImage, mic, alpha) {
    super(rockImage, alpha);
    this.x = (2 * width) / 3;
    this.y = (3 * height) / 4;
    this.image = rockImage;
    this.mic = mic;
  }
  //Moving right side rock
  move() {
    super.move();
    push();
    let scream = mic.getLevel();
    // Check if right side rock is  moving
    if (scream > this.movingThreshold) {
      this.state = "running";
      // Right side rock is moving
      this.vx = this.movingSpeed;
    }
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }
    this.x += this.vx;
    this.y += this.vy;
    this.x = constrain(this.vx, this.x, width);
    pop();
  }

  //Displaying the right side rock
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
