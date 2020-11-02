class MagicPetal {
  //Creating the magic petal
  constructor(x, y, vx, vy, speed, angle, magicPetalImage) {
    this.x = x;
    this.y = y;
    this.w = 125;
    this.h = 125;
    this.vx = vx;
    this.vy = vy;
    this.speed = speed;
    this.angle = angle;
    this.image = magicPetalImage;
    this.active = true;
  }
  //Preloading images of thee magic petal
  preload() {
    this.image.preload();
  }
  //Setting the magic petal
  move() {
    let vx = this.speed * cos(this.angle);
    let vy = this.speed * sin(this.angle);
    this.x += this.vx;
    this.y += this.vy;
  }
  //Bringing the petal back once it goes off the screen
  wrap() {
    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    }

    if (this.y > height) {
      this.y -= height;
    } else if (this.y < 0) {
      this.y += height;
    }
  }
  //Displaying the magic petal
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
