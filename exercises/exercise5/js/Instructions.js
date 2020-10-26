class Instructions extends State {
  //Creating instructions screen
  constructor() {
    super();

    this.intro =
      "Good morning player!\n\nToday for your practice you will kick repeatedly the soccer ball!Catch the falling soccer balls and kick them constantly.\nClick on the left and right arrows to move your knee.\n\nDon't forget! You have to keep the ryhthm until the time is out!\n\nGood Luck!";
  }

  //Setting instructions screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen
  display() {
    push();
    textSize(40);
    fill(255);
    textAlign(LEFT, TOP);
    textFont("Lemonada");
    text(this.intro, 20, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Simulation();
    }
  }
}
