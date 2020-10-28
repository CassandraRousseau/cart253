class Truck extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 80;
    this.height = 20;
    this.speed = 3;
  }
  display() {
    super.display();
    push();
    rectMode(CENTER);
    fill(255, 0, 0);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}