class Instructions {
  //Setting instruction screen
  display() {
    push();
    textSize(85);
    fill(225, 125, 125);
    textAlign(LEFT, TOP);
    textFont("Lemonada");

    let dialog1 = intro[currentLine];
    text(dialog1, 10, height / 2, windowWidth, windowHeight);
    pop();
  }
  keyPressed() {
    if (keyCode === 13) {
      if (state === "instructions") {
        state = "simulation";
      }
    }
  }
}
