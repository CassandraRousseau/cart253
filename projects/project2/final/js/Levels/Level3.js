class Level3 extends State {
  //Creating level 3 elements
  constructor() {
    super();
    this.name = "Level3";
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.user = new User();
    this.plants = [];

    //Creating the magic petal
    push();

    let x = random(0, width);

    let y = random(0, height);

    let speed = 0;

    let vx = 0;

    let vy = 0;

    this.magicPetal = new MagicPetal3(x, y, vx, vy, speed, magicPetalImage);
    pop();

    //Creating the red petals
    for (let i = 0; i < numRedPetals2; i++) {
      let x = random(0, width);

      let y = random(0, height);

      let angle = random(0, 360);

      let redPetal = new RedPetal2(x, y, vx, vy, speed, angle, redPetalImage);

      this.plants.push(redPetal);
    }

    //Creating the leaves
    for (let i = 0; i < numLeaves2; i++) {
      let x = random(0, width);

      let y = random(0, height);

      let angle = random(0, 360);

      let leaf = new Leaf2(x, y, vx, vy, speed, angle, leafImage);

      this.plants.push(leaf);
    }
  }

  //Preloading necessary images for level 3
  preload() {
    super.preload();

    this.magicPetal.preload();
    this.redPetal.preload();
    this.leaf.preload();
  }

  //Setting level 3
  draw() {
    super.draw();
    background(75, 35, 25);
    push();

    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "Level3",
      this.magicPetal,
      this.framecountSim
    );

    //Setting which states come after the level
    //**Assistance from the instructor Pippin to know how to call at a specific state the common good ending for each level
    if (timerResult === "BadEnding") {
      currentState = new BadEnding(
        windowWidth,
        windowHeight,
        badEndingImage,
        4
      );
    } else if (timerResult === "GoodEnding3") {
      currentState = new GoodEnding(
        windowWidth,
        windowHeight,
        goodEndingImage,
        4
      );
    }

    //Displaying the elements
    this.user.display();

    if (this.magicPetal.active) {
      this.magicPetal.move();
      this.magicPetal.display();
    }

    for (let i = 0; i < this.plants.length; i++) {
      let plant = this.plants[i];
      plant.move();
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
