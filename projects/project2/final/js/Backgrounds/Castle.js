class Castle {
  //Creating sky background for level 1
  constructor(w, h, castleImage) {
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = castleImage;
  }

  //Preloading background image for level 1
  preload() {
    this.image.preload();
  }

  //Displaying sky background
  display() {
    push();
    image(castleImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
