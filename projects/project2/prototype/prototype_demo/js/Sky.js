class Sky extends Level1 {
  //Creating good ending screen
  constructor(skyImage) {
    this.x = 0;
    this.y = 0;
    this.image = skyImage;
  }

  //Preloading background image for good ending
  preload() {
    this.image.preload();
  }

  //Displaying good ending screen
  display() {
    push();
    image(skyImage, this.x, this.y);
    pop();
  }
}
