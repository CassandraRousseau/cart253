class GoodEnding {
  //Setting good ending screen
  display() {
    push();
    textSize(85);
    fill(225, 125, 125);
    textFont("Lemonada");
    textAlign(LEFT, TOP);

    let dialog2 = right[currentLine];
    text(dialog2, 10, height / 2, windowWidth, windowHeight);
    pop();
  }
  keyPressed() {
    if (keyCode === 13) {
      if (state === "goodEnding") {
       location.reload();
     }
}
