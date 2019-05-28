const { Router } = require('express');
const { Internship } = require('../../models');


const router = new Router();
router.get('/', (req, res) => {
  if (req.query.name) {
    const query = {};
    query.name = new RegExp(req.query.name);
    Internship.find(query, {}, (err, internship) => {
      res.send(internship);
    });
  } else {
    Internship.find(req.query, {}, (err, internship) => {
      res.send(internship);
    });
  }
});
router.get('/nbIntership', (req, res) => res.status(200).json(Internship.getNumberIntershipByCountryId(req.query)));

module.exports = router;
