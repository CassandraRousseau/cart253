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
    let kneeImage;
    let soccerImage;
    let basketballImage;
    let knee = new Knee(300, 300, kneeImage);
    for (let i = 0; i < numSoccers; i++) {
      let x = random(0, width);
      let y = random(-400, -100);
      let soccer = new Soccer(x, y, soccerImage);
      soccers.push(soccer);
    }
    for (let i = 0; i < numBasketballs; i++) {
      let x = random(0, width);
      let y = random(-400, -100);
      let basketball = new Basketball(x, y, basketballImage);
      basketballs.push(basketball);
    }
  }
  //Preloading necessary images for simulation
  preload() {
    super.preload();
    soccerImage = loadImage("assets/images/soccer.png");
    basketballImage = loadImage("assets/images/basketball.png");
    kneeImage = loadImage("assets/images/knee.png");
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
