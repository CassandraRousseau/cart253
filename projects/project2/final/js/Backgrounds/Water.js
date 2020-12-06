class Water {
  //Creating lake background for level 4
  constructor(w, h, waterImage) {
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = waterImage;
  }

  //Preloading background image for level 4
  preload() {
    this.image.preload();
  }

  //Displaying lake background
  display() {
    push();
    image(waterImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
