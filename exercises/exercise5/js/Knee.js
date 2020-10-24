class Knee {
  //Creating the knee
  constructor(w, h, kneeImage) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height / 2;
    this.vx = 2;
    this.vy = 0;
    this.speed = 2;
    this.image = kneeImage;
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
      this.x = this.speed;
    } else if (keyCode === 37) {
      this.x = -this.speed;
    } else {
      this.vx = 0;
    }
  }
}
