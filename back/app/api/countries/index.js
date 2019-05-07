const { Router } = require('express');
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Country.get()));
router.get('/:countryId', (req, res) => res.status(200).json(Country.getById(req.params.countryId)));

module.exports = router;
