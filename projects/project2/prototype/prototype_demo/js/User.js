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

  //Setting how to catch the magic petal by pressing the mouse
  mousePressed(magicPetal) {
    let d = dist(mouseX, mouseY, magicPetal.x, magicPetal.y);

    if (magicPetal.active && d < magicPetal.w / 2 + magicPetal.h / 2) {
      magicPetal.active = false;
    }
  }
}
