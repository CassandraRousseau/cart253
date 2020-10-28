class RedPetal extends Petal {
  //Creating the soccer balls
  constructor(x, y, petalImage) {
    this.x = x;
    this.y = y;
    this.image = petalImage;
  }
  //Displaying the soccer balls
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}