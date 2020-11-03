/**************************************************
Sound experiments
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
"use strict";
let synth;
let notes = ["F2", "G2", "F2", "C3", "C3", "F2", "Eb3", "C3"];
let currentNote = 0;
function preload() {}
function setup() {
  createCanvas(600, 600);
  synth = new p5.PolySynth();
  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
}
function keyPressed() {
  setInterval(playRandomNote, 150);
}
function playRandomNote() {
  let note = notes[currentNote];
  synth.play(note, 0, 1, 4);
  currentNote += 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}
