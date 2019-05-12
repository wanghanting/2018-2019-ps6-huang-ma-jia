const { Router } = require('express');
const { Period } = require('../../models');


const router = new Router();
router.get('/', (req, res) => {
  Period.find(req.query, {
  }, (err, specialty) => {
    res.send(specialty);
  });
});

module.exports = router;
