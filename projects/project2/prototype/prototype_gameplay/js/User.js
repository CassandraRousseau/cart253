class User {
  //Creating the knee
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 300;
  }
  move() {
    this.x = mouseX;
    this.y = mouseY;
  }
  //Displaying the knee
  display() {
    push();
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
