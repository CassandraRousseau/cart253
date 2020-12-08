class LastLevel extends State {
  //Creating level elements
  constructor() {
    super();

    //Naming level
    this.name = "LastLevel";

    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();

    //Creating the user
    this.user = new User();

    //Creating the final battle background
    this.survival = new Survival(windowWidth, windowHeight, surviveImage);

    //Creating the magic petal
    push();
    let x = (2 * width) / 3;
    let y = height / 5;
    this.magicPetal = new LastMagicPetal(x, y, magicPetalImage);
    pop();
  }

  //Preloading necessary images for the last level
  preload() {
    super.preload();
    this.survival.preload();
    this.magicPetal.preload();
  }

  //Setting last level
  draw() {
    super.draw();
    push();

    //Setting the background
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

    //Displaying user
    this.user.display();

    //Displaying the last magic petal
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
