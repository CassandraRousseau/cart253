class Survival {
  //Creating final battle background for the last level
  constructor(w, h, surviveImage) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = w;
    this.height = h;
    this.speed = 4;
    this.image = surviveImage;
  }

  //Preloading background image for the last level
  preload() {
    this.image.preload();
  }
  move() {
    // Choose random velocities within the "speed limit"
    this.vx = random(-this.speed, this.speed);

    this.x += this.vx;
    this.y += this.vy;
  }

  //Displaying final battle background
  display() {
    push();
    image(surviveImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
