class RockLeft extends Nature {
  //Creating the left side rock for the second level
  constructor(rockImage, mic, alpha) {
    super(rockImage, alpha);

    this.x = undefined;
    this.y = undefined;
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
    //**Assistance from TA Samuel to create movements based on screams and how to make elements stops
    // if the user is not screaming**
    if (screaming) {
      this.state = "running";
      this.vx += this.movingSpeed;
      this.vy += this.movingSpeed;
    } else {
      this.state = "still";
    }

    //Setting when left side rock stops moving
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
      this.vy = 0;
    }

    //Setting where left side rock stops moving
    this.x = constrain(this.vx, width / 2, width / 3);
    this.y = constrain(this.vy, height / 2, (3 * height) / 4);
    //Setting left side rock movements
    this.x -= this.vx;
    this.y += this.vy;
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
