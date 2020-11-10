class Cave {
  //Creating nature elements
  constructor(caveImage, mic) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 0;
    this.h = 0;
    this.minWidth = 0;
    this.maxWidth = windowWidth;
    this.minHeight = 0;
    this.maxHeight = windowHeight;
    this.vx = 0;
    this.vy = 0;
    this.growth = 10;
    this.movingThreshold = 0.1;
    this.state = "still";
    this.alpha = alpha;
    this.minAlpha = 0;
    this.maxAlpha = 255;
    this.image = caveImage;
    this.mic = mic;
    this.active = true;
  }
  //Preloading images of nature elements
  preload() {
    this.image.preload();
  }
  //Setting the magic petal
  move() {
    let scream = mic.getLevel();
    // Check if magic petal is  moving
    if (scream > this.movingThreshold) {
      this.state = "running";
    }
    if (this.w === this.maxWidth && this.h === this.maxHeight) {
      this.vx = 0;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
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
  //Displaying sky background
  display() {
    if (this.state === "running") {
      imageMode(CENTER);
      tint(255, 255, 255, this.alpha);
      image(caveImage, this.x, this.y, this.w, this.h);
    }
  }
}
