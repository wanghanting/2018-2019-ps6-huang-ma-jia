const { Router } = require('express');
const { Internship } = require('../../models' );


const router = new Router();
router.get('/', (req, res) => res.status(200).json(Internship.getWithInternFilter(req.query)));
router.get('/nbIntership', (req, res) => res.status(200).json(Internship.getNumberIntershipByCountryId(req.query)));

module.exports = router;
