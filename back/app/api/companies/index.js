const { Router } = require('express');
const { Company } = require('../../models');
const { Student } = require('../../models');
const { Internship } = require('../../models');
const { Country } = require('../../models');


function filterCompany(params) {
  console.log(params);
  const student = Student.getBySomeInformation(params.filiere, params.specialite);
  console.log(student);
  const countries = Country.filterCountry(params.continent);
  console.log(countries);
  const companies1 = Company.getBySomeInformation2(countries, params.secteur, params.taile);
  const stage = Internship.getById(student.stageId);
  const companies2 = Company.getById(stage.companyId);
  const obj = Object.assign({}, companies1, companies2);
  return obj;
}

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Company.getWithFilter(req.query.countryId, req.query.sector, req.query.specialty)));
router.delete('/:companyId', (req, res) => res.status(200).json(Company.delete(req.params.companyId)));
router.put('/:companyId', (req, res) => res.status(200).json(Company.update(req.params.companyId, req.body)));

//router.get('/country=:countryId', (req, res) => res.status(200).json(Company.getByCountryId(req.params.countryId)));
//router.get('/filiere=:filiere&specialite=:specialite&continent=:continent&secteur=:secteur&taile=:taile', (req, res) => res.status(200).json(filterCompany(req.params)));


module.exports = router;
