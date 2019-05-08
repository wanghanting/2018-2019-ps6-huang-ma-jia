const { Router } = require('express');
const {Sector}  = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  Sector.find({}, {
    id: 1,
    name: 1,
    _id: 0
  }, (err, student) => {
    console.log(student);
    res.send(student);
  });
});


module.exports = router;
