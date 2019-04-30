const { Router } = require('express');
const { Company } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Company.getActivitySectors()));


module.exports = router;
