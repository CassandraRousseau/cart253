class ChapterOne2 extends State {
  //Creating the title screen
  constructor() {
    super();
    this.name = "ChapterOne2";
    this.dialog6 = [
      "One day,",
      "She met an elderly",
      "The elder, shocked to see the weak girl, asks:",
      "Poor Child! Why are you fragile?",
      "The little girl shows her fading rose and responds:",
      "I am ill madam, I need to find a solution to cure my disease...",
      "Oh dear! I can help you!",
      "But you have to be prepared, because the process might be risky",
      "Press Enter",
    ];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = girlImage;
  }
  //Preloading necessary images for title screen
  preload() {
    super.preload();
    this.image.preload();
  }
  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the title screen
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(115);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    text(this.dialog6, width / 2, height / 2);
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterOne3();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog6.length && state === "ChapterOne2") {
        currentLine = this.dialog6.length - 1;
      }
    }
  }
}
