const { Router } = require('express');
const {EmploeesNumber} = require ('../../models');

const router = new Router();
router.get('/', (req, res) => {
  EmploeesNumber.find(req.query, {
    id: 1,
    _id: 0,
    name: 1
  }, (err, emploeesNumber) => {
    res.send(emploeesNumber);
  });
})
module.exports = router;
