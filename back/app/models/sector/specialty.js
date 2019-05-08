const mongoose = require('mongoose')

const specialtySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Specialty', specialtySchema, 'specialty');
