class Nature {
  //Creating nature elements
  constructor(x, y, angle, mic, alpha) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.w = 0;
    this.h = 0;
    this.minWidth = 0;
    this.maxWidth = 700;
    this.minHeight = 0;
    this.maxHeight = 700;
    this.growth = 1;
    this.growthThresold = 0.1;
    this.movingThreshold = 0.1;
    this.movingSpeed = 15;
    this.state = "still";
    this.angle = angle;
    this.alpha = alpha;
    this.minAlpha = 0;
    this.maxAlpha = 255;
    this.image = undefined;
    this.mic = mic;
  }

  //Preloading images of nature elements
  preload() {
    this.image.preload();
  }
  //Moving the nature elements
  move() {}
  //Making nature elements bigger
  growing() {
    push();
    if (this.state === "running") {
      this.w += this.growth;
      this.h += this.growth;
    }
    this.w = constrain(this.w, this.minWidth, this.maxWidth);
    this.h = constrain(this.h, this.minHeight, this.maxHeight);
    pop();
  }
  //Making elements back to the screen once they goes off the screen
  wrap() {}
  //Changing the opacity of thorn
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
