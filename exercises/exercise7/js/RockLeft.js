class RockLeft extends Nature {
  //Creating the left side rock for the second level
  constructor(rockImage, mic, alpha) {
    super(rockImage, alpha);
    this.x = width / 3;
    this.y = (3 * height) / 4;
    this.maxWidth = 600;
    this.maxHeight = 600;
    this.growthWidth = 6;
    this.growthHeight = 6;
    this.image = rockImage;
    this.mic = mic;
  }

  //Moving left side rock for the second level
  move() {
    super.move();

    push();
    // Check if left side rock is moving based on screams
    if (screaming) {
      this.state = "running";
      this.vx = this.movingSpeed;
    } else {
      this.state = "still";
    }

    //Setting when left side rock stops moving
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }

    //Setting left side rock movements
    this.x -= this.vx;
    this.y -= this.vy;

    //Setting where left side rock stops moving
    this.x = constrain(this.vx, this.x, width);
    pop();
  }

  //Displaying the left side rock based on screams
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
