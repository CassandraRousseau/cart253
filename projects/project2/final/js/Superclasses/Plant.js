class Plant {
  //Creating the plants (leaves, red petals and magic petal) for level 1
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

  //Preloading images of leaves, red petals and magic petal
  preload() {
    this.image.preload();
  }

  //Setting the elements(leaves, red petals and magic petal) for the first level
  move() {
    //Creating a wind effect for elements movements
    let vx = this.speed * cos(this.angle);

    let vy = this.speed * sin(this.angle);

    this.x += this.vx;
    this.y += this.vy;
  }
  //Bringing the elements (leaves, red petals and magic petal) of the first level back once they go off the screen
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
  //Displaying the elements (leaves, red petals and magic petal) for level 1
  display() {}
}
