class Cave {
  //Creating nature elements
  constructor(w, h, caveImage, mic) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = w;
    this.h = h;
    this.opacityThresold = 0.1;
    this.state = "still";
    this.alpha = alpha;
    this.minAlpha = 0;
    this.maxAlpha = 255;
    this.image = caveImage;
    this.mic = mic;
  }
  //Preloading images of nature elements
  preload() {
    this.image.preload();
  }

  //Changing the opacity of thorn
  transparency(framecountSim, timerResult) {
    push();
    let scream = mic.getLevel();
    // Check if right side rock is  moving
    if (scream > this.opacityThreshold) {
      this.state = "running";
      // Right side rock is moving
      this.alpha = map(
        this.alpha,
        framecountSim,
        timerResult,
        this.minAlpha,
        this.maxAlpha
      );
    }

    pop();
  }
  //Displaying sky background
  display() {
    if (this.state === "running") {
      imageMode(CENTER);
      tint(this.alpha);
      image(caveImage, this.x, this.y, this.w, this.h);
    }
  }
}
