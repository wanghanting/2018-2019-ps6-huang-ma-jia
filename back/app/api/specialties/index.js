const { Router } = require('express');
const sector = require ('../../models/sector.model.js');


const router = new Router();
router.get('/', (req, res) => res.status(200).json(sector));
router.get('/sector=:sector', (req, res) => {
    var sectorFinded = false;
    Object.values(sector).forEach((obj) => {
        if (obj.name == req.params.sector){
            res.status(200).json(Object.values(obj.specialties));
            sectorFinded = true;
        }
    })

    if (sectorFinded == false){
        res.status(200).json([]);
    }
});


module.exports = router;
