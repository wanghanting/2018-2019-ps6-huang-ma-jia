const { Router } = require('express');
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Country.get()));
router.get('/:countryId', (req, res) => res.status(200).json(Country.getById(req.params.countryId)));
router.delete('/:countryId', (req, res) => res.status(200).json(Country.delete(req.params.countryId)));
router.put('/:countryId', (req, res) => res.status(200).json(Country.update(req.params.countryId, req.body)));


router.post('/', (req, res) => {
  try {
    const country = Country.create(req.body);
    res.status(201).json(country);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
