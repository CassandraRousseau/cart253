class Epilogue3 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, unconsciousImage) {
    super(w, h, unconsciousImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = unconsciousImage;
    this.name = "Epilogue3";
    this.dialog15 = [
      "I think it will be unconscious for a while",
      "I will solve this case later",
    ];
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
    textSize(60);
    textAlign(CENTER, BOTTOM);

    let dialog = this.dialog15[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Epilogue4(windowWidth, windowHeight, fleeImage);
    }
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog15.length && state === "Epilogue3") {
        currentLine = this.dialog15.length - 1;
      }
    }
  }
}
