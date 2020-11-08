class Thorn extends Plant {
  //Creating the red petals
  constructor(x, y, vx, angle, thornImage) {
    super(x, y, vx, angle, thornImage);
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.angle = angle;
    this.image = thornImage;
  }

  //Displaying the red petals
  display() {
    super.display();
    push();
    rotate(this.angle);
    tint();
    image(this.image, 0, 0, this.w, this.h, this.alpha);
    pop();
  }
}
