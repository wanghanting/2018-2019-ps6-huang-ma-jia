const { Router } = require('express');
const { Company } = require('../../models');


const router = new Router();
// router.get('/', (req, res) => res.status(200).json(Company.getWithCompanyFilter(req.query)));
router.get('/companyNb', (req, res) => res.status(200).json(Company.getNumberCompanyByCountryId(req.query)));

module.exports = router;
