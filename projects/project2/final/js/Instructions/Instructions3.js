class Instructions3 extends State {
  //Creating instructions screen for the third level
  constructor() {
    super();

    //Creating the text of instructions 3
    this.intro3 =
      "Search for the magic petal under the heap of leaves and petals.\n\nPress your mouse once you find the petal.\n\nCollect the magic petal before it's too late!";
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
    textSize(60);
    textAlign(LEFT, TOP);
    text(this.intro3, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen for the third level
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Level3();
    }
  }
}
