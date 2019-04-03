const { Router } = require('express');
const CountryRouter = require('./countries');
const MiniCountryRouter = require('./mini-countries');
const StudentRouter = require('./students');
const CompanyRouter = require('./companies');
const PartnerHousingRouter = require('./partnerHousing');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/countries', CountryRouter);
router.use('/mini-countries', MiniCountryRouter);
router.use('/students', StudentRouter);
router.use('/companies', CompanyRouter);
router.use('/partnerHousing', PartnerHousingRouter);


module.exports = router;
