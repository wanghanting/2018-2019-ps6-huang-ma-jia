const { Router } = require('express');
const { Review } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  Review.find(req.query, {}, (err, sector) => {
    res.send(sector);
  });
});


module.exports = router;
