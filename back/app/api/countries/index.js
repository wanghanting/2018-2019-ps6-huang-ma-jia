const { Router } = require('express');
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  Country.find(req.query, {}, (err, company) => {
    res.send(company);
  });
});
// router.get('/:countryId', (req, res) => res.status(200).json(Country.getById(req.params.countryId)));

module.exports = router;
