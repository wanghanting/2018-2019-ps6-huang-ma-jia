const { Router } = require('express');
const { Company } = require('../../models');

const router = new Router();

router.get('/', (req, res) => {
  if (req.query.name) {
    const query = {};
    query.name = new RegExp(req.query.name);
    Company.find(query, {}, (err, company) => {
      res.send(company);
    });
  } else {
    Company.find(req.query, { _id: 0 }, (err, company) => {
      res.send(company);
    });
  }
});
router.get('/companyNb', (req, res) => res.status(200).json(Company.getNumberCompanyByCountryId(req.query)));

module.exports = router;
