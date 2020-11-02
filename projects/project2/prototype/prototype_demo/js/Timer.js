class Timer {
  //Creating timer in level1
  constructor() {
    //Creating the lenght of the level
    this.gamelength = 1500;
  }

  //Setting timer in level 1
  timeCheck(state, magicPetal, framecountSim) {
    if (state === "Level1") {
      //Bad ending user didn't catch the magic petal
      if (magicPetal.active && frameCount > framecountSim + this.gamelength) {
        return "BadEnding";
      }

      //Good ending user catches the magic petal
      else if (
        !magicPetal.active &&
        frameCount < framecountSim + this.gamelength
      ) {
        return "GoodEnding";
      }
    }

    //Game running between the beginning and the end of the level
    return "stillRunning";
  }
}
