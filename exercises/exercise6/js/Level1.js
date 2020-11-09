class Level1 extends State {
  //Creating level elements
  constructor() {
    super();
    this.name = "Level1";
    this.mic = mic;
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.user = new User();
    this.natures = [];

    //Creating the magic petal
    this.magicPetal = new MagicPetal(magicPetalImage);

    //Creating the rocks
    for (let i = 0; i < numRocksLeft; i++) {
      let x = random(0, width);
      let vx = 3;
      let rockLeft = new RockLeft(x, vx, rockImage, this.mic);
      this.natures.push(rockLeft);
    }
    //Creating the rocks
    for (let i = 0; i < numRocksRight; i++) {
      let x = random(0, width);
      let vx = 3;
      let rockRight = new RockRight(x, vx, rockImage, this.mic);
      this.natures.push(rockRight);
    }

    //Creating the thorns
    for (let i = 0; i < numThornsLeft; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let vx = 3;
      let angle = random(0, 360);
      let thornLeft = new ThornLeft(x, y, vx, angle, thornImage, this.mic);
      this.natures.push(thornLeft);
    }
    //Creating the thorns
    for (let i = 0; i < numThornsRight; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let vx = 3;
      let angle = random(0, 360);
      let thornRight = new ThornRight(x, y, vx, angle, thornImage, this.mic);
      this.natures.push(thornRight);
    }
  }

  //Preloading necessary images for level 1
  preload() {
    super.preload();
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

    //Displaying the elements
    this.user.display();
    if (this.magicPetal.active) {
      this.magicPetal.move();
      this.magicPetal.growing();
      this.magicPetal.display();
    }

    for (let i = 0; i < this.natures.length; i++) {
      let nature = this.natures[i];
      nature.move();
      nature.wrap();
      nature.transparency();
      nature.display();
    }
    pop();
  }

  //Setting the mousePressed method for the interactivity in the level
  mousePressed() {
    super.mousePressed();
    this.user.mousePressed(this.magicPetal);
  }
}
