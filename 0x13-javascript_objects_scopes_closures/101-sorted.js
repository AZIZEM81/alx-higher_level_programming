#!/usr/bin/node

// Import the dictionary from 101-data.js
const { dict } = require('./101-data');

// Create a new dictionary with occurrences as keys and user IDs as values
const sortedDict = {};
for (const [userId, occurrences] of Object.entries(dict)) {
  if (!sortedDict[occurrences]) {
    sortedDict[occurrences] = [];
  }
  sortedDict[occurrences].push(userId);
}

// Print the sorted dictionary
console.log(sortedDict);
