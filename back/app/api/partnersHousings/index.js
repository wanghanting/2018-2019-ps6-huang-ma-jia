const { Router } = require('express');
const { PartnerHousing } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
    if (req.query.countryId) {
        res.status(200).json(PartnerHousing.getByCountryId(req.query.countryId));
    } else {
        res.status(200).json(PartnerHousing.get());
    }
});

module.exports = router;
