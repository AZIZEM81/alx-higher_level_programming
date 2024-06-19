#!/usr/bin/node

// Import the Square class from the previous task
const SquareBase = require('./5-square');

// Define the new Square class that extends the imported class
class Square extends SquareBase {
  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

// Export the new Square class
module.exports = Square;
