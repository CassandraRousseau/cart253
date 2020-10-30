class Sky extends Level1 {
  //Creating good ending screen
  constructor(w, h, skyImage) {
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.image = skyImage;
  }

  //Preloading background image for good ending
  preload() {
    this.image.preload();
  }

  //Displaying good ending screen
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
