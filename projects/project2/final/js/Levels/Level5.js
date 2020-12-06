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
    let x = (3 * width) / 4;
    let y = (4 * height) / 6;
    this.magicPetal = new MagicPetal5(x, y, magicPetalImage);
    pop();
  }
  //Preloading necessary images for level 5
  preload() {
    super.preload();
    this.castle.preload();
    this.magicPetal.preload();
  }

  //Setting level 5
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
      currentState = new BadEnding(
        windowWidth,
        windowHeight,
        badEndingImage,
        6
      );
    } else if (timerResult === "GoodEnding5") {
      currentState = new GoodEnding(
        windowWidth,
        windowHeight,
        goodEndingImage,
        6
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
