class MagicPetal3 {
  //Creating the magic petal for level 3
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

  //Preloading images of the magic petal for level 3
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
