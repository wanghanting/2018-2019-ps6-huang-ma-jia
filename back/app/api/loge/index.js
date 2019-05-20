const { Router } = require('express');
const { Loge } = require('../../models/');

const router = new Router();
router.get('/', (req, res) => {
  Loge.find(req.query, { _id: 0 }, (err, loges) => {
    res.send(loges);
  });
});

module.exports = router;
