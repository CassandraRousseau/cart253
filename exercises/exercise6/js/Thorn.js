class Thorn extends Nature {
  //Creating the thorns
  constructor(x, y, angle, thornImage, mic) {
    super(x, y, angle, thornImage, mic);
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.image = thornImage;
    this.mic = mic;
  }

  //Displaying the thorns
  display() {
    super.display();
    push();
    rotate(this.angle);
    tint();
    image(thornImage, this.x, this.y, this.w, this.h, this.alpha);
    pop();
  }
}
