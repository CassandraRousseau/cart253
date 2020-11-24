class LastChapter2 extends State {
  //Creating the first cutscene of Chapter Three
  constructor(w, h, evilImage) {
    super(w, h, evilImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = evilImage;
    this.name = "LastChapter2";
    this.dialog14 = [
      "Pretty surprising right?!?!",
      "You thought you will be the only one searching for this?",
      "WRONG!!!",
      "That's right! I am just like you!",
      "The only difference is that I was too late...",
      "I thought I would have to live like this for the rest of my life",
      "BUT!!!",
      "I found this miraculous flower that could change everythinggggg",
      "BUT!!!",
      "YOU CAME TO DESTROY MY WHOLE PLAN!!!",
      "I WILL NEVER FORGIVE YOU!!!",
      "Unless...",
      "That you give me all the pretty petals...",
      "Of course, this is not what you want right?",
      "Oh well...",
      "I guess I don't have a choice...",
      "You know...",
      "TO KILL YOU!!!",
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
    textFont("Fredericka the Great");

    let dialog = this.dialog14[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the first cutscene of Chapter Three
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new LastChapter3(windowWidth, windowHeight, surviveImage);
      currentLine = 0;
    }
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog14.length && state === "LastChapter2") {
        currentLine = this.dialog14.length - 1;
      }
    }
  }
}