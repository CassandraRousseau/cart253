class User {
  //Creating the user
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 25;
    this.h = 25;
    this.fill = 0;
  }

  //Displaying the user
  display() {
    push();
    fill(this.fill);
    noStroke();
    ellipse(mouseX, mouseY, this.w, this.h);
    pop();
  }
}
