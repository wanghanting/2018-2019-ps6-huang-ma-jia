const { Router } = require('express');
const { Company } = require('../../models');

function getIDCompanyFiltres(company) {
  return company.id;
}
function getSomeInformationCompany(company) {
  this.items = [];
  this.name = name;
  this.filePath = `${__dirname}/../../mocks/${this.name.toLowerCase()}.mocks.json`;
  try {
    this.items = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  } catch (err) {
    if (err.message === 'Unexpected end of JSON input') logger.log(`Warning : ${this.filePath} has wrong JSON format`);
  }
  return Object.assign({}, company);
}

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Company.getWithOption(req.query.countryId, req.query.sector, req.query.specialty)));
router.delete('/:companyId', (req, res) => res.status(200).json(Company.delete(req.params.companyId)));
router.put('/:companyId', (req, res) => res.status(200).json(Company.update(req.params.companyId, req.body)));


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
    console.log(req.body);
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
