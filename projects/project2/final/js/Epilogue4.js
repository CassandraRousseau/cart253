class Epilogue4 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, fleeImage) {
    super(w, h, fleeImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = fleeImage;
    this.name = "Epilogue4";
    this.dialog16 = ["We have to go"];
  }

  //Preloading necessary images for the first cutscene of Chapter Three
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the first cutscene of Chapter Three
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the first cutscene of Chapter Three
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(45);
    fill(0);
    textAlign(CENTER, BOTTOM);
    textFont("Fredericka the Great");

    let dialog = this.dialog16[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Epilogue5(windowWidth, windowHeight, meetingImage);
      currentLine = 0;
    }
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog16.length && state === "Epilogue4") {
        currentLine = this.dialog16.length - 1;
      }
    }
  }
}
