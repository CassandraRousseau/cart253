class Level1 {
  //Creating simulation elements
  constructor() {
    super();
    this.petals = [];
    let x = random(0, width);
    let y = random(0, height);
    this.magicPetal = new MagicPetal(x, y, magicPetalImage);
    this.user = new User();
    for (let i = 0; i < numPetals; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let redPetal = new RedPetal(x, y, petalImage);
      petals.push(redPetal);
    }
  }
  //Preloading necessary images for simulation
  preload() {
    super.preload();
    petalImage;
    magicPetalImage;
  }
  //Setting simulation
  draw() {
    super.draw();
    let timer = new Timer();
    timer.timeCheck();
    timer.gameOver();
    user.display();
    for (let i = 0; i < petals.length; i++) {
      let petal = petals[i];
      if (petal.active) {
        petal.gravity(gravityForce);
        petal.move();
        petal.bounce(knee);
        petal.display();
      }
    }
    if (magicPetal.active) {
      magicPetal.gravity(gravityForce);
      magicPetal.move();
      magicPetal.bounce(knee);
      magicPetal.display();
    }
  }
}
