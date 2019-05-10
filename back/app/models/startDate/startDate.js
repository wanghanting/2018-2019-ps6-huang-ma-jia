const mongoose = require('mongoose')

const startDateSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('StartDate', startDateSchema, 'startDate');
