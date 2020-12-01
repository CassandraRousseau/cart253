class Epilogue7 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, smileImage) {
    super(w, h, smileImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = smileImage;
    this.name = "Epilogue7";
    this.dialog18 = [
      "Tada!",
      "Now you will be able to live your life as a human being",
      "Without any concerns...",
      "The End",
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
    textSize(70);
    textAlign(CENTER, TOP);

    let dialog = this.dialog18[currentLine];
    text(dialog, 0, 10, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      location.reload();
    }
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog18.length && state === "Epilogue7") {
        currentLine = this.dialog18.length - 1;
      }
    }
  }
}
