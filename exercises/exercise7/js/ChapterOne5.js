class ChapterOne5 extends State {
  //Creating the title screen
  constructor(w, h, beginningImage) {
    super(w, h, beginningImage);
    this.name = "ChapterOne5";
    this.dialog9 = [
      "And it was a this moment that the little girl started her perilous journey...",
      "Press Enter",
    ];
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.image = beginningImage;
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
    textSize(45);
    fill(255);
    textAlign(CENTER, TOP);
    textFont("Fredericka the Great");
    let dialog = this.dialog9[currentLine];
    text(dialog, 10, 50, windowWidth, windowHeight);
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Instructions1();
      currentLine = 0;
    }

    if (keyCode === 32) {
      currentLine = currentLine + 1;

      if (currentLine === this.dialog9.length && state === "ChapterOne5") {
        currentLine = this.dialog9.length - 1;
      }
    }
  }
}
