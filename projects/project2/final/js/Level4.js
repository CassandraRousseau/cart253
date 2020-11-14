class Level4 extends State {
  //Creating level elements
  constructor() {
    super();

    //Naming level
    this.name = "Level4";

    //Creating microphone
    this.mic = mic;

    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();

    //Creating user circle
    this.user = new User();

    //Creating nature elements array
    this.magicPetals = [];

    //Creating the magic petal
    for (let i = 0; i < numMagicPetals; i++) {
      this.magicPetal = new MagicPetal3(magicPetalImage, this.mic);
      this.magicPetals.push(this.magicPetal);
    }

    //Creating the left side rock
    for (let i = 0; i < numMagicPetalDownLeft; i++) {
      let vx = 0.25;

      let magicPetalDownLeft = new MagicPetalDownLeft(
        vx,
        magicPetalDownLeftImage,
        this.mic
      );
      this.magicPetals.push(magicPetalDownLeft);
    }

    //Creating the right side rock
    for (let i = 0; i < numMagicPetalDownRight; i++) {
      let vx = 0.25;

      let magicPetalDownRight = new MagicPetalDownRight(
        vx,
        magicPetalDownRightImage,
        this.mic
      );
      this.magicPetals.push(magicPetalDownRight);
    }

    //Creating the left side thorn
    for (let i = 0; i < numMagicPetalUpLeft; i++) {
      let vx = 0.25;

      let magicPetalUpLeft = new MagicPetalUpLeft(
        vx,
        magicPetalUpLeftImage,
        this.mic
      );
      this.magicPetals.push(magicPetalUpLeft);
    }

    //Creating the right side thorn
    for (let i = 0; i < numMagicPetalUpRight; i++) {
      let x = (5 * width) / 6;
      let y = height / 2;

      let vx = 0.25;

      let magicPetalUpRight = new MagicPetalUpRight(
        x,
        y,
        vx,
        magicPetalUpRightImage,
        this.mic
      );
      this.magicPetals.push(magicPetalUpRight);
    }
  }

  //Preloading necessary images for level
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
    background(100, 50, 200);

    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "Level",
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

    //Displaying nature elements
    for (let i = 0; i < this.magicPetals.length; i++) {
      let parts = this.magicPetals[i];

      //Displaying them only if magicPetal is active
      if (this.magicPetal.active) {
        parts.move();
        parts.display();
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
