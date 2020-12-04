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
    this.magicPetal = new MagicPetal4(magicPetalImage, this.mic);
    //Creating the left side rock
    for (let i = 0; i < numMagicPetalDownLeft; i++) {
      let magicPetalDownLeft = new MagicPetalDownLeft(
        magicPetalDownLeftImage,
        this.mic
      );
      this.magicPetals.push(magicPetalDownLeft);
    }

    //Creating the right side rock
    for (let i = 0; i < numMagicPetalDownRight; i++) {
      let magicPetalDownRight = new MagicPetalDownRight(
        magicPetalDownRightImage,
        this.mic
      );
      this.magicPetals.push(magicPetalDownRight);
    }

    //Creating the left side thorn
    for (let i = 0; i < numMagicPetalUpLeft; i++) {
      let magicPetalUpLeft = new MagicPetalUpLeft(
        magicPetalUpLeftImage,
        this.mic
      );
      this.magicPetals.push(magicPetalUpLeft);
    }

    //Creating the right side thorn
    for (let i = 0; i < numMagicPetalUpRight; i++) {
      let magicPetalUpRight = new MagicPetalUpRight(
        magicPetalUpRightImage,
        this.mic
      );
      this.magicPetals.push(magicPetalUpRight);
    }
  }

  //Preloading necessary images for level
  preload() {
    super.preload();
    this.magicPetalUpRight.preload();
    this.magicPetalUpLeft.preload();
    this.magicPetalDownRight.preload();
    this.magicPetalDownLeft.preload();
    this.magicPetal.preload();
  }

  //Setting level
  draw() {
    super.draw();
    push();
    background(50, 150, 200);

    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "Level4",
      this.magicPetal,
      this.framecountSim
    );

    //Setting which states come after the level
    if (timerResult === "BadEnding") {
      currentState = new BadEnding(
        windowWidth,
        windowHeight,
        badEndingImage,
        5
      );
    } else if (timerResult === "GoodEnding4") {
      currentState = new GoodEnding(
        windowWidth,
        windowHeight,
        goodEndingImage,
        5
      );
    }

    //Displaying the elements

    if (this.magicPetal.active) {
      this.magicPetal.move();
      this.magicPetal.display();
    }
    //Displaying nature elements
    for (let i = 0; i < this.magicPetals.length; i++) {
      let parts = this.magicPetals[i];

      //Displaying them only if magicPetal is active
      parts.move();
      parts.transparency();
      parts.display();
    }
    this.user.display();
    pop();
  }

  //Setting the mousePressed method for the interactivity in the level
  mousePressed() {
    super.mousePressed();
    this.user.mousePressed(this.magicPetal);
  }
}
