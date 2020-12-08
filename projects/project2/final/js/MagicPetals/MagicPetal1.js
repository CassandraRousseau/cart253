class MagicPetal1 extends Plant {
  //Creating the magic petal for level 1
  constructor(x, y, vx, vy, speed, angle, magicPetalImage) {
    super(x, y, vx, vy, speed, angle, magicPetalImage);
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.speed = speed;
    this.angle = angle;
    this.image = magicPetalImage;
    this.active = true;
  }

  //Displaying the magic petal for level 1
  display() {
    super.display();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
