var express = require('express');
var controllers = require('./controllers');
var path = require('path');

var app = express();

app.use('/', express.static(path.join(__dirname, '../', 'dist')));
app.use(express.json());
app.use(require('cors')());
app.use(
  require('morgan')(
    ':method :url :status :res[content-length] - :response-time ms'
  )
);

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
