#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const characters = movie.characters;
    printCharacters(characters, 0);
  }
});

function printCharacters(characters, index) {
  if (index >= characters.length) {
    return;
  }
  request(characters[index], (charError, charResponse, charBody) => {
    if (charError) {
      console.error(charError);
    } else {
      const character = JSON.parse(charBody);
      console.log(character.name);
      printCharacters(characters, index + 1);
    }
  });
}
