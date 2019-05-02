const { Router } = require('express');
const companySizes = require ('../../models/companySize.model.js');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(companySizes));


module.exports = router;
