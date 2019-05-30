const { Router } = require('express');
const { User } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  User.find(req.query, { _id: 0 }, (err, user) => {
    res.send(user);
  });
});
module.exports = router;
