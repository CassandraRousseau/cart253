class MagicPetal {
  //Creating nature elements
  constructor(x, y, angle, mic, alpha) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.w = 300;
    this.h = 300;
    this.movingSpeed = 0.25;
    this.state = "still";
    this.angle = angle;
    this.alpha = alpha;
    this.minAlpha = 0;
    this.maxAlpha = 255;
    this.image = undefined;
    this.mic = mic;
    this.active = true;
  }

  //Preloading images of nature elements
  preload() {
    this.image.preload();
  }

  //Moving the nature elements
  move() {}

  //Changing the opacity of nature elements based on screams
  transparency() {
    push();
    this.alpha = map(
      this.h,
      this.minHeight,
      this.maxHeight,
      this.minAlpha,
      this.maxAlpha
    );
    this.alpha = map(
      this.w,
      this.minWidth,
      this.maxWidth,
      this.minAlpha,
      this.maxAlpha
    );
    pop();
  }

  //Displaying the nature elements
  display() {}
}
