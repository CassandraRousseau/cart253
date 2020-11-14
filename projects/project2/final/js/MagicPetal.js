class MagicPetal {
  //Creating nature elements
  constructor(x, y, mic, alpha, movingSpeed) {
    this.x = x;
    this.y = y;
    this.w = 300;
    this.h = 300;
    this.vx = 0;
    this.vy = 0;
    this.movingSpeed = movingSpeed;
    this.stop = 0;
    this.state = "still";
    this.alpha = alpha;
    this.minAlpha = 0;
    this.maxAlpha = 200;
    this.image = undefined;
    this.mic = mic;
    this.active = true;
  }

  //Preloading images of nature elements
  preload() {
    this.image.preload();
  }

  //Moving the nature elements
  move() {
    push();
    // Check if magic petal is  moving based on screams
    if (screaming) {
      this.state = "running";
      this.vx += this.movingSpeed;
      this.vy += this.movingSpeed;
    } else {
      this.state = "still";
    }

    //Setting when magic petal stops moving
    if (this.x === width / 2 && this.y === height / 2) {
      this.vx = this.stop;
      this.vy = this.stop;
    }
    pop();
  }

  //Changing the opacity of nature elements based on screams
  transparency() {
    push();
    if (state === "running") {
      this.alpha = map(
        this.vx,
        this.x,
        this.stop,
        this.minAlpha,
        this.maxAlpha
      );
      this.alpha = map(
        this.vy,
        this.y,
        this.stop,
        this.minAlpha,
        this.maxAlpha
      );
    }

    pop();
  }

  //Displaying the nature elements
  display() {}
}
