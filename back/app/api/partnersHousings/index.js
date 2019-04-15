const { Router } = require('express');
const { PartnerHousing } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(PartnerHousing.get()));
router.get('/country=:countryId', (req, res) => res.status(200).json(PartnerHousing.getByCountryId(req.params.countryId)));


module.exports = router;
