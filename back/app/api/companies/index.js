const { Router } = require('express');
const { Company } = require('../../models');
const { Student } = require('../../models');
const { Internship } = require('../../models');
const { Country } = require('../../models');


function filterCompany(filiere, specialite, continent, secteur, taile) {
  let companies0 = [];
  let companies1 = [];
  const student = Student.getBySomeInformation(filiere, specialite);
  student.forEach((stu) => {
    const stage = Internship.getById(stu.stageId);
    const company0 = Company.getById(stage.companyId);
    companies0.push(company0);
  });
  console.log(companies0);
  const countries = Country.filterCountry(continent);
  countries.forEach((cou) => {
    const company1 = Company.getByCountryId(cou.id);
    company1.forEach(com => companies1.push(com));
  });
  const companies2 = Company.getBySector(secteur);
  const companies3 = Company.getByTaile(taile);
  const intersectionArray = companies0.filter(x => companies1.includes(x, 0)
  && companies2.includes(x, 0) && companies3.includes(x, 0));
  return intersectionArray;
}

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Company.getWithFilter(req.query.countryId, req.query.sector, req.query.specialty)));
router.get('/search/', (req, res) => res.status(200).json(filterCompany(req.query.filiere, req.query.specialite, req.query.continent, req.query.secteur, req.query.taile)));
router.delete('/:companyId', (req, res) => res.status(200).json(Company.delete(req.params.companyId)));
router.put('/:companyId', (req, res) => res.status(200).json(Company.update(req.params.companyId, req.body)));


module.exports = router;
