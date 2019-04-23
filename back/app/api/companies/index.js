const { Router } = require('express');
const { Company } = require('../../models');
const { Student } = require('../../models');

function filterCompany(params) {
  console.log(params);
  const student = Student.getBySomeInformation(params.filiere, params.specialite);
  console.log(student);
  return student;
}

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Company.get()));
router.delete('/:companyId', (req, res) => res.status(200).json(Company.delete(req.params.companyId)));
router.put('/:companyId', (req, res) => res.status(200).json(Company.update(req.params.companyId, req.body)));
router.get('/country=:countryId', (req, res) => res.status(200).json(Company.getByCountryId(req.params.countryId)));
router.get('/filiere=:filiere&specialite=:specialite&continent=:continent&secteur=:secteur&taile=:taile', (req, res) => res.status(200).json(filterCompany(req.params)));

module.exports = router;
