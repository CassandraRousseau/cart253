class MagicPetalTopRight extends MagicPetal {
  //Creating the part of magic petal in level 4 at the top right of the canvas
  constructor(magicPetalTopRightImage, mic, alpha) {
    super(magicPetalTopRightImage, mic, alpha);
    this.x = width;
    this.y = 0;
    this.movingSpeed = 0.25;
    this.image = magicPetalTopRightImage;
    this.mic = mic;
  }

  //Setting the part of magic petal in level 4 at the top right of the canvas
  move() {
    super.move();
    push();

    // Check if magic petal is  moving based on screams
    //**Assistance from the instructor Pippin to create the movement based on claps
    //and the moment where and when the part of magic petal stops moving**
    if (clapping2) {
      this.state = "running";
      this.vx += this.movingSpeed;
      this.vy += this.movingSpeed;
    } else {
      this.state = "still";
    }

    //Setting when magic petal stops moving
    if (this.x <= width / 2 && this.y >= height / 2) {
      this.vx = this.stop;
      this.vy = this.stop;
      this.x = width / 2;
      this.y = height / 2;
    }

    //Setting magic petal movements
    this.x -= this.vx;
    this.y += this.vy;
    pop();
  }

  //Displaying the magic petal based on clapping
  display() {
    super.display();
    push();

    if (this.state === "running") {
      imageMode(CENTER);
      tint(255, 255, 255, this.alpha);
      image(magicPetalTopRightImage, this.x, this.y, this.w, this.h);
    }
    pop();
  }
}
