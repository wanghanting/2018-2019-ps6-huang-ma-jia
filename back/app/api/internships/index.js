const { Router } = require('express');
const { Internship } = require('../../models' );
const { Company } = require('../../models');
const { Country } = require('../../models');

const router = new Router();

router.get('/', (req, res) => res.status(200).json(Internship.get()));
// router.delete('/:id', (req, res) => res.status(200).json(Country.delete(req.params.id)));
router.put('/:id', (req, res) => res.status(200).json(Country.update(req.params.id, req.body)));

router.get('/country/:countryId', (req, res) => res.status(200).json(Internship.getByCountryId(req.params.countryId)));

router.get('/company/:companyId', (req, res) => res.status(200).json(Internship.getByCompanyId(req.params.companyId)));

router.get('/id/:id', (req, res) => res.status(200).json(Internship.getById(req.params.id)));


router.post('/', (req, res) => {
  try {
    const internship = Internship.create(req.body);
    res.status(201).json(internship);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});


module.exports = router;
