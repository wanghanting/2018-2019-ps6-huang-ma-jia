const { Router } = require('express');
const { Internship } = require('../../models');
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Internship.get()));

function getByCountryIdFromEntreprise(company){
  return company.internship.id;
}

router.get('/country=:countryId', (req, res) => res.status(200).json(Internship.getByCountryIdFromEntreprise(req.params.countryId)));
router.get('/company=:companyId', (req, res) => res.status(200).json(Internship.getByInternshipId(req.params.companyId)));
router.get('/internship=:internshipId', (req, res) => res.status(200).json(Internship.getByInternshipId(req.params.internshipId)));

module.exports = router;
