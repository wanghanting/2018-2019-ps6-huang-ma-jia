const Student = require('./student/student.js');
const Company = require('./company/company.js');
const Country = require('./country/country.js');
const ActivitySector = require('./activitysector/activitysector.js');
const PartnerHousing = require('./partnerHousing.model.js');
const Internship = require('./internship/internship.js');
const Sector = require('./sector/sector.js');
const StartDate = require('./startDate/startDate.js');
const Period = require('./period/period.js');
const Specialty = require('./sector/specialty.js');
const EmploeesNumber = require('./employeesNumber/employeeNumber.js')

module.exports = {
  EmploeesNumber, Student, Company, Country, PartnerHousing, Internship, ActivitySector, Sector, StartDate, Period, Specialty,
};
