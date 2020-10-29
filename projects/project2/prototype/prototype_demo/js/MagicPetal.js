class MagicPetal extends Petal {
  //Creating the magic petal
  constructor(x, y, magicPetalImage) {
    super();
    this.x = x;
    this.y = y;
    this.image = magicPetalImage;
  }

  //Displaying the magic petal
  display() {
    super.display();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
