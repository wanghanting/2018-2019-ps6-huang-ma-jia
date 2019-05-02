const { Router } = require('express');
const CountryRouter = require('./countries');
const StudentRouter = require('./students');
const CompanyRouter = require('./companies');
const PartnerHousingRouter = require('./partnersHousings');
const InternshipRouter = require('./internships');
const SpecialtyRouter = require('./specialties');
const SectorRouter = require('./sectors');
const CompanySizeRouter = require('./companySizes');
const SomeInformationCountry  = require('./someInformationCountry');
const ActivitySectorsRouter  = require('./activitySectors');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/countries', CountryRouter);
router.use('/students', StudentRouter);
router.use('/companies', CompanyRouter);
router.use('/partnersHousings', PartnerHousingRouter);
router.use('/internships', InternshipRouter);
router.use('/specialties', SpecialtyRouter);
router.use('/sectors', SectorRouter);
router.use('/companySizes', CompanySizeRouter);
router.use('/someInformationCountry', SomeInformationCountry);
router.use('/activitySectors', ActivitySectorsRouter);

module.exports = router;
