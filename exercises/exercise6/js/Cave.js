class Cave {
  //Creating sky background for level 1
  constructor(w, h, caveImage) {
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.alpha = alpha;
    this.minAlpha = 0;
    this.maxAlpha = 255;
    this.image = caveImage;
  }

  //Preloading background image for level 1
  preload() {
    this.image.preload();
  }
  //Changing the opacity of thorn
  transparency(nature) {
    push();
    if (nature.move()) {
      this.alpha = map(
        this.alpha,
        this.w,
        this.h,
        this.minAlpha,
        this.maxAlpha
      );
    }

    pop();
  }
  //Displaying sky background
  display() {
    push();
    image(caveImage, this.x, this.y, this.w, this.h);
    pop();
  }
}
