class Instructions2 extends State {
  //Creating instructions screen for the second level
  constructor() {
    super();

    //Creating the text of instructions 2
    this.intro2 =
      "Scream until you reach the magic petal.\n\nClick with your mouse to catch the petal.\n\nCollect the magic petal before it's too late!";
  }

  //Setting instructions screen for the second level
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen for the second level
  display() {
    push();
    background(255);
    textSize(60);
    textAlign(LEFT, TOP);
    text(this.intro2, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen for the second level
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Level2();
    }
  }
}
