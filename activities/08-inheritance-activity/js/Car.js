class Car extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 20;
    this.speed = 5;
  }
  display() {
    super.display();
    push();
    rectMode(CENTER);
    fill(100, 100, 255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
