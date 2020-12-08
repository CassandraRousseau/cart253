class Epilogue5 extends State {
  //Creating the fifth cutscene of Epilogue
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
      "Seeking the right moment to grapple the petals you have found",
      "Unfortunately,",
      "The petals will do nothing for this poor being.",
      "Once you reach the state of becoming a monster,",
      "There's no coming back...",
      "Anyway,",
      "I probably forgot to mention this but congratulations!",
      "You made it through this journey!",
      "As promised,",
      "I will cure your curse",
      "I will make sure that you will not finish like this creature, haha!",
      "Let's get started before it becomes too late!",
      "Press Enter",
    ];
  }

  //Preloading necessary images for the fifth cutscene of Epilogue
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the fifth cutscene of Epilogue
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the fifth cutscene of Epilogue
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    fill(0);
    textAlign(CENTER, TOP);

    let dialog = this.dialog17[currentLine];
    text(dialog, 0, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the fifth cutscene of Epilogue
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Epilogue6(windowWidth, windowHeight, girlImage);
    }
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog17.length && state === "Epilogue5") {
        currentLine = this.dialog17.length - 1;
      }
    }
  }
}
