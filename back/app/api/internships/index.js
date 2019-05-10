const { Router } = require('express');
const { Internship } = require('../../models');


const router = new Router();
router.get('/', (req, res) => {
  Internship.find(req.query, { id: 1, _id: 0 }, (err, internship) => {
    res.send(internship);
  });
});
router.get('/nbIntership', (req, res) => res.status(200).json(Internship.getNumberIntershipByCountryId(req.query)));

module.exports = router;
