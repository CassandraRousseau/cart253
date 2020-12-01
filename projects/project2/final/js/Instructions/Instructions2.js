class Instructions2 extends State {
  //Creating instructions screen for the second level
  constructor() {
    super();
    this.intro2 =
      "Scream until you reach the magic petal.\n\nClick with your mouse to catch the magic petal.\n\nDon't forget, time is running out!";
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

    if (keyCode === 13) {
      currentState = new Level2();
    }
  }
}
