class Rock extends Plant {
  //Creating the red petals
  constructor(x, y, vx, angle, rockImage) {
    super(x, y, vx, angle, rockImage);
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.angle = angle;
    this.image = rockImage;
  }

  //Displaying the red petals
  display() {
    super.display();
    push();
    rotate(this.angle);
    image(this.image, this.x, this.y, this.w, this.h, this.alpha);
    pop();
  }
}
