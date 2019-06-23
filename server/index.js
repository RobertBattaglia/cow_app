var express = require('express');
var controllers = require('./controllers');

var app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/cows', (req, res, next) => {
  controllers.getCows(req, res).then(() => {
    next();
  });
});

app.post('/api/cows', (req, res, next) => {
  controllers.postCow(req, res).then(() => {
    next();
  });
});

if (!module.parent) {
  app.listen(1337);
}

module.exports.app = app;
