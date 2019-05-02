const { Router } = require('express');
const sectors = require ('../../models/sector.model.js');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Object.keys(sectors)));


module.exports = router;
