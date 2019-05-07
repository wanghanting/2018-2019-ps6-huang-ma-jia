const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  iconImage: {
    type: String,
    required: true,
  },
  countryId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  employeesNumber: {
    type: String,
    required: true,
  },
  creationDate: {
    type: String,
    required: true,
  },
  activitySector: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('Company', companySchema);
