class Level5 extends State {
  //Creating level elements
  constructor() {
    super();

    this.name = "Level5";
    this.castle = new Castle(windowWidth, windowHeight, castleImage);
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.user = new User();

    //Creating the magic petal
    push();
    let x = width / 3;
    let y = height / 4;
    this.magicPetal = new MagicPetal5(x, y, magicPetalImage);
    pop();
  }
  //Preloading necessary images for level 1
  preload() {
    super.preload();
    this.castle.preload();
    this.magicPetal.preload();
  }

  //Setting level 1
  draw() {
    super.draw();
    push();
    this.castle.display();
    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "Level5",
      this.magicPetal,
      this.framecountSim
    );

    //Setting which states come after the level
    if (timerResult === "BadEnding") {
      currentState = new BadEnding(windowWidth, windowHeight, badEndingImage);
    } else if (timerResult === "GoodEnding5") {
      currentState = new GoodEnding5(
        windowWidth,
        windowHeight,
        goodEndingImage
      );
    }

    //Displaying the elements
    this.user.display();
    if (this.magicPetal.active) {
      this.magicPetal.move();
      this.magicPetal.display();
    }
  }
  //Setting the mousePressed method for the interactivity in the level
  mousePressed() {
    super.mousePressed();
    this.user.mousePressed(this.magicPetal);
  }
}
