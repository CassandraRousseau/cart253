class Timer {
  //Setting timer in simulation
  timeCheck() {
    if (frameCount > timer && flowers.length === 0) {
      state = "badEnding";
      currentLine = 0;
    } else if (frameCount > timer && flowers.length <= 19) {
      state = "timeOut";
      currentLine = 0;
    } else if (frameCount > timer && flowers.length === 20) {
      state = "goodEnding";
      currentLine = 0;
    }
  }
}
