const { Router } = require('express');
const { Specialty } = require('../../models');


const router = new Router();
router.get('/', (req, res) => {
  Specialty.find(req.query, {
  }, (err, specialty) => {
    res.send(specialty);
  });
});

module.exports = router;
