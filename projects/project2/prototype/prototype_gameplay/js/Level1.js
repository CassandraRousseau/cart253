class Level1 extends State {
  //Creating simulation elements
  constructor() {
    this.name = "Level1";
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.user = new User();
    this.petals = [];
    let x = random(0, width);
    let y = random(0, height);
    this.magicPetal = new MagicPetal(x, y, magicPetalImage);
    this.petals.push(magicPetal);
    for (let i = 0; i < numPetals; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let redPetal = new RedPetal(x, y, petalImage);
      this.petals.push(redPetal);
    }
  }
  //Preloading necessary images for simulation
  preload() {}
  //Setting simulation
  draw() {
    push();
    background(255);
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
    user.move();
    user.display();
    for (let i = 0; i < petals.length; i++) {
      let petal = this.petals[i];
      if (petal.active) {
        petal.move();
        petal.wrap();
        petal.display();
      }
    }
    pop();
  }
}
