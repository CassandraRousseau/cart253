class Rock extends Nature {
  //Creating the rocks
  constructor(x, y, rockImage, mic) {
    super(x, y, rockImage);
    this.x = x;
    this.y = y;
    this.image = rockImage;
    this.mic = mic;
  }
  move() {
    let scream = mic.getLevel();
    // Check if elements are moving
    if (scream > this.movingThreshold) {
      this.state = "running";
      // Elements are moving to the right
      this.vx += this.movingSpeed;
    }

    this.x += this.vx;
    this.y += this.vy;
  }
  growing() {
    let scream = mic.getLevel();
    if (scream > this.growthThreshold) {
      this.state = "expansion";
      this.w += this.growth;
      this.h += this.growth;
    }
    this.w = constrain(this.w, 0, 500);
    this.h = constrain(this.h, 0, 500);
  }

  //Bringing the nature elements back once they go off the screen
  wrap() {
    if (this.x > width) {
      this.x = width / 2;
    } else if (this.x < 0) {
      this.x = width / 2;
    }

    if (this.y > height) {
      this.y = height - this.h;
    } else if (this.y < 0) {
      this.y = height - this.h;
    }
  }
  //Changing the opacity in nature elements
  transparency() {
    if (this.x > width) {
      this.alpha = map(this.alpha, 0, width, 255, 0);
    } else if (this.x < 0) {
      this.alpha = map(this.alpha, width, 0, 255, 0);
    }
  }
  //Displaying the rocks
  display() {
    super.display();
    push();
    imageMode(CENTER);
    tint(this.alpha);
    image(rockImage, this.x, height - this.h, this.w, this.h);
    pop();
  }
}
