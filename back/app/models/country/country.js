const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  flagImage: {
    type: String,
    required: true,
  },
  visaDifficulty: {
    type: Number,
    required: true,
  },
  hiringOpportunities: {
    type: String,
    required: true,
  },
  visaInformation: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Country', countrySchema,'countries');
