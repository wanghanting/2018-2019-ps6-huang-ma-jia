const { Router } = require('express');
const { Student } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  Student.find(req.query, {
  }, (err, student) => {
    res.send(student);
  });
});
module.exports = router;
