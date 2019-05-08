const mongoose = require('mongoose')

const periodSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('Period', periodSchema, 'period');
