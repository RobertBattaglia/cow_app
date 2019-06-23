var db = require('../db').db;

db.queryAsync('SELECT * FROM cows')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
