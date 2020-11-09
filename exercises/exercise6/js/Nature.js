class Nature {
  //Creating nature elements
  constructor(x, y, angle, mic) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.w = 0;
    this.h = 0;
    this.growth = 1;
    this.growthThresold = 0.1;
    this.movingThreshold = 0.1;
    this.movingSpeed = 15;
    this.state = "still";
    this.angle = angle;
    this.alpha = 255;
    this.image = undefined;
    this.mic = mic;
  }

  //Preloading images of nature elements
  preload() {
    this.image.preload();
  }
  move() {}
  growing() {}
  wrap() {}
  transparency() {}
  //Displaying the nature elements
  display() {}
}
