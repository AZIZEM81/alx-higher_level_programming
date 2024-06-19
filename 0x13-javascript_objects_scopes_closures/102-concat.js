#!/usr/bin/node

// Import the required modules
const fs = require('fs');

// Get the file paths from the command-line arguments
const [, , fileA, fileB, fileC] = process.argv;

// Read the contents of fileA and fileB
const contentA = fs.readFileSync(fileA, 'utf-8');
const contentB = fs.readFileSync(fileB, 'utf-8');

// Concatenate the contents of fileA and fileB
const concatContent = `${contentA}\n${contentB}`;

// Write the concatenated content to fileC
fs.writeFileSync(fileC, concatContent);
