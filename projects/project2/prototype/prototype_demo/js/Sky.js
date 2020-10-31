class Sky extends Level1 {
  //Creating sky background for level 1
  constructor(skyImage) {
    this.x = 0;
    this.y = 0;
    this.image = skyImage;
  }

  //Preloading background image for level 1
  preload() {
    this.image.preload();
  }

  //Displaying sky background
  display() {
    push();
    image(skyImage, this.x, this.y);
    pop();
  }
}
