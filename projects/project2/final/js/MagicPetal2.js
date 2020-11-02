class MagicPetal2 {
  //Creating the magic petal
  constructor(x, y, vx, vy, speed, magicPetalImage) {
    this.x = x;
    this.y = y;
    this.w = 125;
    this.h = 125;
    this.vx = vx;
    this.vy = vy;
    this.speed = speed;
    this.image = magicPetalImage;
    this.active = true;
  }
  //Preloading images of thee magic petal
  preload() {
    this.image.preload();
  }
  //Setting the magic petal
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  //Displaying the magic petal
  display() {
    push();
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
