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
  shortName:{
    type: String,
    required: true,
  },
  flagPath: {
    type: String,
    required: true,
  },
  photoPath:{
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
  visaWeb: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  visaInfo: {
    type: Array,
    required: true,
  },
  rent:{
    type: String,
    required: true,
  },
  earning:{
    type: String,
    required: true,
  },
  expenditure:{
    type: String,
    required: true,
  },

});
module.exports = mongoose.model('Country', countrySchema,'countries');
