class Timer {
  //Creating timer in simulation
  constructor() {
    //Creating the lenght of the simulation
    this.gamelength = 1000;
  }

  //Setting timer in simulation
  timeCheck(state, soccers, framecountSim) {
    if (state === "simulation") {
      if (frameCount > framecountSim + this.gamelength) {
        //Bad ending if no balls are kick

        if (soccers.length === 0) {
          return "BallsFalling";
          //Good ending if at least one ball is still being kicked
        } else if (soccers.length > 0) {
          return "GoodEnding";
        }
      }
    }

    //Game running between the beginning and the end of the simulation
    return "stillRunning";
  }
}
