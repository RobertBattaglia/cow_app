var express = require('express');

var app = express();
var router = express.Router();

app.use('/', router);
app.use(require('body-parser'));

if (!module.parent) {
  app().listen(3000);
}

module.exports.app = app;
module.exports.router = router;
