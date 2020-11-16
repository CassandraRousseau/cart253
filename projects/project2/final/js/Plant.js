class Plant {
  //Creating the plants for level 1
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

  //Preloading images of plants
  preload() {
    this.image.preload();
  }

  //Displaying the plants for level 1
  display() {}
}
