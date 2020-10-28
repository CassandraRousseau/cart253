class Petal {
  //Creating the soccer balls
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;
    this.vx = 2;
    this.vy = 4;
    this.speed = 8;
    this.angle = 30;
    this.image = undefined;
  }
  preload() {}
  //Setting balls movements
  move() {
    let vx = this.speed * cos(this.angle);
    let vy = this.speed * sin(this.angle);
    this.x += this.vx;
    this.y += this.vy;
  }
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
  //Displaying the soccer balls
  display() {}
}
