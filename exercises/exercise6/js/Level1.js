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
    for (let i = 0; i < numRocks; i++) {
      let x = random(0, width);
      let vx = 3;
      let rock = new Rock(x, vx, rockImage, this.mic);
      this.natures.push(rock);
    }

    //Creating the thorns
    for (let i = 0; i < numThorns; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let vx = 3;
      let angle = random(0, 360);
      let thorn = new Thorn(x, y, vx, angle, thornImage, this.mic);
      this.natures.push(thorn);
    }
  }

  //Preloading necessary images for level 1
  preload() {
    super.preload();
    this.magicPetal.preload();
    this.rock.preload();
    this.thorn.preload();
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
