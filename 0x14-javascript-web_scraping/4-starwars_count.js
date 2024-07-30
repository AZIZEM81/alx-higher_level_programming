#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    const count = films.reduce((acc, film) => {
      return acc + film.characters.filter(char => char.includes('/18/')).length;
    }, 0);
    console.log(count);
  }
});
