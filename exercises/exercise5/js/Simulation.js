class Simulation extends State {
  //Creating simulation elements
  constructor() {
    super();

    this.name = "simulation";
    //Creating timer
    this.framecountSim = frameCount;
    this.timer = new Timer();
    //Creating knee
    this.knee = new Knee(300, 300, kneeImage);
    this.soccers = [];
    this.basketballs = [];

    //Creating the soccer balls
    for (let i = 0; i < numSoccers; i++) {
      let x = random(0, width);
      let y = random(-400, -100);
      let soccer = new Soccer(x, y, soccerImage);
      this.soccers.push(soccer);
    }

    //Creating the basketball balls
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
    //Setting the timer during simulation

    let timerResult = this.timer.timeCheck(
      "simulation",
      this.soccers,
      this.framecountSim
    );

    //Setting which states come after the simulation
    if (timerResult === "BallsFalling") {
      currentState = new BallsFalling();
    } else if (timerResult === "GoodEnding") {
      currentState = new GoodEnding();
    }

    //Setting the knee
    this.knee.display();
    this.knee.handleInput();
    this.knee.move();

    //Setting the soccer balls
    for (let i = 0; i < this.soccers.length; i++) {
      let soccer = this.soccers[i];

      if (soccer.active) {
        soccer.gravity(gravityForce);
        soccer.move();
        soccer.bounce(this.knee);
        soccer.display();
      }

      //What happens when the balls goes off the screen

      if (soccer.y > height) {
        this.soccers.splice(i, 1);

        break;
      }
    }

    //Setting basketball balls
    for (let i = 0; i < this.basketballs.length; i++) {
      let basketball = this.basketballs[i];

      if (basketball.active) {
        basketball.gravity(gravityForce);
        basketball.move();
        basketball.touch(this.knee);
        basketball.display();

        //Setting what happens when the knee touches one of the basketball balls
        let basketCollision = basketball.touch(this.knee);

        if (basketCollision === "Dribble") {
          currentState = new Dribble();
        }
      }
    }
  }
}
