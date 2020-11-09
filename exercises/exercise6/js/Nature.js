class Nature {
  //Creating nature elements
  constructor(x, y, angle, mic) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.w = 300;
    this.h = 300;
    this.movingSpeed = 25;
    this.state = "still";
    this.movingThreshold = 0.3;
    this.angle = angle;
    this.alpha = 255;
    this.image = undefined;
    this.mic = mic;
  }

  //Preloading images of nature elements
  preload() {
    this.image.preload();
  }

  //Setting plants
  move() {
    // Get the current level of sound going into the microphone
    let scream = mic.getLevel();
    // Check if elements are moving
    if (scream > this.movingThreshold) {
      this.state = "running";
      // Elements are moving to the right
      this.vx = this.movingSpeed;
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  //Bringing the nature elements back once they go off the screen
  wrap() {
    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    }

    if (this.y > height) {
      this.y -= height;
    } else if (this.y < 0) {
      this.y += height;
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
  //Displaying the nature elements
  display() {}
}
