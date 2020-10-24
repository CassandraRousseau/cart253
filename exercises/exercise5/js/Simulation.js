class Simulation extends State {
  //Creating simulation elements
  constructor() {
    super();
    let gravityForce = 0.0025;
    let timer;
    let soccers = [];
    let basketballs = [];
    let numSoccers = 3;
    let numBasketballs = 3;
    let knee = new Knee();
    for (let i = 0; i < numSoccers; i++) {
      let x = random(0, width);
      let y = random(-400, -100);
      let soccer = new Soccer(x, y);
      soccers.push(soccer);
    }
    for (let i = 0; i < numBasketballs; i++) {
      let x = random(0, width);
      let y = random(-400, -100);
      let basketball = new Basketball(x, y);
      basketballs.push(basketball);
    }
  }
  //Preloading necessary images for simulation
  preload() {
    super.preload();
    soccer.image = loadImage("assets/images/soccer.png");
    basketball.image = loadImage("assets/images/basketball.png");
    knee.image = loadImage("assets/images/knee.png");
  }
  //Setting simulation
  draw() {
    super.draw();
    let timer = new Timer();
    timer.timeCheck();
    timer.gameOver();
    knee.display();
    for (let i = 0; i < soccers.length; i++) {
      let soccer = soccers[i];
      if (soccer.active) {
        soccer.gravity(gravityForce);
        soccer.move();
        soccer.bounce(knee);
        soccer.display();
      }
    }
    for (let i = 0; i < basketballs.length; i++) {
      let basketball = basketballs[i];
      if (basketball.active) {
        basketball.gravity(gravityForce);
        basketball.move();
        basketball.bounce(knee);
        basketball.display();
      }
    }
  }
}
