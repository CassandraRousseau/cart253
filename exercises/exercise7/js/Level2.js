class Level2 extends State {
  //Creating level 2 elements
  constructor() {
    super();

    //Naming level
    this.name = "Level2";

    //Creating microphone
    this.mic = mic;

    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();

    //Creating user circle
    this.user = new User();

    //Creating nature elements' array
    this.natures = [];

    //Creating the cave
    for (let i = 0; i < numCaves; i++) {
      this.cave = new Cave(caveImage, this.mic);
      this.natures.push(this.cave);
    }

    //Creating the magic petal
    for (let i = 0; i < numMagicPetals; i++) {
      this.magicPetal = new MagicPetal2(magicPetalImage, this.mic);
      this.natures.push(this.magicPetal);
    }

    //Creating the left side rock
    for (let i = 0; i < numRocksLeft; i++) {
      let vx = 0.25;

      let rockLeft = new RockLeft(vx, rockImage, this.mic);

      this.natures.push(rockLeft);
    }

    //Creating the right side rock
    for (let i = 0; i < numRocksRight; i++) {
      let vx = 0.25;

      let rockRight = new RockRight(vx, rockImage, this.mic);

      this.natures.push(rockRight);
    }

    //Creating the left side thorn
    for (let i = 0; i < numThornsLeft; i++) {
      let vx = 0.25;

      let thornLeft = new ThornLeft(vx, thornImage, this.mic);

      this.natures.push(thornLeft);
    }

    //Creating the right side thorn
    for (let i = 0; i < numThornsRight; i++) {
      let x = (5 * width) / 6;

      let y = height / 2;

      let vx = 0.25;

      let thornRight = new ThornRight(x, y, vx, thornImage, this.mic);

      this.natures.push(thornRight);
    }
  }

  //Preloading necessary images for level 2
  preload() {
    super.preload();
    this.cave.preload();
    this.magicPetal.preload();
    this.rockLeft.preload();
    this.rockRight.preload();
    this.thornLeft.preload();
    this.thornRight.preload();
  }

  //Setting level
  draw() {
    super.draw();
    push();
    background(0);

    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "Level2",
      this.magicPetal,
      this.framecountSim
    );

    //Setting which states come after the level
    if (timerResult === "BadEnding") {
      currentState = new BadEnding(windowWidth, windowHeight, badEndingImage);
    } else if (timerResult === "GoodEnding2") {
      currentState = new GoodEnding2(
        windowWidth,
        windowHeight,
        goodEndingImage
      );
    }

    //Displaying the elements
    this.user.display();

    //Displaying nature elements
    for (let i = 0; i < this.natures.length; i++) {
      let nature = this.natures[i];

      //Displaying them only if magicPetal is active
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
