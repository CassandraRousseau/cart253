class Petal {
  //Creating the petals
  constructor(x, y, vx, vy, speed, angle) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.w = 125;
    this.h = 125;
    this.speed = speed;
    this.angle = angle;
    this.image = undefined;
  }

  //Preloading images of petals
  preload() {
    this.image.preload();
  }

  //Setting petals
  move() {
    let vx = this.speed * cos(this.angle);
    let vy = this.speed * sin(this.angle);
    this.x += this.vx;
    this.y += this.vy;
  }

  //Bringing the petals once they go off the screen
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

  //Displaying the petals
  display() {}
}
