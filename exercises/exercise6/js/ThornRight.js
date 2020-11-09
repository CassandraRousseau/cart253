class ThornRight extends Nature {
  //Creating the thorns
  constructor(x, y, angle, thornImage, mic) {
    super(x, y, angle, thornImage, mic);
    this.x = x;
    this.y = y;
    this.angle = angle;
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

    this.x += this.vx;
    this.y += this.vy;
    pop();
  }
  growing() {
    push();
    let scream = mic.getLevel();
    if (scream > this.growthThreshold) {
      this.state = "expansion";
      this.w += this.growth;
      this.h += this.growth;
    }
    this.w = constrain(this.w, 0, 500);
    this.h = constrain(this.h, 0, 500);
    pop();
  }

  //Bringing the nature elements back once they go off the screen
  wrap() {
    if (this.x > width) {
      this.x -= width;
    }

    if (this.y > height) {
      this.y -= height;
    }
  }
  //Changing the opacity in nature elements
  transparency() {
    if (this.x > width) {
      this.alpha = map(this.alpha, 0, width, 255, 0);
    }
  }
  //Displaying the thorns
  display() {
    super.display();
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    tint(this.alpha);
    image(thornImage, 0, 0, this.w, this.h);
    pop();
  }
}
