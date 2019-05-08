const Student = require('./student/student.js');
const Company = require('./company/company.js');
const Country = require('./country/country.js');
const ActivitySector = require('./activitysector/activitysector.js');
const PartnerHousing = require('./partnerHousing.model.js');
const Internship = require('./internship/internship.model.js');

module.exports = {
  Student, Company, Country, PartnerHousing, Internship, ActivitySector
};
