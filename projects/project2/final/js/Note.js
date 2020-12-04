class Note extends State {
  //Creating the Chapter One title screen
  constructor() {
    super();
  }

  //Setting the Chapter One title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the Chapter One title screen
  display() {
    push();
    background(255);
    textSize(100);
    textAlign(CENTER, CENTER);
    text(
      "Note:Please allow your microphone to be open for further purpose in the game.",
      0,
      50,
      windowWidth,
      windowHeight
    );
    pop();
  }

  //Setting keyPressed action after Chapter One title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Title(windowWidth, windowHeight, titleImage);
    }
  }
}
