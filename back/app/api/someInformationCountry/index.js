const { Router } = require('express');
const { SomeInformationCountry } = require('../../models');

const router = new Router();

router.get('/', (req, res) => res.status(200).json(SomeInformationCountry.get()));
module.exports = router;
