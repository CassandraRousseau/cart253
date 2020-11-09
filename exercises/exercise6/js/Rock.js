class Rock extends Nature {
  //Creating the rocks
  constructor(x, y, rockImage, mic) {
    super(x, y, rockImage);
    this.x = x;
    this.y = y;
    this.image = rockImage;
    this.mic = mic;
  }

  //Displaying the rocks
  display() {
    super.display();
    push();
    image(rockImage, this.x, height, this.w, this.h, this.alpha);
    pop();
  }
}
