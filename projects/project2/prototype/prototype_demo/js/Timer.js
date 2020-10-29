class Timer {
  //Creating timer in level1
  constructor() {
    //Creating the lenght of the level
    this.gamelength = 1000;
  }

  //Setting timer in level 1
  timeCheck(state, magicPetal, framecountSim) {
    if (state === "Level1") {
      if (frameCount > framecountSim + this.gamelength) {
        //Bad ending user didn't catch the magic petal
        if (magicPetal.active) {
          return "BadEnding";
        }

        //Good ending user catches the magic petal
        else if (!magicPetal.active) {
          return "GoodEnding";
        }
      }
    }

    //Game running between the beginning and the end of the level
    return "stillRunning";
  }
}
