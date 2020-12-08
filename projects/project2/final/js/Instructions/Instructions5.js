class Instructions5 extends State {
  //Creating instructions screen for the fifth level
  constructor() {
    super();
    this.intro =
      "Search for the magic petal in the castle.\n\nClick with your mouse to catch the petal.\n\nCollect the magic petal before it's too late!";
  }

  //Setting instructions screen for the fifth level
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen for the fifth level
  display() {
    push();
    background(255);
    textSize(60);
    textAlign(LEFT, TOP);
    text(this.intro, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen for the fifth level
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Level5();
    }
  }
}
