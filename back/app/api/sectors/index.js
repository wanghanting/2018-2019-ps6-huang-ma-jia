const { Router } = require('express');
const sector = require ('../../models/sector.model.js');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Object.keys(sector)));


module.exports = router;
