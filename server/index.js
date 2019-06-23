var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/cows', (req, res) => {});

app.post('/cows', (req, res) => {});

if (!module.parent) {
  app.listen(1337);
}

module.exports.app = app;
