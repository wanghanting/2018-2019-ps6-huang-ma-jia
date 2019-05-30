const { Router } = require('express');
const { List } = require('../../models/');

const router = new Router();
router.get('/', (req, res) => {
  List.findOne(req.query, { _id: 0 }, (err, list) => {
    res.send(list);
  });
});

module.exports = router;
