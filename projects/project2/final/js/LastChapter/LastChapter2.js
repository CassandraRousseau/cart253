class LastChapter2 extends State {
  //Creating the second cutscene of the Last Chapter
  constructor(w, h, evilImage) {
    super(w, h, evilImage);
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = evilImage;

    //Naming state
    this.name = "LastChapter2";

    //Creating second cutscene dialog of Last Chapter
    this.dialog14 = [
      "'Pretty surprising right?!?!'",
      "'You thought you will be the only one looking for THESE???'",
      "'WRONG!!!'",
      "'THAT'S RIGHT! I am just like you!'",
      "'The only difference is that I was too late...'",
      "'I thought I would have to live like this for the rest of my life...'",
      "'BUT!!!'",
      "'I DISCOVERED THOSE MIRACULOUS PETALS THAT COULD CHANGE EVERYTHINGGG'",
      "'BUT!!!'",
      "'YOU CAME TO DESTROY MY PLAN!!!'",
      "'I WILL NEVER FORGIVE YOU!!!'",
      "'Unless...'",
      "'That you give me all these pretty petals...'",
      "'Of course, this is not what you want right?'",
      "'Oh well...'",
      "'I guess I don't have a choice...'",
      "'You know...'",
      "'TO KILL YOU!!!'",
      "Press Enter",
    ];
  }

  //Preloading necessary images for the second cutscene of the Last Chapter
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of the Last Chapter
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of the Last Chapter
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(80);
    textAlign(CENTER, BOTTOM);

    //Displaying second cutscene dialog of Last Chapter
    let dialog = this.dialog14[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the second cutscene of the Last Chapter
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new LastChapter3(windowWidth, windowHeight, surviveImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog14.length && state === "LastChapter2") {
        currentLine = this.dialog14.length - 1;
      }
    }
  }
}
