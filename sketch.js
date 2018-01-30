// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(320, 240);
  walker = new Walker(100, 100);


  background(200);
}

function draw() {
  walker.render();
  walker.step();
}
