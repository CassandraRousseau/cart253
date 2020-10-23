class Timer {
  constructor() {
    // NEW! A timer to count the number of frames in the game state
    this.gameOverTimer = 0;
    // NEW! A variable to store how long our game is (in frames)
    this.gameLength = 60 * 10;
    this.state = "simulation"; // game, win, los
  }
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
