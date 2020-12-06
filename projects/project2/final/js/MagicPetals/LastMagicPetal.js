class LastMagicPetal {
  //Creating the magic petal for the last level
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

  //Preloading images of the magic petal for the last level
  preload() {
    this.image.preload();
  }

  move() {
    // Choose random velocities within the "speed limit"
    this.vx = random(-this.speed, this.speed);
    this.x += this.vx;
    this.y += this.vy;
  }
  follow(followed) {
    let dx = this.x - followed.x;
    if (this.dx < 0) {
      this.vx = this.speed;
    } else if (dx > 0) {
      this.vx = -this.speed;
    }
  }
  //Displaying the magic petal
  display() {
    push();
    rotate(this.angle);
    image(magicPetalImage, this.x, this.y, this.w, this.h);
    pop();
  }
}
