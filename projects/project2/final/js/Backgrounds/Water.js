class Water {
  //Creating sky background for level 1
  constructor(w, h, waterImage) {
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = waterImage;
  }

  //Preloading background image for level 1
  preload() {
    this.image.preload();
  }

  //Displaying sky background
  display() {
    push();
    image(waterImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
