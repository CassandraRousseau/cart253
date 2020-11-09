class Thorn extends Plant {
  //Creating the red petals
  constructor(x, y, angle, thornImage) {
    super(x, y, angle, thornImage);
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.image = thornImage;
  }

  //Displaying the red petals
  display() {
    super.display();
    push();
    rotate(this.angle);
    tint();
    image(thornImage, this.x, this.y, this.w, this.h, this.alpha);
    pop();
  }
}
