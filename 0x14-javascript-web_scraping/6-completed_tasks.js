#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const todos = JSON.parse(body);
    const completed = todos.reduce((acc, todo) => {
      if (todo.completed) {
        acc[todo.userId] = (acc[todo.userId] || 0) + 1;
      }
      return acc;
    }, {});
    console.log(completed);
  }
});
