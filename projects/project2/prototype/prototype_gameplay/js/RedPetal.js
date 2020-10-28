class RedPetal extends Petal {
  //Creating the soccer balls
  constructor(x, y, petalImage) {
    super(x, y, petalImage);
    this.x = x;
    this.y = y;
    this.image = petalImage;
  }
  //Displaying the soccer balls
  display() {
    super.display();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
