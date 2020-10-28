class MagicPetal extends Petal {
  //Creating the soccer balls
  constructor(x, y, magicPetalImage) {
    super(x, y, magicPetalImage);
    this.x = x;
    this.y = y;
    this.image = magicPetalImage;
  }
  //Displaying the soccer balls
  display() {
    super.display();
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
