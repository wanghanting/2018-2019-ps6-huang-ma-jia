const { Router } = require('express');
const { Student } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  Student.find(req.query, {
    id: 1,
    name: 1,
    _id: 0
  }, (err, student) => {
    res.send(student);
  });
});
module.exports = router;
