class Timer {
  //Creating timer in simulation
  constructor() {
    //Creating the lenght of the simulation
    this.gamelength = 1000;
  }

  //Setting timer in simulation
  timeCheck(state, magicPetal, framecountSim) {
    if (state === "Level1") {
      if (frameCount > framecountSim + this.gamelength) {
        //Bad ending if no balls are kick

        if (magicPetal.active) {
          return "BadEnding";
          //Good ending if at least one ball is still being kicked
        } else if (!magicPetal.active) {
          return "GoodEnding";
        }
      }
    }

    //Game running between the beginning and the end of the simulation
    return "stillRunning";
  }
}
