class MagicPetal {
  //Creating the pieces of magic petal in level 4 superclass
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
  }

  //Preloading images for the pieces of magic petal in level 4 superclass
  preload() {
    this.image.preload();
  }

  //Moving the pieces of magic petal in level 4 superclass
  move() {}

  //Changing the opacity  for the pieces of magic petal in level 4 superclass
  transparency() {
    push();
    this.alpha = map(this.vx, this.x, this.stop, this.minAlpha, this.maxAlpha);
    this.alpha = map(this.vy, this.y, this.stop, this.minAlpha, this.maxAlpha);

    pop();
  }

  //Displaying the pieces of magic petal in level 4 superclass
  display() {}
}
