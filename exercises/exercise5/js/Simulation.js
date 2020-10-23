class Simulation extends State {
  constructor() {
    super();
    let gravityForce = 0.0025;
    let timer;
    let knee;
    let soccers = [];
    let basketballs = [];
    let numSoccers = 3;
    let numBasketballs = 3;
    knee = new Knee(300, 300);
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
  preload() {
    soccer.preload();
    basketball.preload();
    knee.preload();
  }
  //Setting simulation
  draw() {
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
