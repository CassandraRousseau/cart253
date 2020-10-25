class Timer extends Simulation {
  //Creating timer in simulation
  constructor() {
    super();
    this.gamelength = 60 * 1000;
  }
  //Setting timer in simulation
  timeCheck() {
    super.draw();
    if (state === "simulation") {
      setTimeOut(gameOver, this.gameLength);
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
