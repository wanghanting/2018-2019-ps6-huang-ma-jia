const { Router } = require('express');
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  Country.find(req.query, { _id: 0 }, (err, contry) => {
    res.send(contry);
  });
});

module.exports = router;
