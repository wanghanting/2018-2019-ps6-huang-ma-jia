const { Router } = require('express');
const CountryRouter = require('./countries');
const StudentRouter = require('./students');
const CompanyRouter = require('./companies');
const PartnerHousingRouter = require('./partnersHousings');
const InternshipRouter = require('./internships');
const Specialty = require('./specialties');
const Sector = require('./sectors');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/countries', CountryRouter);
router.use('/students', StudentRouter);
router.use('/companies', CompanyRouter);
router.use('/partnersHousings', PartnerHousingRouter);
router.use('/internships', InternshipRouter);
router.use('/specialties', Specialty);
router.use('/sectors', Sector);

module.exports = router;
