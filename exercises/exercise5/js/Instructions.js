class Instructions {
  constructor() {
    super();
    this.intro =
      "Good morning player!\nToday for your practice you will kick repeatively the soccer ball!\nCatch the falling balls and kick them to not let them fall apart.\nClick on the left and right arrows to move your knee.\nDon't forget! You have to keep the ryhthm until time is out!\nGood Luck!";
  }
  draw() {
    super.draw();
    this.display();
  }
  //Setting instruction screen
  display() {
    push();
    textSize(85);
    fill(225, 125, 125);
    textAlign(LEFT, TOP);
    textFont("Lemonada");
    text(intro, 10, height / 2, windowWidth, windowHeight);
    pop();
  }
  keyPressed() {
    super.keyPressed();
    if (keyCode === 13) {
      state = "simulation";
    }
    currentState = new Simulation();
  }
}
