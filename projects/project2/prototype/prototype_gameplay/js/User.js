class User {
  //Creating the knee
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 300;
    this.fill = 0;
  }

  //Displaying the knee
  display() {
    push();
    fill(this.fill);
    noStroke();
    ellipse(mouseX, mouseY, this.size);
    pop();
  }
}
