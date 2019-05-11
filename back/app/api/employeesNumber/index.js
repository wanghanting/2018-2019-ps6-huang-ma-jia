const { Router } = require('express');
const {EmploeesNumber} = require ('../../models');

const router = new Router();
router.get('/', (req, res) => {
  EmploeesNumber.find(req.query, {}, (err, emploeesNumber) => {
    res.send(emploeesNumber);
  });
})
module.exports = router;
