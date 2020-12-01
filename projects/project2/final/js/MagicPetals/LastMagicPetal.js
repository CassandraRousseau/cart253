class LastMagicPetal {
  //Creating the magic petal for level 3
  constructor(x, y, magicPetalImage) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    this.angle = 180;
    this.image = magicPetalImage;
    this.active = true;
  }

  //Preloading images of the magic petal for level 3
  preload() {
    this.image.preload();
  }

  move() {
    // Choose random velocities within the "speed limit"
    this.vx = random(-this.speed, this.speed);

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
