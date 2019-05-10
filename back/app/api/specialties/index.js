const { Router } = require('express');
const { Specialty } = require('../../models');


const router = new Router();
router.get('/', (req, res) => {
  Specialty.find(req.query, {
    id: 1,
    name: 1,
    _id: 0
  }, (err, specialty) => {
    res.send(specialty);
  });
});

module.exports = router;
