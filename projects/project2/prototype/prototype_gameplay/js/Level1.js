class Level1 {
  //Creating simulation elements
  constructor() {
    super();
    this.name = "Level1";
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.petals = [];
    let x = random(0, width);
    let y = random(0, height);
    this.magicPetal = new MagicPetal(x, y, magicPetalImage);
    this.petals.push(magicPetal);
    this.user = new User();
    for (let i = 0; i < numPetals; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let redPetal = new RedPetal(x, y, petalImage);
      this.petals.push(redPetal);
    }
  }
  //Preloading necessary images for simulation
  preload() {
    super.preload();
    petalImage;
    magicPetalImage;
  }
  //Setting simulation
  draw() {
    super.draw();
    let timerResult = this.timer.timeCheck(
      "Level1",
      this.petals,
      this.framecountSim
    );
    //Setting which states come after the simulation
    if (timerResult === "BadEnding") {
      currentState = new BadEnding();
    } else if (timerResult === "GoodEnding") {
      currentState = new GoodEnding();
    }
    user.display();
    for (let i = 0; i < petals.length; i++) {
      let petal = this.petals[i];
      if (petal.active) {
        petal.move();
        petal.wrap();
        petal.display();
      }
    }
  }
}
