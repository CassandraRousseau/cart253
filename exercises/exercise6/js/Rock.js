class Rock extends Plant {
  //Creating the red petals
  constructor(x, y, rockImage) {
    super(x, y, rockImage);
    this.x = x;
    this.y = y;
    this.image = rockImage;
  }

  //Displaying the red petals
  display() {
    super.display();
    push();
    image(rockImage, this.x, height, this.w, this.h, this.alpha);
    pop();
  }
}
