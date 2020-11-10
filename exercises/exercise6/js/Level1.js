class Level1 extends State {
  //Creating level elements
  constructor() {
    super();
    this.name = "Level1";
    this.mic = mic;
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.cave = new Cave(caveImage, this.mic);
    this.user = new User();
    this.natures = [];

    //Creating the magic petal
    for (let i = 0; i < numMagicPetals; i++) {
      this.magicPetal = new MagicPetal(magicPetalImage, this.mic);
      this.natures.push(this.magicPetal);
    }
    //Creating the rocks
    for (let i = 0; i < numRocksLeft; i++) {
      let vx = 0.25;
      let rockLeft = new RockLeft(vx, rockImage, this.mic);
      this.natures.push(rockLeft);
    }
    //Creating the rocks
    for (let i = 0; i < numRocksRight; i++) {
      let vx = 0.25;
      let rockRight = new RockRight(vx, rockImage, this.mic);
      this.natures.push(rockRight);
    }

    //Creating the thorns
    for (let i = 0; i < numThornsLeft; i++) {
      let vx = 0.25;
      let thornLeft = new ThornLeft(vx, thornImage, this.mic);
      this.natures.push(thornLeft);
    }
    //Creating the thorns
    for (let i = 0; i < numThornsRight; i++) {
      let x = (2 * width) / 3;
      let y = height / 2;
      let vx = 0.25;
      let thornRight = new ThornRight(x, y, vx, thornImage, this.mic);
      this.natures.push(thornRight);
    }
  }

  //Preloading necessary images for level 1
  preload() {
    super.preload();
    this.cave.preload();
    this.magicPetal.preload();
    this.rockLeft.preload();
    this.rockRight.preload();
    this.thornLeft.preload();
    this.thornRight.preload();
  }

  //Setting level 1
  draw() {
    super.draw();
    push();
    background(0);

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
    this.cave.move();
    this.cave.growing();
    this.cave.transparency();
    this.cave.display();
    //Displaying the elements
    this.user.display();
    for (let i = 0; i < this.natures.length; i++) {
      let nature = this.natures[i];
      if (this.magicPetal.active) {
        nature.move();
        nature.growing();
        nature.transparency();
        nature.display();
      }
    }
    pop();
  }

  //Setting the mousePressed method for the interactivity in the level
  mousePressed() {
    super.mousePressed();
    this.user.mousePressed(this.magicPetal);
  }
}
