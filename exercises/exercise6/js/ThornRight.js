class ThornRight extends Nature {
  //Creating the thorns
  constructor(x, y, thornImage, mic) {
    super(x, y, thornImage, mic);
    this.x = x;
    this.y = y;
    this.angle = 45;
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

    this.x += this.vx;
    this.y += this.vy;

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
    if (this.x > width) {
      this.x = (2 * width) / 3;
    }
  }
  //Changing the opacity in nature elements
  transparency() {
    if (this.state === "running") {
      this.alpha = map(this.alpha, this.x, width, 255, 0);
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
      image(thornImage, 0, 0, this.w, this.h);
    }

    pop();
  }
}
