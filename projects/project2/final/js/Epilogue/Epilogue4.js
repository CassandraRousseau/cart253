class Epilogue4 extends State {
  //Creating the fourth cutscene of Epilogue
  constructor(w, h, fleeImage) {
    super(w, h, fleeImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = fleeImage;

    //Naming state
    this.name = "Epilogue4";

    //Creating fourth cutscene dialog of Epilogue
    this.dialog16 = ["We have to go", "Press Enter"];
  }

  //Preloading necessary images for the fourth cutscene of Epilogue
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the fourth cutscene of Epilogue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the fourth cutscene of Epilogue
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    textAlign(CENTER, BOTTOM);

    //Displaying fourth cutscene dialog of Epilogue
    let dialog = this.dialog16[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the fourth cutscene of Epilogue
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Epilogue5(windowWidth, windowHeight, meetingImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog16.length && state === "Epilogue4") {
        currentLine = this.dialog16.length - 1;
      }
    }
  }
}
