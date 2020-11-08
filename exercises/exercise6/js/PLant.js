class Plant {
  //Creating the plants
  constructor(x, y, vx, angle) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = 0;
    this.w = 300;
    this.h = 300;
    this.stopSpeed = 0; // How fast the ghost moves when happy
    this.movingSpeed = 25; // How fast the ghost moves when scared
    this.state = "still"; // How does the ghost feel right now?,
    this.movingThreshold = 0.3; // How loud a sound makes the ghost afraid?
    this.angle = angle;
    this.alpha = 255;
    this.image = undefined;
  }

  //Preloading images of plants
  preload() {
    this.image.preload();
  }

  //Setting plants
  move() {
    // Get the current level of sound going into the microphone
    let scream = mic.getLevel();

    // Check if the ghost gets scared
    if (scream > this.movingThreshold) {
      this.state = "running";
      // The ghost should run away to the right
      this.vx = this.movingSpeed;
    }

    // Check if the ghost is happy at the moment
    if (this.state === "still") {
      this.stopSpeed;
    }
    this.x += this.vx;
    this.y += this.vy;
  }

  //Bringing the plants back once they go off the screen
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
  transparency() {
    if (this.x > width) {
      this.alpha = map(this.alpha, 0, width, 255, 0);
    } else if (this.x < 0) {
      this.alpha = map(this.alpha, width, 0, 255, 0);
    }
  }
  //Displaying the plants
  display() {}
}
