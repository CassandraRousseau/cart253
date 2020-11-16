class Instructions3 extends State {
  //Creating instructions screen for the third level
  constructor() {
    super();
    this.intro3 =
      "Search for the magic petal under the bunch of leaves and petals.\n\nPress your mouse once you find the magic petal.\n\nDon't forget, time is running out!";
  }

  //Setting instructions screen for the third level
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen for the third level
  display() {
    push();
    background(255);
    textSize(45);
    fill(0);
    textAlign(LEFT, TOP);
    textFont("Fredericka the Great");
    text(this.intro3, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen for the third level
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Level3();
    }
  }
}
