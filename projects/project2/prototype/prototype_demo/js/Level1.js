class Level1 extends State {
  //Creating level elements
  constructor() {
    super();

    this.name = "Level1";
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.user = new User();
    this.petals = [];

    //Creating petals
    push();
    let x = random(0, width);
    let y = random(0, height);
    this.magicPetal = new MagicPetal(x, y, magicPetalImage);
    pop();

    for (let i = 0; i < numRedPetals; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let redPetal = new RedPetal(x, y, petalImage);
      this.petals.push(redPetal);
    }
  }

  //Preloading necessary images for level
  preload() {
    super.preload();
    this.magicPetal.preload();
    this.redPetal.preload();
  }

  //Setting level 1
  draw() {
    super.draw();
    push();
    background(255);

    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "Level1",
      this.magicPetal,
      this.framecountSim
    );

    //Setting which states come after the level
    if (timerResult === "BadEnding") {
      currentState = new BadEnding(windowWidth, windowHeight, badEndingImage);
    } else if (timerResult === "GoodEnding") {
      currentState = new GoodEnding(windowWidth, windowHeight, goodEndingImage);
    }

    //Displaying the elements
    this.user.display();
    this.magicPetal.move();
    this.magicPetal.wrap();
    this.magicPetal.display();
    for (let i = 0; i < this.petals.length; i++) {
      let petal = this.petals[i];
      petal.move();
      petal.wrap();
      petal.display();
    }
    pop();
  }
}
