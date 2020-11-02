class RedPetal extends Plant {
  //Creating the red petals
  constructor(x, y, vx, vy, speed, angle, redPetalImage) {
    super(x, y, vx, vy, speed, angle, redPetalImage);
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.speed = speed;
    this.angle = angle;
    this.image = redPetalImage;
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
