class Timer {
  //Creating timer for each level
  constructor() {
    //Creating the length of the levels
    this.gamelength = 1500;
  }

  //Setting timer in levels
  timeCheck(state, magicPetal, framecountSim) {
    if (state === "Level1") {
      //Bad ending when the user didn't catch the magic petal
      if (magicPetal.active && frameCount > framecountSim + this.gamelength) {
        return "BadEnding";
      }

      //Good ending when the user catches the magic petal
      else if (
        !magicPetal.active &&
        frameCount < framecountSim + this.gamelength
      ) {
        return "GoodEnding1";
      }
    } else if (state === "Level2") {
      //Bad ending when the user didn't catch the magic petal
      if (magicPetal.active && frameCount > framecountSim + this.gamelength) {
        return "BadEnding";
      }

      //Good ending when the user catches the magic petal
      else if (
        !magicPetal.active &&
        frameCount < framecountSim + this.gamelength
      ) {
        return "GoodEnding2";
      }
    } else if (state === "Level3") {
      //Bad ending when the user didn't catch the magic petal
      if (magicPetal.active && frameCount > framecountSim + this.gamelength) {
        return "BadEnding";
      }

      //Good ending when the user catches the magic petal
      else if (
        !magicPetal.active &&
        frameCount < framecountSim + this.gamelength
      ) {
        return "GoodEnding3";
      }
    } else if (state === "Level4") {
      //Bad ending when the user didn't catch the magic petal
      if (magicPetal.active && frameCount > framecountSim + this.gamelength) {
        return "BadEnding";
      }

      //Good ending when the user catches the magic petal
      else if (
        !magicPetal.active &&
        frameCount < framecountSim + this.gamelength
      ) {
        return "GoodEnding4";
      }
    } else if (state === "Level5") {
      //Bad ending when the user didn't catch the magic petal
      if (magicPetal.active && frameCount > framecountSim + this.gamelength) {
        return "BadEnding";
      }

      //Good ending when the user catches the magic petal
      else if (
        !magicPetal.active &&
        frameCount < framecountSim + this.gamelength
      ) {
        return "GoodEnding5";
      }
    } else if (state === "LastLevel") {
      //Death ending when the user didn't catch the magic petal
      if (magicPetal.active && frameCount > framecountSim + this.gamelength) {
        return "DeathEnding";
      }

      //Final ending when the user catches the magic petal
      else if (
        !magicPetal.active &&
        frameCount < framecountSim + this.gamelength
      ) {
        return "Epilogue1";
      }
    }
    //Game is running between the beginning and the end of the level
    return "stillRunning";
  }
}
