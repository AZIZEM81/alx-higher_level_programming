#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  for (const element of list) { // Change 'let' to 'const'
    if (element === searchElement) {
      count++;
    }
  }
  return count;
};
