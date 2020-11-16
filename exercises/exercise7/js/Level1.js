class Level1 extends State {
  //Creating level elements
  constructor() {
    super();

    this.name = "Level1";
    this.sky = new Sky(windowWidth, windowHeight, skyImage);
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.user = new User();
    this.plants = [];

    //Creating the magic petal
    push();
    let x = random(0, width);
    let y = random(0, height);
    let angle = random(0, 360);
    let speed = random(5, 10);
    let vx = random(3, 8);
    let vy = random(3, 6);
    this.magicPetal = new MagicPetal1(
      x,
      y,
      vx,
      vy,
      speed,
      angle,
      magicPetalImage
    );
    pop();

    //Creating the red petals
    for (let i = 0; i < numRedPetals; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let vx = random(5, 15);
      let vy = random(5, 15);
      let angle = random(0, 360);
      let speed = random(5, 10);
      let redPetal = new RedPetal1(x, y, vx, vy, speed, angle, redPetalImage);
      this.plants.push(redPetal);
    }

    //Creating the leaves
    for (let i = 0; i < numLeaves; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let vx = random(5, 15);
      let vy = random(5, 15);
      let angle = random(0, 360);
      let speed = random(5, 10);
      let leaf = new Leaf1(x, y, vx, vy, speed, angle, leafImage);
      this.plants.push(leaf);
    }
  }

  //Preloading necessary images for level 1
  preload() {
    super.preload();
    this.sky.preload();
    this.magicPetal.preload();
    this.redPetal.preload();
    this.leaf.preload();
  }

  //Setting level 1
  draw() {
    super.draw();
    push();
    this.sky.display();
    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "Level1",
      this.magicPetal,
      this.framecountSim
    );

    //Setting which states come after the level
    if (timerResult === "BadEnding") {
      currentState = new BadEnding(windowWidth, windowHeight, badEndingImage);
    } else if (timerResult === "GoodEnding1") {
      currentState = new GoodEnding1(
        windowWidth,
        windowHeight,
        goodEndingImage
      );
    }

    //Displaying the elements
    this.user.display();
    if (this.magicPetal.active) {
      this.magicPetal.move();
      this.magicPetal.wrap();
      this.magicPetal.display();
    }

    for (let i = 0; i < this.plants.length; i++) {
      let plant = this.plants[i];
      plant.move();
      plant.wrap();
      plant.display();
    }
    pop();
  }

  //Setting the mousePressed method for the interactivity in the level
  mousePressed() {
    super.mousePressed();
    this.user.mousePressed(this.magicPetal);
  }
}
