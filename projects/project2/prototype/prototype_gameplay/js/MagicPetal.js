class MagicPetal extends Petal {
  //Creating the soccer balls
  constructor(x, y, magicPetalImage) {
    super();
    this.x = x;
    this.y = y;
    this.image = magicPetalImage;
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
