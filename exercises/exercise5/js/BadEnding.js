class BadEnding {
  //Setting bad ending screen
  display() {
    push();
    background(0);
    textSize(85);
    fill(225, 125, 125);
    textFont("Lemonada");
    textAlign(LEFT, TOP);

    let dialog3 = wrong[currentLine];
    text(dialog3, 10, height / 2, windowWidth, windowHeight);
    pop();
    //Setting time out screen
    push();
    textSize(85);
    fill(225, 125, 125);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text("Time is out!", 10, height / 2, windowWidth, windowHeight);
    push();
    textSize(35);
    text("Press Enter to restart", 10, (2 * height) / 3);
    pop();
    pop();
  }
  keyPressed() {
    if (keyCode === 13) {
      if (state === "badEnding") {
        location.reload();
        if (state === "timeOut") {
          location.reload();
        }
      }
    }
  }
}
