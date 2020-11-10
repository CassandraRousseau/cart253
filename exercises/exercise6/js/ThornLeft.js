class ThornLeft extends Nature {
  //Creating the left side thorn
  constructor(thornImage, mic, alpha) {
    super(thornImage, mic, alpha);
    this.x = 0;
    this.y = 0;
    this.angle = 275;
    this.maxWidth = 700;
    this.maxHeight = 700;
    this.growth = 3;
    this.image = thornImage;
    this.mic = mic;
  }
  //Moving left side thorn
  move() {
    super.move();
    push();
    let scream = mic.getLevel();
    // Check if left side thorn is moving
    if (scream > this.movingThreshold) {
      this.state = "running";
      // left side thorn is  moving
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

  //Displaying the left side thorn
  display() {
    super.display();
    push();
    if (this.state === "running") {
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(this.angle);
      tint(this.alpha);
      image(thornImage, 0, 0, this.w, this.h);
    }

    pop();
  }
}
