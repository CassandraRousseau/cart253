class Epilogue5 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, meetingImage) {
    super(w, h, meetingImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = meetingImage;
    this.name = "Epilogue5";
    this.dialog17 = [
      "As you probably see",
      "I am the mage living in this castle",
      "This creature probably followed you the whole time ",
      "Seeking the right moment to grapple the petals you found",
      "Unfortunately,",
      "The petals will do nothing for this poor being.",
      "Once you reach the state of being a monster,",
      "There's no coming back...",
      "Anyway,",
      "I probably forgot to mention that but congratulations!",
      "You made it through this journey!",
      "As promise,",
      "I will cure your curse",
      "You will be sure you will not finish like this humanly rose, haha!",
      "Let's get started before it's too late!",
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
    textSize(45);
    fill(0);
    textAlign(CENTER, BOTTOM);

    let dialog = this.dialog17[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Epilogue6(windowWidth, windowHeight, girlImage);
      currentLine = 0;
    }
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog17.length && state === "Epilogue5") {
        currentLine = this.dialog17.length - 1;
      }
    }
  }
}
