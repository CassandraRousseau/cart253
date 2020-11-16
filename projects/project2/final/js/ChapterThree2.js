class ChapterOne1 extends State {
  //Creating the title screen
  constructor(w, h, curiousImage) {
    super(w, h, curiousImage);
    this.name = "ChapterOne1";
    this.dialog5 = [
      "The little girl,",
      "Feeling more and more powerless each day,",
      "Searched desesperately a way to heal herself.",
      "Press Enter",
    ];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = curiousImage;
  }
  //Preloading necessary images for title screen
  preload() {
    super.preload();
    this.image.preload();
  }
  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the title screen
  display() {
    push();
    image(this.image, this.x, this.y, this.w, this.h);
    background(this.image);
    textSize(115);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Fredericka the Great");
    text(this.dialog5, width / 2, height / 2);
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new ChapterOne2();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog5.length && state === "ChapterOne1") {
        currentLine = this.dialog5.length - 1;
      }
    }
  }
}
