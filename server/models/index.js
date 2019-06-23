var db = require('../db').db;

module.exports.cow = {
  get: () => {
    return db.queryAsync('SELECT * FROM cows').catch(err => {
      console.error(err);
    });
  },
  post: ({ name, description }) => {
    return db
      .queryAsync('INSERT INTO cows (name, description) VALUES (?, ?)', [
        name,
        description
      ])
      .catch(err => {
        console.error(err);
      });
  }
};
