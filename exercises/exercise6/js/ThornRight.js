class ThornRight extends Nature {
  //Creating the right side thorn
  constructor(x, y, thornImage, mic, alpha) {
    super(x, y, thornImage, mic, alpha);
    this.x = x;
    this.y = y;
    this.angle = 45;
    this.image = thornImage;
    this.mic = mic;
  }
  //Moving right side thorn
  move() {
    super.move();
    push();
    let scream = mic.getLevel();
    // Check if rigth side thorn is moving
    if (scream > this.movingThreshold) {
      this.state = "running";
      // Right side thorn is moving
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

  //Displaying the right side thorn
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
