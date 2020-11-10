class RockRight extends Nature {
  //Creating the right side rock
  constructor(rockImage, mic, alpha) {
    super(rockImage, alpha);
    this.x = (2 * width) / 3;
    this.y = (3 * height) / 4;
    this.maxWidth = 600;
    this.maxHeight = 600;
    this.growthWidth = 6;
    this.growthHeight = 6;
    this.image = rockImage;
    this.mic = mic;
  }
  //Moving right side rock
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
      translate(50, 50);
      tint(255, 255, 255, this.alpha);
      image(rockImage, this.x, this.y, this.w, this.h);
    }

    pop();
  }
}
