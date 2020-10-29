class RedPetal extends Petal {
  //Creating the red petals
  constructor(x, y, petalImage) {
    super(x, y, petalImage);
    this.x = x;
    this.y = y;
    this.image = petalImage;
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
