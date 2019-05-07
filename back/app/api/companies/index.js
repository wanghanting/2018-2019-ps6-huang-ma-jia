const { Router } = require('express');
const { Company } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Company.getWithCompanyFilter(req.query)));
router.get('/companyNb', (req, res) => res.status(200).json(Company.getNumberCompanyByCountryId(req.query)));
router.delete('/:companyId', (req, res) => res.status(200).json(Company.delete(req.params.companyId)));
router.put('/:companyId', (req, res) => res.status(200).json(Company.update(req.params.companyId, req.body)));

module.exports = router;
