const { Router } = require('express');
const { Internship } = require('../../models');
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Internship.get()));
router.get('/country=:countryId', (req, res) => res.status(200).json(Internship.getByCountryIdFromEntreprise(req.params.countryId)));

module.exports = router;
