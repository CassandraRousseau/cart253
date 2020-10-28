class Level1 extends State {
  //Creating simulation elements
  constructor() {
    super();
    this.name = "Level1";
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.user = new User();
    let x = random(0, width);
    let y = random(0, height);
    this.magicPetal = new MagicPetal(x, y, magicPetalImage);
    this.petals = [];
    for (let i = 0; i < numRedPetals; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let redPetal = new RedPetal(x, y, petalImage);
      this.petals.push(redPetal);
    }
  }
  //Preloading necessary images for simulation
  preload() {
    super.preload();
  }
  //Setting simulation
  draw() {
    super.draw();
    push();
    background(255);
    let timerResult = this.timer.timeCheck(
      "Level1",
      this.petals,
      this.framecountSim
    );
    //Setting which states come after the simulation
    if (timerResult === "BadEnding") {
      currentState = new BadEnding(windowWidth, windowHeight, badEndingImage);
    } else if (timerResult === "GoodEnding") {
      currentState = new GoodEnding(windowWidth, windowHeight, goodEndingImage);
    }
    user.display();
    magicPetal.move();
    magicPetal.wrap();
    magicPetal.display();
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
