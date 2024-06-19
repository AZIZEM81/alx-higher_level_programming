#!/usr/bin/node

// Define the Rectangle class
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
}

// Export the Rectangle class
module.exports = Rectangle;
