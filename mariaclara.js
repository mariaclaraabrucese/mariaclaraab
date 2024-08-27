function setup() {
  createCanvas(400, 400);
   background("white");
}

function draw() {
  
  
  stroke("blue");
  fill("pink");
  
  // console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
