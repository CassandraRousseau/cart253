class LastLevel extends State {
  //Creating level elements
  constructor() {
    super();

    this.name = "LastLevel";
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.user = new User();
    this.survival = new Survival(windowWidth, windowHeight, surviveImage);
    //Creating the magic petal
    push();
    let x = (2 * width) / 3;
    let y = height / 5;
    this.magicPetal = new LastMagicPetal(x, y, magicPetalImage);
    pop();
  }
  //Preloading necessary images for level 1
  preload() {
    super.preload();
    this.survival.preload();
    this.magicPetal.preload();
  }

  //Setting level 1
  draw() {
    super.draw();
    push();
    background(255);
    this.survival.move();
    this.survival.display();
    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "LastLevel",
      this.magicPetal,
      this.framecountSim
    );

    //Setting which states come after the level
    if (timerResult === "DeathEnding") {
      currentState = new DeathEnding(windowWidth, windowHeight, deathImage);
    } else if (timerResult === "Epilogue1") {
      currentState = new Epilogue1(windowWidth, windowHeight, catchImage);
    }

    //Displaying the elements
    this.user.display();
    if (this.magicPetal.active) {
      this.magicPetal.move();
      this.magicPetal.follow(this.survival);
      this.magicPetal.display();
    }
  }
  //Setting the mousePressed method for the interactivity in the level
  mousePressed() {
    super.mousePressed();
    this.user.mousePressed(this.magicPetal);
  }
}
