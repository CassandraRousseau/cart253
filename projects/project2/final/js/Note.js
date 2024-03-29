class Note extends State {
  //Creating a user note screen at the beginning of the game
  constructor() {
    super();
  }

  //Setting the note screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the note screen
  display() {
    push();
    background(255);
    textSize(100);
    textAlign(CENTER, CENTER);
    text(
      "Note: Enable your microphone to play the game.",
      0,
      50,
      windowWidth,
      windowHeight
    );

    //Added how user changes the state
    push();
    textSize(55);
    textAlign(LEFT, BOTTOM);
    text("Press Enter", (5 * width) / 6, (9 * height) / 10);
    pop();
    pop();
  }

  //Setting keyPressed action after the note
  keyPressed() {
    super.keyPressed();

    //Change state by pressing enter key
    if (keyCode === 13) {
      currentState = new Title(windowWidth, windowHeight, titleImage);
    }
  }
}
