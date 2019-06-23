var cow = require('../models').cow;

module.exports = {
  getCows: (req, res) => {
    return cow.get().then(data => {
      res.status(200).send(data);
    });
  },

  postCow: (req, res) => {
    var body = {
      name: req.body.name,
      description: req.body.description
    };
    return cow.post(body).then(() => {
      res.status(201).send('Successfully Posted Cow.');
    });
  }
};
