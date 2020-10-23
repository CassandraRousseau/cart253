class Simulation {
  //Setting simulation
  game() {
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
