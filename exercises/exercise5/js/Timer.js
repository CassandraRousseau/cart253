class Timer {
  //Creating timer in simulation
  constructor() {
    this.gamelength = 60 * 1000;
  }
  //Setting timer in simulation
  timeCheck() {
    if (state === "simulation") {
      setTimeOut(this.gameOver, thhis.gameLength);
    }
  }
  //Setting how the user has a game over
  gameOver() {
    if (soccers.length === 0) {
      state = "BallsFalling";
    } else {
      state = "GoodEnding";
    }
  }
}
