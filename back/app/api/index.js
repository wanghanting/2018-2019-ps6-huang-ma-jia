const { Router } = require('express');
const CountryRouter = require('./countries');
const StudentRouter = require('./students');
const CompanyRouter = require('./companies');
const PartnerHousingRouter = require('./partnersHousings');
const InternshipRouter = require('./internships');
const SpecialtyRouter = require('./specialties');
const SectorRouter = require('./sectors');
const CompanySizeRouter = require('./employeesNumber');
const ActivitySectorsRouter = require('./activitySectors');
const PeriodRouter = require('./period');
const StartDateRouter = require('./startdate');
const LogeRouter = require('./loge');
const ReviewRouter = require('./review');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/countries', CountryRouter);
router.use('/students', StudentRouter);
router.use('/companies', CompanyRouter);
router.use('/partnersHousings', PartnerHousingRouter);
router.use('/internships', InternshipRouter);
router.use('/specialties', SpecialtyRouter);
router.use('/sectors', SectorRouter);
router.use('/employeesNumber', CompanySizeRouter);
router.use('/activitySectors', ActivitySectorsRouter);
router.use('/startdates', StartDateRouter);
router.use('/periods', PeriodRouter);
router.use('/loge', LogeRouter);
router.use('/review', ReviewRouter);


module.exports = router;
