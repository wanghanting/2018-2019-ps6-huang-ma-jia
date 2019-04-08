const { Router } = require('express');
const { Company } = require('../../models');

function getIDCompanyFiltres(company) {
  return company.id;
}
function getSomeInformationCompany(company) {
  console.log(company);
  return Object.assign({}, company);
}

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Company.get()));
router.delete('/:companyId', (req, res) => res.status(200).json(Company.delete(req.params.companyId)));
router.put('/:companyId', (req, res) => res.status(200).json(Company.update(req.params.companyId, req.body)));
router.get('/country=:countryId', (req, res) => res.status(200).json(Company.getByCountryId(req.params.countryId)));


router.post('/', (req, res) => {
  try {
    const company = Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});
router.post('/getid', (req, res) => {
  try {
    const company = getIDCompanyFiltres(req.body);
    res.status(200).json(company);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.post('/filterresult', (req, res) => {
  try {
    const company = getSomeInformationCompany(req.body);
    res.status(200).json(company);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
