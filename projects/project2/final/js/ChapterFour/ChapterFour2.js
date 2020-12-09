class ChapterFour2 extends State {
  //Creating the second cutscene of Chapter Four
  constructor(w, h, doctorImage) {
    super(w, h, doctorImage);

    //Naming state
    this.name = "ChapterFour2";

    //Creating second cutscene dialog of Chapter Four
    this.dialog11 = [
      "'Madam, during your pregnancy, have you ever touch or pick some roses in the area?'",
      "'Uh...yes..One time while I was walking in the village...'",
      "*Sigh*",
      "'During the past few years, a strange bacteria has spread on the roses in the region'",
      "'This infection caused a lot of side effects on pregnant women who entered in contact with those flowers...'",
      "'The new borns had heart defects, which turned a lot worse once they grew up..'",
      "'Does our little girl will die?!?!'",
      "'It's worses...'",
      "Press Enter",
    ];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = doctorImage;
  }

  //Preloading necessary images the second cutscene of Chapter Four
  preload() {
    super.preload();
    this.image.preload();
  }

  //Setting the second cutscene of Chapter Four
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the second cutscene of Chapter Four
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(60);
    textAlign(CENTER, BOTTOM);

    //Displaying second cutscene dialog of Chapter Four
    let dialog = this.dialog11[currentLine];
    text(dialog, 0, 0, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed action after the second cutscene of Chapter Four
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new ChapterFour3(windowWidth, windowHeight, monsterImage);
    }

    //Changes line by pressing spacebar key
    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog11.length && state === "ChapterFour2") {
        currentLine = this.dialog11.length - 1;
      }
    }
  }
}
