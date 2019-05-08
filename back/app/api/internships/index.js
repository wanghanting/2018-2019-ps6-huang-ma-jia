const { Router } = require('express');
const { Internship } = require('../../models');
const { Company } = require('../../models');
const { Student } = require('../../models');
let internshiplist;


const router = new Router();
router.get('/', (req, res) => {
  if (req.query.sector) {
    Student.find({ sector: req.query.sector }, { id:1, _id: 0 }, (err, student) => {
      console.log(student);
    });
  }
  if (req.query.specialty) {
    Student.find({ specialty: req.query.specialty }, { id: 1, _id: 0 }, (err, student) => {
      console.log(student);
    });
  }

  if (req.query.sectorCompany) {
    Company.find({ activitySector: req.query.sector }, { id: 1, _id: 0 }, (err, company) => {
      console.log(company);
    });
  }
  if (req.query.employeesnumber) {
    Company.find({ employeesNumber: req.query.employeesnumber }, { id: 1, _id: 0 }, (err, company) => {
      console.log(company);
    });
  }
  if (req.query.period) {
    Internship.find({ period: req.query.period }, { _id: 0 }, (err, internship) => {
      console.log(internship);
      internshiplist = internship;
    });
  }
  if (req.query.start) {
    Internship.find({ startDate: req.query.start }, { _id: 0 }, (err, internship) => {
      console.log(internship);
    });
  }
  if (req.query.start) {
    Internship.find({ startDate: req.query.start }, { _id: 0 }, (err, internship) => {
      console.log(internship);
    });
  }
});
// router.get('/', (req, res) => res.status(200).json(Internship.getWithInternFilter(req.query)));
router.get('/nbIntership', (req, res) => res.status(200).json(Internship.getNumberIntershipByCountryId(req.query)));

module.exports = router;
