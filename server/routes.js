var router = require('./').router;

router.get('', (req, res, next) => {
  res.send('Hello World');
});
