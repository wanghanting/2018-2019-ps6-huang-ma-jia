const { Router } = require('express');
const sector = require ('../../models/sector.model.js');


const router = new Router();
router.get('/', (req, res) => {
    if (req.query.sector) {
        res.status(200).json(Object.values(sector).find(sector => sector.name == req.query.sector).specialties);
    } else {
        res.status(200).json(sector)
    }
});


module.exports = router;
