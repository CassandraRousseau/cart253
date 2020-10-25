class Level1 {
  //Creating simulation elements
  constructor() {
    super();
    let user = new User();
    for (let i = 0; i < numPetals; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let petal = new Petal(x, y, petalImage);
      petals.push(petal);
    }
    push();
    let x = random(0, width);
    let y = random(0, height);
    let magicPetal = new MagicPetal(x, y, magicPetalImage);
    pop();
  }
  //Preloading necessary images for simulation
  preload() {
    super.preload();
    petalImage = loadImage("assets/images/soccer.png");
    magicPetalImage = loadImage("assets/images/magicPetal.png");
    kneeImage = loadImage("assets/images/knee.png");
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
