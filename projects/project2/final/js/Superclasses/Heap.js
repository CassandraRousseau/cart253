class Heap {
  //Creating the heap of leaves and red petals for level 3
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.w = 125;
    this.h = 125;
    this.vx = 2;
    this.vy = 2;
    this.speed = 0.75;
    this.angle = angle;
    this.image = undefined;
  }

  //Preloading images of leaves and red petals
  preload() {
    this.image.preload();
  }

  //Setting the movements of the leaves and red petals for the third level
  move() {
    let dx = this.x - mouseX;

    let dy = this.y - mouseY;

    if (dx < 0) {
      this.vx = -this.speed;
    } else if (dx > 0) {
      this.vx = this.speed;
    }

    if (dy < 0) {
      this.vy = -this.speed;
    } else if (dy > 0) {
      this.vy = this.speed;
    }

    this.x += this.vx;
    this.y += this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
  //Displaying the heap for level 3
  display() {}
}
