class Instructions extends State {
  //Creating instructions screen
  constructor() {
    super();
    this.intro =
      "Good morning player!\nToday for your practice you will kick repetitively the soccer ball!\nCatch the falling soccer balls and kick them constantly.\nClick on the left and right arrows to move your knee.\nDon't forget! You have to keep the ryhthm until time is out!\nGood Luck!";
  }
  //Setting instructions screen
  draw() {
    super.draw();
    this.display();
  }
  //Displaying instructions screen
  display() {
    push();
    textSize(85);
    fill(225, 125, 125);
    textAlign(LEFT, TOP);
    textFont("Lemonada");
    text(this.intro, 10, height / 2, windowWidth, windowHeight);
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
