class ThornLeft extends Nature {
  //Creating the left side thorn
  constructor(thornImage, mic, alpha) {
    super(thornImage, mic, alpha);
    this.x = 0;
    this.y = 0;
    this.angle = 275;
    this.maxWidth = 700;
    this.maxHeight = 700;
    this.growthWidth = 6;
    this.growthHeight = 6;
    this.image = thornImage;
    this.mic = mic;
  }

  //Moving left side thorn
  move() {
    super.move();
    push();

    // Check if left side thorn is  moving based on the screams
    if (screaming) {
      this.state = "running";
      this.vx = this.movingSpeed;
    } else {
      this.state = "still";
    }

    //Setting when left side thorn stops moving
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }

    //Setting left side thorn movements
    this.x -= this.vx;
    this.y -= this.vy;

    //Setting where left side thorn stops moving
    this.x = constrain(this.vx, this.x, width);
    pop();
  }

  //Displaying the left side thorn based on screams
  display() {
    super.display();
    push();
    if (this.state === "running") {
      imageMode(CENTER);
      translate(this.x, this.y);
      rotate(this.angle);
      tint(255, 255, 255, this.alpha);
      image(thornImage, 0, 0, this.w, this.h);
    }

    pop();
  }
}
