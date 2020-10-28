class Petal {
  //Creating the soccer balls
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 250;
    this.h = 250;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.speed = 10;
    this.angle = 45;
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
