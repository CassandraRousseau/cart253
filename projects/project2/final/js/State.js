class State {
  //Setting all the variables for each state
  constructor() {}

  //Setting preload method for each state
  preload() {}

  //Setting draw method for each state
  draw() {
    fill(0);
    textFont("Amatic SC");
  }

  //Setting mousePressed method for each state
  mousePressed() {}

  //Setting keyPressed method for each state
  keyPressed() {
    if (keyCode === 13) {
      pageSFX.play();
      ost.rate(-0.4);
      if (!ost.isPlaying()) {
        ost.play();
      }
      currentLine = 0;
    }
  }
}
