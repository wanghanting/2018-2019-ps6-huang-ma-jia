const { Router } = require('express');
const { Internship } = require('../../models');
const { Company } = require('../../models')
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Internship.get()));

function getByInternshpIdFromEntreprise(internship){
  return internship.id;
}

function getInternshipType(internship){
  return internship.contract;
}

function getInternshipCarInformation(internship){
  return internship.ifHasCar;
}

function getSomeInformationInternship(internship) {
  console.log(internship);
  return Object.assign({}, internship);
}

router.get('/country=:countryId', (req, res) => res.status(200).json(Internship.getByCountryIdFromEntreprise(req.params.countryId)));
router.get('/company=:companyId', (req, res) => res.status(200).json(Internship.getByInternshipId(req.params.companyId)));
router.get('/internship=:internshipId', (req, res) => res.status(200).json(Internship.getByInternshipId(req.params.internshipId)));

router.post('/getid', (req, res) => {
  try {
    const internship = getByInternshpIdFromEntreprise(req.body);
    res.status(200).json(internship);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.post('/', (req, res) => {
  try {
    const internship = Internship.create(req.body);
    res.json({msg: "success", data: internship})
    // res.status(201).json(internship);
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
    const internship = getSomeInformationInternship(req.body);
    res.status(200).json(internship);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
