class Leaf2 extends Heap {
  //Creating the leaves for the third level
  constructor(x, y, angle, leafImage) {
    super(x, y, angle, leafImage);
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.image = leafImage;
  }

  //Displaying the leaves for the third level
  display() {
    super.display();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
