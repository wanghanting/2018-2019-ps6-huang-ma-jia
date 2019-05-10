const { Router } = require('express');
const { Company } = require('../../models');

const router = new Router();

router.get('/', (req, res) => {
  Company.find(req.query, { id: 1, _id: 0 }, (err, company) => {
    res.send(company);
  });
});
router.get('/companyNb', (req, res) => res.status(200).json(Company.getNumberCompanyByCountryId(req.query)));

module.exports = router;
