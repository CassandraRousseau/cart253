class Prologue extends State {
  //Creating the title screen

  constructor(w, h, girlImage) {
    super(w, h, girlImage);
    this.name = "Prologue";
    this.dialog1 = [
      "To read the book, press Spacebar",
      "Once upon a time,",
      "A little girl...",
      "A little girl... different from other children.",
      "This little girl was cursed",
      "A rose replaced her heart.",
      "If her rose dies...",
      "If her rose dies...She will die too.",
      "Unfortunately,",
      "Her rose started to fade",
      "Slowly,",
      "Slowly,surely...",
    ];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = girlImage;
    this.titleString = "Ephemeral";
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
    //Setting instruction screen
    function instructions() {
      push();
      textSize(85);
      fill(225, 125, 125);
      textAlign(LEFT, TOP);
      textFont("Lemonada");

      let dialog1 = intro[currentLine];
      text(dialog1, 10, height / 2, windowWidth, windowHeight);
      pop();
    }
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
    text(this.titleString, width / 2, height / 2);

    push();
    textSize(45);
    text("Press Enter to start", width / 2, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Instructions2();
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog1.length && state === "Prologue") {
        currentLine = this.dialog1.length - 1;
      }
    }
  }
}
