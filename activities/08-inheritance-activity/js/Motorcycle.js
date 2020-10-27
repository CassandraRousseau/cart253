class Motorcycle extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 30;
    this.height = 10;
    this.speed = 10;
  }
  display() {
    super.display();
    push();
    fill(255, 100, 200);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
