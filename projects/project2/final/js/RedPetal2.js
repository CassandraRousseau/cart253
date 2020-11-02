class RedPetal2 extends Plant {
  //Creating the red petals
  constructor(x, y, vx, vy, speed, angle, redPetalImage) {
    super(x, y, vx, vy, speed, angle, redPetalImage);
    this.x = x;
    this.y = y;
    this.vx = 2;
    this.vy = 2;
    this.speed = 0.75;
    this.angle = angle;
    this.image = redPetalImage;
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
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
