const { Router } = require('express');
const {Sector} = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  Sector.find(req.query, {}, (err, sector) => {
    res.send(sector);
  });
});


module.exports = router;
