class Petal {
  //Creating the soccer balls
  constructor(x, y, petalImage) {
    this.x = x;
    this.y = y;
    this.w = 250;
    this.h = 250;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.active = true;
    this.image = petalImage;
  }
  preload() {
    this.image = loadImage("assets/images/petal.png");
  }
  //Setting gravity occasioned by the weight of the balls
  wind(force) {
    this.ay += force;
    this.ax += force;
  }
  //Setting balls movements
  move() {
    this.vx += this.ax;
    this.vy += this.ay;
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    this.x += this.vx;
    this.y += this.vy;
    if (this.y - this.size / 2 > height) {
      this.active = false;
    }
  }
  //Setting the interaction between the knee and the balls
  bounce(knee) {
    if (
      this.x > knee.x - knee.width / 2 &&
      this.x < knee.x + knee.width / 2 &&
      this.y + this.size / 2 > knee.y - knee.height / 2 &&
      this.y - this.size / 2 < knee.y + knee.height / 2
    ) {
      let dx = this.x - knee.x;
      this.vx += map(dx, -knee.width / 2, knee.width / 2, -2, 2);
      this.vy = -this.vy;
      this.ay = 0;
    }
  }
  //Displaying the soccer balls
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
