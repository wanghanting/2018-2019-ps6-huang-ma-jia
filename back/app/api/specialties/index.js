const { Router } = require('express');
const { Sector } = require('../../models');
const { Specialty} = require('../../models');


const router = new Router();
router.get('/', (req, res) => {
  if (! req.query.sector) {
    Specialty.find({},{name:1},(err, student) => {
      console.log(student);
      res.send(student);
    });
  }
  if (req.query.sector) {
    Sector.find({ name: req.query.sector }, { specialty: 1, _id: 0 }, (err, student) => {
      console.log(student);
      res.send(student);
    });
  }
});


module.exports = router;
