class Epilogue3 extends State {
  //Creating the third cutscene of Epilogue
  constructor(w, h, unconsciousImage) {
    super(w, h, unconsciousImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = unconsciousImage;

    //Naming state
    this.name = "Epilogue3";

    //Creating third cutscene dialog of Epilogue
    this.dialog15 = [
      "'I think it will be unconscious for a while'",
      "'I will solve this case later'",
      "Press Enter",
    ];
  }

  //Preloading necessary images for the third cutscene of Epilogue
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the third cutscene of Epilogue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the third cutscene of Epilogue
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    textAlign(CENTER, BOTTOM);

    //Displaying third cutscene dialog of Epilogue
    let dialog = this.dialog15[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the third cutscene of Epilogue
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Epilogue4(windowWidth, windowHeight, fleeImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog15.length && state === "Epilogue3") {
        currentLine = this.dialog15.length - 1;
      }
    }
  }
}
