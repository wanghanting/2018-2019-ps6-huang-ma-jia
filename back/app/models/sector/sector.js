const mongoose = require('mongoose')

const sectorSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: Array,
    required: true,
  },
})
module.exports = mongoose.model('Sector', sectorSchema, 'sector');
