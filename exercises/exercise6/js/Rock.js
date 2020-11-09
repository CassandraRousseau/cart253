class Rock extends Plant {
  //Creating the rocks
  constructor(x, y, rockImage) {
    super(x, y, rockImage);
    this.x = x;
    this.y = y;
    this.image = rockImage;
  }

  //Displaying the rocks
  display() {
    super.display();
    push();
    image(rockImage, this.x, height, this.w, this.h, this.alpha);
    pop();
  }
}
