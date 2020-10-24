class Knee {
  //Creating the knee
  constructor(w, h, image) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height / 2;
    this.vx = 2;
    this.vy = 0;
    this.image = image;
  }
  preload() {
    this.image = loadImage("assets/images/knee.png");
  }
  //Displaying the knee
  display() {
    push();
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
  //Added useful key commands to move the knee
  keyPressed() {
    if (keyCode === 39) {
      this.x = this.vx;
    }
    if (keyCode === 37) {
      this.x = -this.vx;
    }
  }
}
