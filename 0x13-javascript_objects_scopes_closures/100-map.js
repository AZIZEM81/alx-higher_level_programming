#!/usr/bin/node

// Import the list from 100-data.js
const { list } = require('./100-data');

// Create a new list using map, multiplying each value by its index
const newList = list.map((value, index) => value * index);

// Print the initial list and the new list
console.log(list);
console.log(newList);
