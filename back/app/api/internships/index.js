const { Router } = require('express');
const { Internship } = require('../../models');
const { Company } = require('../../models');
const { Student } = require('../../models');

let internshiplist;
let studentlist;
Internship.find({}, {
  id: 1,
  name: 1,
  _id: 0,
}, (err, internship) => {
  internshiplist = internship;
});
Student.find({}, {
  id: 1,
  name: 1,
  _id: 0,
}, (err, student) => {
  studentlist = student;
});

const router = new Router();
router.get('/', (req, res) => {
  if (req.query.companyId) {
    Internship.find({ companyId: req.query.companyId }, { id: 1, name: 1, _id: 0 }, (err, internship) => {
      internshiplist = internship;
    });
  }
  if (req.query.sector) {
    Student.find({ sector: req.query.sector }, {
      id: 1,
      _id: 0,
    }, (err, student) => {
      studentlist = studentlist.filter(i => student.some(stu => stu.id === i.id));
      internshiplist = internshiplist.filter(i => studentlist.some(stu => stu.id === i.studentId));
    });
  }
  if (req.query.specialty) {
    Student.find({ specialty: req.query.specialty }, {
      id: 1,
      _id: 0,
    }, (err, student) => {
      studentlist = studentlist.filter(i => student.some(stu => stu.id === i.id));
      internshiplist = internshiplist.filter(i => studentlist.some(stu => stu.id === i.studentId));
    });
  }

  if (req.query.sectorCompany) {
    Company.find({ activitySector: req.query.sector }, {
      id: 1,
      _id: 0,
    }, (err, company) => {
      internshiplist = internshiplist.filter(i => company.some(com => com.id === i.companyId));
    });
  }
  if (req.query.employeesnumber) {
    Company.find({ employeesNumber: req.query.employeesnumber }, {
      id: 1,
      _id: 0,
    }, (err, company) => {
      internshiplist = internshiplist.filter(i => company.some(com => com.id === i.companyId));
    });
  }
  if (req.query.period) {
    Internship.find({ period: req.query.period }, { _id: 0 }, (err, internship) => {
      internshiplist = internshiplist.filter(i => internship.some(intern => i.id === intern.id));
    });
  }
  if (req.query.start) {
    Internship.find({ startDate: req.query.start }, { _id: 0 }, (err, internship) => {
      internshiplist = internshiplist.filter(i => internship.some(intern => i.id === intern.id));
    });
  }
  res.send(internshiplist);
});
// router.get('/', (req, res) => res.status(200).json(Internship.getWithInternFilter(req.query)));
router.get('/nbIntership', (req, res) => res.status(200).json(Internship.getNumberIntershipByCountryId(req.query)));

module.exports = router;
