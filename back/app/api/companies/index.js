const { Router } = require('express');
const { Company } = require('../../models');
const { Internship } = require('../../models');


const router = new Router();
router.get('/', (req, res) => {
  Company.find({ id: 1 }, {
    name: 1,
    _id: 0,
  }, (err, company) => {
    console.log(company);
    res.send(company);
  });
});
router.get('/companyNb', (req, res) => res.status(200).json(Company.getNumberCompanyByCountryId(req.query)));

module.exports = router;
