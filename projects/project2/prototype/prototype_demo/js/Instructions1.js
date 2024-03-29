class Instructions1 extends State {
  //Creating instructions screen
  constructor() {
    super();
    this.intro =
      "Find and catch the magic petal through the wind.\n\nClick with your mouse to catch the magic petal.\n\nDon't forget, time is running out!";
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
    textSize(45);
    fill(0);
    textAlign(LEFT, TOP);
    textFont("Fredericka the Great");
    text(this.intro, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Level1();
    }
  }
}
