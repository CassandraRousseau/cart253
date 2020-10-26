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
    textSize(65);
    fill(255);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text(this.wrongBall, 20, height / 3, windowWidth, windowHeight);
    push();
    textSize(45);
    text("Press Enter to restart", width / 2, (3 * height) / 4);
    pop();
    pop();
  }

  //Setting action of keyPressed after bad ending(touching basketball ball) screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      location.reload();
    }
  }
}
