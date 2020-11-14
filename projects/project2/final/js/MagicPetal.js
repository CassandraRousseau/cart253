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

  //Displaying the nature elements
  display() {}
}
