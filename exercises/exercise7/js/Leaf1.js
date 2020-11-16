class Leaf1 extends Plant {
  //Creating the leaves for the first level
  constructor(x, y, vx, vy, speed, angle, leafImage) {
    super(x, y, vx, vy, speed, angle, leafImage);
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.speed = speed;
    this.angle = angle;
    this.image = leafImage;
  }

  //Setting  the leaves for the first level
  move() {
    let vx = this.speed * cos(this.angle);
    let vy = this.speed * sin(this.angle);
    this.x += this.vx;
    this.y += this.vy;
  }

  //Bringing  the leaves for the first level back once they go off the screen
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
  //Displaying t the leaves for the first level
  display() {
    super.display();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
