class Basketball {
  //Creating the basketball balls
  constructor(x, y, basketballImage) {
    this.x = x;
    this.y = y;
    this.w = 150;
    this.h = 150;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.active = true;
    this.image = basketballImage;
  }

  //Setting gravity occasioned by the weight of the balls
  gravity(force) {
    this.ay += force;
  }

  //Setting balls movements
  move() {
    this.vx += this.ax;
    this.vy += this.ay;
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.h / 2 > height) {
      this.active = false;
    }
  }

  //Setting the interaction between the knee and the balls
  touch(knee) {
    let d = dist(this.x, this.y, knee.x, knee.y);

    if (d < this.h / 2 + knee.height / 2 && d < this.w / 2 + knee.width / 2) {
      return "Dribble";
    } else {
      return "stillRunning";
    }
  }

  //Displaying the basketball balls
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
