const { Router } = require('express');
const sector = require ('../../models/sector.model.js');


const router = new Router();
router.get('/', (req, res) => {
    if (req.query.sector) {
        var sectorFinded = false;
        Object.values(sector).forEach((obj) => {
            if (obj.name == req.query.sector){
                res.status(200).json(Object.values(obj.specialties));
                sectorFinded = true;
            }
        })
    
        if (sectorFinded == false){
            res.status(200).json([]);
        }
    } else {
        res.status(200).json(sector)
    }
});


module.exports = router;
