class Title {
  //Setting the title screen
  display() {
    push();
    textSize(105);
    fill(255);
    textAlign(CENTER, CENTER);
    textFont("Lemonada");
    text("Pick the Flowers!", width / 2, height / 2);
    push();
    textSize(35);
    text("Press Enter to start", width / 2, (2 * height) / 3);
    pop();
    pop();
  }
  keyPressed() {
    if (keyCode === 13) {
      if (state === "title") {
        state = "instructions";
      }
    }
  }
}
