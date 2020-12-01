class Instructions4 extends State {
  //Creating instructions screen
  constructor() {
    super();
    this.intro =
      "Clap your hands five times to assemble the magic petal.\n\nClick with your mouse to catch the magic petal.\n\nDon't forget, time is running out!";
  }

  //Setting instructions screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen
  display() {
    push();
    background(255);
    textSize(60);
    textAlign(LEFT, TOP);
    text(this.intro, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Level4();
    }
  }
}
