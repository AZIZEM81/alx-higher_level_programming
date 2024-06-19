#!/usr/bin/node

// Define the Rectangle class
class Rectangle {
  constructor (w, h) { // Add a space here
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () { // Add a space here
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () { // Add a space here
    [this.width, this.height] = [this.height, this.width];
  }

  double () { // Add a space here
    this.width *= 2;
    this.height *= 2;
  }
}

// Export the Rectangle class
module.exports = Rectangle;
