class Epilogue7 extends State {
  //Creating the last cutscene of the game
  constructor(w, h, smileImage) {
    super(w, h, smileImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = smileImage;

    //Naming state
    this.name = "Epilogue7";

    //Creating last cutscene dialog of the game
    this.dialog18 = [
      "'Tadaa!!!'",
      "'Now you will be able to live your life as a human being'",
      "'Without any concerns...'",
      "The End",
      "Thank you for playing!",
      "If you want to replay, Press Enter!",
    ];
  }

  //Preloading necessary images for the last cutscene of the game
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the last cutscene of the game
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the last cutscene of the game
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(70);
    textAlign(CENTER, TOP);

    //Displaying last cutscene dialog of the game
    let dialog = this.dialog18[currentLine];
    text(dialog, 0, 10, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the last cutscene of the game
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      location.reload();
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog18.length && state === "Epilogue7") {
        currentLine = this.dialog18.length - 1;
      }
    }
  }
}
