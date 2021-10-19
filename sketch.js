// Create setup() function
function setup() {
  // Create canvas 500px wide and 500px high
  createCanvas(500, 500);
}

// Create draw() function
function draw() {
  // Set color of lines to gray value of 127
  stroke(127);
  // setting thickness of lines to 10px
  strokeWeight(10);
// Use a for loop to draw 10 vertical lines
  for(let posX = 0; posX < 10; posX++) {
    line(posX * 25, 0, posX * 25, 250);
  }
  noStroke();
  // Setting color for polka dots
  fill('#ffd700');
  for(let posX = 0; posX < 10; posX++) {
    for(let posY = 0; posY < 10; posY++) {
      // Checking if value of posX is even
      if(posX % 2 === 0) {
        // if even, drawing circle with 10px offset for y position
        circle(posX * 25 + width/2, posY * 25 + 10, 10)
        // if not, drawing circle without an offset
      } else {
      circle(posX * 25 + width/2, posY * 25, 10);
    }
    }
  }
  // Making squares red
  fill('red');
  //outer for loop iterates 10 times using posX iterator variable
  for(let posX = 0; posX < 10; posX++) {
    //inner for loop iterates 5 times using posY iterator variable
    for(let posY = 0; posY < 5; posY++) {
      // Checking if value of posX is even
      if(posX % 2 === 0) {
        // if even, drawing square with 25px addition to the y position
        square(posX * 25, posY * 50 + height/2 + 25, 25);
        // if not, drawing squares without an offset
      } else {
      square(posX * 25, posY * 50 + height/2, 25);
    }
    }
  }
  strokeWeight(10);
  // Making diagonal lines blue
  stroke(0, 0, 255);
  // for loop will iterate 10 times using i iterator variable
  for(let i = 0; i < 10; i++) {
    // drawing lines with starting point at half the canvas width for x position and the canvas height subtracted by i multiplied by 25 as y position. Setting endpoint to half canvas width added by i multiplied by 25 for x position and the canvas height as y position
    line(width/2, height - i * 25, width/2 + i * 25, height);
    // Starting point is at half canvase width added by i multiplied by 25 as x position and half the canvas height as y position. Endpoint's x position at the canvas width and y position at the canvas height subtracted by i multiplied by 25
    line(width/2 + i * 25, height/2, width, height - i * 25);
  }
    // Making border black
    stroke(0);
    // Draw horizontal and vertical guidelines
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    // Draw border
    line(0, 0, width, 0);
    line(0, height, width, height);
    line(0, 0, 0, height);
    line(width, 0, width, height);
}
 