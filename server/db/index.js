var Promises = require('bluebird');
var mysql = require('mysql');

module.exports.db = Promises.promisifyAll(
  mysql.createConnection({
    database: 'cow',
    user: 'root',
    password: 'toor'
  })
);

module.exports.db.connect(err => {
  if (err) {
    console.log('Problem connecting to database');
    throw err;
  } else {
    console.log("Connected to 'cow' database");
  }
});
