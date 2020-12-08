class RedPetal2 extends Heap {
  //Creating the red petals for the third level
  constructor(x, y, angle, redPetalImage) {
    super(x, y, angle, redPetalImage);
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.image = redPetalImage;
  }

  //Displaying the red petals for the third level
  display() {
    super.display();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
