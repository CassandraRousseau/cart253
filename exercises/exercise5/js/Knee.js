class Knee {
  //Creating the knee
  constructor(w, h, kneeImage) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height / 2;
    this.vx = 2;
    this.vy = 0;
    this.ax = 2;
    this.ay = 0;
    this.image = kneeImage;
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.x = constrain(this.x, 0, width);
    this.vx = constrain(this.vx, 0, width);
  }
  //Displaying the knee
  display() {
    push();
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
  //Added useful key commands to move the knee
  handleInput() {
    //knee move to the right
    if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.ax;
      //kne moves to the left
    } else if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.ax;
    } else {
      this.vx = 0;
    }
  }
}
