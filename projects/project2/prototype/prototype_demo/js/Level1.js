class Level1 extends State {
  //Creating level elements
  constructor() {
    super();

    this.name = "Level1";
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.sky = new Sky(windowWidth, windowHeight, skyImage);
    this.user = new User();
    this.petals = [];

    //Creating petals
    push();
    let x = random(0, width);
    let y = random(0, height);
    let angle = random(0, 360);
    let speed = random(5, 10);
    let vx = random(5, 8);
    let vy = random(5, 8);
    this.magicPetal = new MagicPetal(
      x,
      y,
      vx,
      vy,
      speed,
      angle,
      magicPetalImage
    );
    pop();

    for (let i = 0; i < numRedPetals; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let vx = random(5, 15);
      let vy = random(5, 15);
      let angle = random(0, 360);
      let speed = random(5, 10);
      let redPetal = new RedPetal(x, y, vx, vy, speed, angle, petalImage);
      this.petals.push(redPetal);
    }
  }

  //Preloading necessary images for level
  preload() {
    super.preload();
    this.sky.preload();
    this.magicPetal.preload();
    this.redPetal.preload();
  }

  //Setting level 1
  draw() {
    super.draw();
    push();

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
    this.sky.display();
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
  mousePressed() {
    super.mousePressed();
    this.user.mousePressed(magicPetal);
  }
}
