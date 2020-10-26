class Timer {
  //Creating timer in simulation
  constructor() {
    this.gamelength = 1000;
  }
  //Setting timer in simulation
  timeCheck(state, soccers, framecountSim) {
    if (state === "simulation") {
      if (frameCount > framecountSim + this.gamelength) {
        if (soccers.length === 0) {
          return "BallsFalling";
        } else if (soccers.length > 0) {
          return "GoodEnding";
        }
      }
    }

    return "stillRunning";
  }
}
