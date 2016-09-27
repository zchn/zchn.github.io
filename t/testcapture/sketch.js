var capture;

function setup() {
  createCanvas(480, 120);
  capture = createCapture(VIDEO);
}

function draw() {
  image(capture, 0, 0, width, width*capture.height/capture.width);
  filter(INVERT);
}
