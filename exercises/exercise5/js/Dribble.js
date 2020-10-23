class Dribble extends State {
  //Creating bad ending(touching basketball ball)
  constructor() {
    super();
    this.wrongBall =
      "What are you doing!?!?\nWe are not here to dribble and shoot!";
  }
  //Setting bad ending (touching basketball ball) screen
  draw() {
    super.draw();
    this.display();
  }
  //Displaying bad ending(touching basketball ball) screen
  display() {
    push();
    textSize(85);
    fill(225, 125, 125);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text(this.wrongBall, 10, height / 2, windowWidth, windowHeight);
    push();
    textSize(35);
    text("Press Enter to restart", 10, (2 * height) / 3);
    pop();
    pop();
  }
  //Setting action of keyPressed after bad ending(touching basketball ball) screen
  keyPressed() {
    if (keyCode === 13) {
      location.reload();
    }
  }
}
