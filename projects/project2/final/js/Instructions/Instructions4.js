class Instructions4 extends State {
  //Creating instructions screen for the fourth level
  constructor() {
    super();

    //Creating the text of instructions 4
    this.intro =
      "Clap your hands five times to assemble the magic petal.\n\nClick with your mouse to catch the petal.\n\nCollect the magic petal before it's too late!";
  }

  //Setting instructions screen for the fourth level
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen for the fourth level
  display() {
    push();
    background(255);
    textSize(60);
    textAlign(LEFT, TOP);
    text(this.intro, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen for the fourth level
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Level4();
    }
  }
}
