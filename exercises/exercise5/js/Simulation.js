class Simulation extends State {
  //Creating simulation elements
  constructor() {
    super();
    this.name = "simulation";
    this.framecountSim = frameCount;
    this.timer = new Timer();
    this.knee = new Knee(300, 300, kneeImage);
    this.soccers = [];
    this.basketballs = [];
    for (let i = 0; i < numSoccers; i++) {
      let x = random(0, width);
      let y = random(-400, -100);
      let soccer = new Soccer(x, y, soccerImage);
      this.soccers.push(soccer);
    }
    for (let i = 0; i < numBasketballs; i++) {
      let x = random(0, width);
      let y = random(-400, -100);
      let basketball = new Basketball(x, y, basketballImage);
      this.basketballs.push(basketball);
    }
  }
  //Preloading necessary images for simulation
  preload() {
    super.preload();
    this.knee.preload();
    this.basketballs.preload();
    this.soccers.preload();
  }

  //Setting simulation
  draw() {
    super.draw();
    let timerResult = this.timer.timeCheck(
      "simulation",
      this.soccers,
      this.framecountSim
    );
    if (timerResult === "BallsFalling") {
      currentState = new BallsFalling();
    } else if (timerResult === "GoodEnding") {
      currentState = new GoodEnding();
    }
    this.knee.display();
    this.knee.handleInput();
    this.knee.move();
    for (let i = 0; i < this.soccers.length; i++) {
      let soccer = this.soccers[i];
      if (soccer.active) {
        soccer.gravity(gravityForce);
        soccer.move();
        soccer.bounce(this.knee);
        soccer.display();
      }
      if (soccer.y > height) {
        this.soccers.splice(i, 1);
        break;
      }
    }
    for (let i = 0; i < this.basketballs.length; i++) {
      let basketball = this.basketballs[i];
      if (basketball.active) {
        basketball.gravity(gravityForce);
        basketball.move();
        basketball.bounce(this.knee);
        basketball.display();
      }
    }
  }
}
