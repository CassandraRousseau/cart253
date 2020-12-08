class Level4 extends State {
  //Creating level elements
  constructor() {
    super();

    //Naming level
    this.name = "Level4";

    //Creating microphone
    this.mic = mic;

    //Creating the lake background
    this.water = new Water(windowWidth, windowHeight, waterImage);
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();

    //Creating user circle
    this.user = new User();

    //Creating parts of magic petal array
    this.magicPetals = [];

    //Creating the magic petal
    this.magicPetal = new MagicPetal4(magicPetalImage, this.mic);

    //Creating the bottom left piece of magic petal
    console.log("numMagicPetalBottomLeft");
    for (let i = 0; i < numMagicPetalBottomLeft; i++) {
      let magicPetalBottomLeft = new MagicPetalBottomLeft(
        magicPetalBottomLeftImage,
        this.mic
      );
      this.magicPetals.push(magicPetalBottomLeft);
    }

    //Creating the bottom right piece of magic petal
    for (let i = 0; i < numMagicPetalBottomRight; i++) {
      let magicPetalBottomRight = new MagicPetalBottomRight(
        magicPetalBottomRightImage,
        this.mic
      );
      this.magicPetals.push(magicPetalBottomRight);
    }

    //Creating the top left piece of magic petal
    for (let i = 0; i < numMagicPetalTopLeft; i++) {
      let magicPetalTopLeft = new MagicPetalTopLeft(
        magicPetalTopLeftImage,
        this.mic
      );
      this.magicPetals.push(magicPetalTopLeft);
    }

    //Creating the top right piece of magic petal
    for (let i = 0; i < numMagicPetalTopRight; i++) {
      let magicPetalTopRight = new MagicPetalTopRight(
        magicPetalTopRightImage,
        this.mic
      );
      this.magicPetals.push(magicPetalTopRight);
    }
  }

  //Preloading necessary images for level
  preload() {
    super.preload();
    this.magicPetalTopRight.preload();
    this.magicPetalTopLeft.preload();
    this.magicPetalBottomRight.preload();
    this.magicPetalBottomLeft.preload();
    this.magicPetal.preload();
  }

  //Setting level
  draw() {
    super.draw();
    push();

    //Setting lake background
    this.water.display();

    //Setting the timer
    let timerResult = this.timer.timeCheck(
      "Level4",
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

    //Displaying full magic petal if active
    if (this.magicPetal.active) {
      this.magicPetal.move();
      this.magicPetal.display();
    }

    //Displaying pieces of magic petal
    for (let i = 0; i < this.magicPetals.length; i++) {
      let pieces = this.magicPetals[i];

      //Displaying them only if they are active
      pieces.move();
      pieces.transparency();
      pieces.display();
    }

    //Displaying user
    this.user.display();
    pop();
  }

  //Setting the mousePressed method for the interactivity in the level
  mousePressed() {
    super.mousePressed();
    this.user.mousePressed(this.magicPetal);
  }
}
