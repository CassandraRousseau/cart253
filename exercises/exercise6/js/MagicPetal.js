class MagicPetal {
  //Creating the magic petal
  constructor(x, y, magicPetalImage) {
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
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
    image(magicPetalImage, this.x, this.y, this.w, this.h);
    pop();
  }
}
