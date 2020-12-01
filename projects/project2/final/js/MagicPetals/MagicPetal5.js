class MagicPetal5 {
  //Creating the magic petal for level 3
  constructor(x, y, magicPetalImage) {
    this.x = x;
    this.y = y;
    this.w = 25;
    this.h = 25;
    this.vx = 0;
    this.vy = 0;
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
    imageMode(CENTER);
    image(magicPetalImage, this.x, this.y, this.w, this.h);
    pop();
  }
}