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

  //Displaying the leaves for the first level
  display() {
    super.display();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
