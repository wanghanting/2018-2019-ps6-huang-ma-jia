const { Router } = require('express');
const TicketRouter = require('./tickets');
const CountryRouter = require('./countries');
const StudentRouter = require('./students');
const CompanyRouter = require('./companies');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/tickets', TicketRouter);
router.use('/countries', CountryRouter);
router.use('/students', StudentRouter);
router.use('/companies', CompanyRouter);


module.exports = router;
