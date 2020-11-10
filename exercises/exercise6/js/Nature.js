class Nature {
  //Creating nature elements
  constructor(x, y, angle, growth, mic, alpha, maxWidth, maxHeight) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.w = 0;
    this.h = 0;
    this.minWidth = 0;
    this.maxWidth = maxWidth;
    this.minHeight = 0;
    this.maxHeight = maxHeight;
    this.growth = growth;
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
