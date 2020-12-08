class ThornRight extends Nature {
  //Creating the right side thorn for the second level
  constructor(thornImage, mic, alpha) {
    super(thornImage, mic, alpha);

    this.x = undefined;
    this.y = height / 2;
    this.angle = 45;
    this.maxWidth = 700;
    this.maxHeight = 700;
    this.growthWidth = 6;
    this.growthHeight = 6;
    this.image = thornImage;
    this.mic = mic;
  }

  //Moving right side thorn for the second level
  move() {
    super.move();
    push();

    // Check if right side thorn is  moving based on screams
    //**Assistance from TA Samuel to create movements based on screams and how to make elements stops
    // if the user is not screaming**
    if (screaming) {
      this.state = "running";
      this.vx += this.movingSpeed;
    } else {
      this.state = "still";
    }

    //Setting when right side thorn stops moving
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }

    //Setting where right side thorn stops moving
    this.x = constrain(this.vx, width / 2, width);

    //Setting right side thorn movements
    this.x += this.vx;

    pop();
  }

  //Displaying the right side thorn based on screams
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
