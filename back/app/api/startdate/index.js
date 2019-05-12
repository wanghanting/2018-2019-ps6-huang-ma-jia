const { Router } = require('express');
const { StartDate } = require('../../models');


const router = new Router();
router.get('/', (req, res) => {
  StartDate.find(req.query, {
  }, (err, specialty) => {
    res.send(specialty);
  });
});

module.exports = router;
