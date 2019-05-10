const { Router } = require('express');
const {Sector}  = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  Sector.find(req.query, {
    id: 1,
    name: 1,
    _id: 0
  }, (err, sector) => {
    res.send(sector);
  });
});


module.exports = router;
