class State {
  //Setting all the variables for each states
  constructor() {}

  //Setting preload method for each states
  preload() {}

  //Setting draw method for each states
  draw() {
    fill(0);
    textFont("Amatic SC");
  }

  //Setting mousePressed method for each states
  mousePressed() {}

  //Setting keyPressed method for each states
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
