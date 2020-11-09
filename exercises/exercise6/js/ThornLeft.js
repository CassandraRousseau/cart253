class ThornLeft extends Nature {
  //Creating the thorns
  constructor(thornImage, mic) {
    super(thornImage, mic);
    this.x = 0;
    this.y = 0;
    this.angle = 275;
    this.image = thornImage;
    this.mic = mic;
  }
  //Setting plants
  move() {
    push();
    let scream = mic.getLevel();
    // Check if elements are moving
    if (scream > this.movingThreshold) {
      this.state = "running";
      // Elements are moving to the right
      this.vx = this.movingSpeed;
    }
    if (this.w === 700 && this.h === 700) {
      this.vx = 0;
    }

    this.x -= this.vx;
    this.y -= this.vy;

    pop();
  }
  growing() {
    push();
    if (this.state === "running") {
      this.w += this.growth;
      this.h += this.growth;
    }
    this.w = constrain(this.w, 0, 700);
    this.h = constrain(this.h, 0, 700);
    pop();
  }

  //Bringing the nature elements back once they go off the screen
  wrap() {
    if (this.x < 0) {
      this.x = width / 3;
    }
  }
  //Changing the opacity in nature elements
  transparency() {
    if (this.state === "running") {
      this.alpha = map(this.alpha, this.x, 0, 255, 0);
    }
  }
  //Displaying the thorns
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
