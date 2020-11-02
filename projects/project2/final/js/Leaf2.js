class Leaf2 extends Plant {
  //Creating the red petals
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
  //Displaying the red petals
  display() {
    super.display();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
